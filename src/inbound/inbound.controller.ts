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
  CreateOpportunityDtoPage1,
  CreateOpportunityDtoPage2,
} from '../opportunity/dto/create-opportunity.dto';
import {
  UpdateOpportunityDtoPage1,
  UpdateOpportunityDtoPage2,
} from '../opportunity/dto/update-opportunity.dto';
import { InboundService } from './inbound.service';

@Controller('inbound')
export class InboundController {
  constructor(private readonly inboundService: InboundService) {}

  // page1 新建数据
  @Post('/page1')
  createPage1(@Body() createOpportunityDto: CreateOpportunityDtoPage1) {
    return this.inboundService.createPage1(createOpportunityDto);
  }
  // page2 新建数据
  @Post('/page2')
  createPage2(@Body() createOpportunityDto: CreateOpportunityDtoPage2) {
    return this.inboundService.createPage2(createOpportunityDto);
  }

  // 分页查询page1数据
  @Get('page1')
  findSkipPage1(@Query() query) {
    return this.inboundService.findSkipPage1(
      parseInt(query.pageSize),
      parseInt(query.pageNo),
    );
  }

  // 分页查询page2数据
  @Get('page2')
  findSkipPage2(@Query() query) {
    return this.inboundService.findSkipPage2(
      parseInt(query.pageSize),
      parseInt(query.pageNo),
    );
  }

  // page1 更新数据
  @Patch('page1')
  updatePage1(
    @Param('id') id: string,
    @Body() updateOpportunityDto: UpdateOpportunityDtoPage1,
  ) {
    return this.inboundService.updatePage1(+id, updateOpportunityDto);
  }

  // page2 更新数据
  @Patch('page2')
  updatePage2(
    @Param('id') id: string,
    @Body() updateOpportunityDto: UpdateOpportunityDtoPage2,
  ) {
    return this.inboundService.updatePage2(+id, updateOpportunityDto);
  }
}
