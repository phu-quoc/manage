import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  KafkaOptions,
  MicroserviceOptions,
  Transport,
} from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const kafkaOptions: KafkaOptions = {
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: ['kafka:29092', 'localhost:9092'], // Adjust the broker address based on your Docker setup
      },
      consumer: {
        groupId: 'group-service-group', // Unique group id for the consumer
      },
    },
  };

  app.connectMicroservice<MicroserviceOptions>(kafkaOptions);

  await app.startAllMicroservices();
  await app.listen(3001);
}

bootstrap();
