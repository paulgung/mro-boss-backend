import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import {
  CreateOutboundDtoPage1,
  CreateOutboundDtoPage2,
  CreateOutboundDtoPage3,
  CreateOutboundDtoPage4,
} from '../outbound/dto/create-outbound.dto';
import {
  UpdateOutboundDtoPage1,
  UpdateOutboundDtoPage2,
  UpdateOutboundDtoPage3,
  UpdateOutboundDtoPage4,
} from '../outbound/dto/update-outbound.dto';
import { OutboundService } from './outbound.service';

@Controller('outbound')
export class OutboundController {
  constructor(private readonly outboundService: OutboundService) {}

  // page1 新建数据
  @Post('/page1')
  createPage1(@Body() createOutboundDto: CreateOutboundDtoPage1) {
    return this.outboundService.createPage1(createOutboundDto);
  }
  // page2 新建数据
  @Post('/page2')
  createPage2(@Body() createOutboundDto: CreateOutboundDtoPage2) {
    return this.outboundService.createPage2(createOutboundDto);
  }

  // page3 新建数据
  @Post('/page3')
  createPage3(@Body() createOutboundDto: CreateOutboundDtoPage3) {
    return this.outboundService.createPage3(createOutboundDto);
  }
  // page4 新建数据
  @Post('/page4')
  createPage4(@Body() createOutboundDto: CreateOutboundDtoPage4) {
    return this.outboundService.createPage4(createOutboundDto);
  }

  // 分页查询page1数据
  @Get('page1')
  findSkipPage1(@Query() query) {
    return this.outboundService.findSkipPage1(
      parseInt(query.pageSize),
      parseInt(query.pageNo),
    );
  }
  // 分页查询page2数据
  @Get('page2')
  findSkipPage2(@Query() query) {
    return this.outboundService.findSkipPage2(
      parseInt(query.pageSize),
      parseInt(query.pageNo),
    );
  }
  // 分页查询page3数据
  @Get('page3')
  findSkipPage3(@Query() query) {
    return this.outboundService.findSkipPage3(
      parseInt(query.pageSize),
      parseInt(query.pageNo),
    );
  }
  // 分页查询page4数据
  @Get('page4')
  findSkipPage4(@Query() query) {
    return this.outboundService.findSkipPage4(
      parseInt(query.pageSize),
      parseInt(query.pageNo),
    );
  }

  // page1 更新数据
  @Patch('page1')
  updatePage1(
    @Param('id') id: string,
    @Body() updateOutboundDto: UpdateOutboundDtoPage1,
  ) {
    return this.outboundService.updatePage1(+id, updateOutboundDto);
  }
  // page2 更新数据
  @Patch('page2')
  updatePage2(
    @Param('id') id: string,
    @Body() updateOutboundDto: UpdateOutboundDtoPage2,
  ) {
    return this.outboundService.updatePage2(+id, updateOutboundDto);
  }
  // page3 更新数据
  @Patch('page3')
  updatePage3(
    @Param('id') id: string,
    @Body() updateOutboundDto: UpdateOutboundDtoPage3,
  ) {
    return this.outboundService.updatePage3(+id, updateOutboundDto);
  }
  // page4 更新数据
  @Patch('page4')
  updatePage4(
    @Param('id') id: string,
    @Body() updateOutboundDto: UpdateOutboundDtoPage4,
  ) {
    return this.outboundService.updatePage4(+id, updateOutboundDto);
  }
}
