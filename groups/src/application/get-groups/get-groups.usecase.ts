import { Injectable } from '@nestjs/common';
import { GetGroupsRepository } from '../../infrastructure/repository/get-groups/get-groups.repository';
import { from, Observable } from 'rxjs';
import { Kafka } from 'kafkajs';

@Injectable()
export class GetGroupsUseCase {
  constructor(private readonly getGroupsRepository: GetGroupsRepository) {}

  getGroups$(): Observable<any> {
    from(
      this.sendMessage('TRAINING-GROUP-MESSAGING', {
        eventName: 'Group',
        data: 'Data of group detail',
      }),
    );
    return this.getGroupsRepository.find$();
  }

  async processGroupMessage(data: any) {
    // Process incoming group messages
    console.log('Processing group message:', data);
    // You can add logic here to handle different event types
  }

  private async sendMessage(topic: string, message: any) {
    const kafka = new Kafka({
      clientId: 'group-service',
      brokers: ['kafka:29092', 'localhost:9092'],
    });

    const producer = kafka.producer();
    await producer.connect();
    await producer.send({
      topic,
      messages: [{ value: JSON.stringify(message) }],
    });
    await producer.disconnect();
  }
}
