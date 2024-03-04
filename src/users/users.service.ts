import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/User.schema';
import { CreateuserDto } from './dto/CreateUser.dto';
import { UpdateUserDto } from './dto/UpdateUser.dto';
import { UserSettings } from 'src/schemas/UserSetting.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    @InjectModel(UserSettings.name)
    private userSettingsModel: Model<UserSettings>,
  ) {}

  async createUser({ settings, ...createuserDto }: CreateuserDto) {
    if (settings) {
      const newSettings = new this.userSettingsModel(settings);
      const saverdnewSettings = await newSettings.save();
      const newUser = new this.userModel({
        ...createuserDto,
        settings: saverdnewSettings._id,
      });
      return newUser.save();
    }
    const newUser = new this.userModel(createuserDto);
    return newUser.save();
  }

  getUsers() {
    return this.userModel.find().populate('settings');
  }

  getUserById(id: string) {
    return this.userModel.findById(id).populate('settings');
  }

  updateUser(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.findByIdAndUpdate(id, updateUserDto);
  }

  deleteUserById(id: string) {
    return this.userModel.findByIdAndDelete(id);
  }
}
