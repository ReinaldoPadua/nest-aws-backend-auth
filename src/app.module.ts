import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: process.env.ENV === "PRD" ? false : true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
