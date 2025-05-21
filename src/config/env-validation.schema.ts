import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class EnvValidationSchema {
  @IsString()
  @IsNotEmpty()
  STAGE: string;

  @IsNumber()
  @IsNotEmpty()
  PORT: number;
}
