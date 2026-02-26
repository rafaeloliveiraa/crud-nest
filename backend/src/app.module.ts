import { Module } from '@nestjs/common';
import { DespesasModule } from './despesas/despesas.module.js';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { BancoModule } from './banco/banco.module.js';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DespesasModule,
    BancoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}