import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  AuthCredentialsDto,
  AuthRegisterDto,
  AuthConfirmRegisterDto,
} from './auth.interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() authenticateRequest: AuthCredentialsDto) {
    try {
      return await this.authService.authenticateUser(authenticateRequest);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  @Post('register')
  async register(@Body() authRegisterRequest: AuthRegisterDto) {
    try {
      return await this.authService.register(authRegisterRequest);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  @Post('confirm')
  async confirm(@Body() authConfirmRegisterRequest: AuthConfirmRegisterDto) {
    try {
      return await this.authService.confirmRegistration(
        authConfirmRegisterRequest,
      );
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }
}
