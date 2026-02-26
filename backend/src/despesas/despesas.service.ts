import { Injectable } from '@nestjs/common';
import { CreateDespesaDto } from './dto/create-despesa.dto.js';
import { UpdateDespesaDto } from './dto/update-despesa.dto.js';
import { PrismaProvider } from '../banco/prisma.provider.js';


@Injectable()
export class DespesasService {

  constructor( private readonly prisma: PrismaProvider ) {}

  create(createDespesaDto: CreateDespesaDto) {
    return this.prisma.despesa.create({
      data:createDespesaDto
    });
  }

  findAll() {
    return this.prisma.despesa.findMany();
  }

  findOne(id: string) {
    return this.prisma.despesa.findUnique({
      where: {
        id: id
      }
    });
  }

  update(id: string, updateDespesaDto: UpdateDespesaDto) {
    return this.prisma.despesa.update({
      where: {
        id: id
      },
      data: updateDespesaDto
    });
  }

  remove(id: string) {
    return this.prisma.despesa.delete({
      where: {
        id: id
      }
    });
  }
}
