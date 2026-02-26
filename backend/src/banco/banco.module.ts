import { Module } from '@nestjs/common';
import { PrismaProvider } from './prisma.provider.js';

@Module({
  providers: [PrismaProvider]
})
export class BancoModule {}
