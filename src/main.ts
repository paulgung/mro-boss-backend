import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { abortOnError: false });
  app.use(cookieParser());
  app.enableCors({ origin: true, credentials: true });

  //swagger
  const config = new DocumentBuilder()
    .setTitle('工业品采购信息系统')
    .setDescription(
      'Industrial Product Purchasing Information System API description',
    )
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
