import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateLossDtoPage1 } from './dto/create-loss.dto';
import { UpdateLossDtoPage1 } from './dto/update-loss.dto';
import { LossService } from './loss.service';

@Controller('loss')
export class LossController {
  constructor(private readonly lossService: LossService) {}

  // page1 新建数据
  @Post('/page1')
  createPage1(@Body() createOpportunityDto: CreateLossDtoPage1) {
    return this.lossService.createPage1(createOpportunityDto);
  }

  // 分页查询page1数据
  @Get('page1')
  findSkipPage1(@Query() query) {
    return this.lossService.findSkipPage1(
      parseInt(query.pageSize),
      parseInt(query.pageNo),
    );
  }

  // page1 更新数据
  @Patch('page1')
  updatePage1(
    @Param('id') id: string,
    @Body() updateOpportunityDto: UpdateLossDtoPage1,
  ) {
    return this.lossService.updatePage1(+id, updateOpportunityDto);
  }
}
