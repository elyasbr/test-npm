import { NestFactory } from '@nestjs/core';
import { MyTestModule } from './my-test.module';

async function bootstrap() {
  const app = await NestFactory.create(MyTestModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
