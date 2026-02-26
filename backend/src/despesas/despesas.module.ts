import { Module } from '@nestjs/common';
import { DespesasController } from './despesas.controller.js';
import { DespesasService } from './despesas.service.js';
import { PrismaProvider } from '../banco/prisma.provider.js';

@Module({
  controllers: [DespesasController],
  providers: [DespesasService, PrismaProvider],
})
export class DespesasModule {}
