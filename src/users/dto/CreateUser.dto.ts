import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateuserDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsString()
  @IsOptional()
  displayname?: string;
}
