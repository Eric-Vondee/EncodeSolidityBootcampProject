import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('API example')
    .setDescription('The API API description')
    .setVersion('1.0')
    .addTag('API')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // const corsOptions = {
  //   origin: '*',
  //   methods: 'GET,HEAD,PUT,PATCH, POST,DELETE',
  //   preflightContinue: false,
  //   allowedHeaders: 'Content-Type, Accept, Authorization',
  // };
  // app.enableCors(corsOptions);

  await app.listen(3000);
}
bootstrap();
