// backend/src/country/dto/update-country.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreateCountryDto } from './create-country.dto';

export class UpdateCountryDto extends PartialType(CreateCountryDto) {}
