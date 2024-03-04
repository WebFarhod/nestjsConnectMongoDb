import { IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  displayname?: string;

  @IsOptional()
  @IsString()
  avatarUrl?: string;
}
