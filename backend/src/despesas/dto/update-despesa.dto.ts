import { PartialType } from '@nestjs/mapped-types';
import { CreateDespesaDto } from './create-despesa.dto.js';


export class UpdateDespesaDto extends PartialType(CreateDespesaDto) {}
