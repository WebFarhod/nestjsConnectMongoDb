import { IsNotEmpty, IsString } from 'class-validator';

export class CreateuserDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsString()
  displayname?: string;
}
