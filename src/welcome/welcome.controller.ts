import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WelcomeService } from './welcome.service';
import { CreateWelcomeDto } from './dto/create-welcome.dto';
import { UpdateWelcomeDto } from './dto/update-welcome.dto';

@Controller('welcome')
export class WelcomeController {
  constructor(private readonly welcomeService: WelcomeService) {}

  @Post()
  create(@Body() createWelcomeDto: CreateWelcomeDto) {
    return this.welcomeService.create(createWelcomeDto);
  }

  @Get()
  findAll() {
    return this.welcomeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.welcomeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWelcomeDto: UpdateWelcomeDto) {
    return this.welcomeService.update(+id, updateWelcomeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.welcomeService.remove(+id);
  }
}
