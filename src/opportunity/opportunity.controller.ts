import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import {
  CreateOpportunityDtoPage1,
  CreateOpportunityDtoPage2,
  CreateOpportunityDtoPage3,
  CreateOpportunityDtoPage4,
} from './dto/create-opportunity.dto';
import {
  UpdateOpportunityDtoPage1,
  UpdateOpportunityDtoPage2,
  UpdateOpportunityDtoPage3,
  UpdateOpportunityDtoPage4,
} from './dto/update-opportunity.dto';
import { OpportunityService } from './opportunity.service';

@Controller('opportunity')
export class OpportunityController {
  constructor(private readonly opportunityService: OpportunityService) {}

  // page1 新建数据
  @Post('/page1')
  createPage1(@Body() createOpportunityDto: CreateOpportunityDtoPage1) {
    return this.opportunityService.createPage1(createOpportunityDto);
  }
  // page2 新建数据
  @Post('/page2')
  createPage2(@Body() createOpportunityDto: CreateOpportunityDtoPage2) {
    return this.opportunityService.createPage2(createOpportunityDto);
  }
  // page3 新建数据
  @Post('/page3')
  createPage3(@Body() createOpportunityDto: CreateOpportunityDtoPage3) {
    return this.opportunityService.createPage3(createOpportunityDto);
  }
  // page4 新建数据
  @Post('/page4')
  createPage4(@Body() createOpportunityDto: CreateOpportunityDtoPage4) {
    return this.opportunityService.createPage4(createOpportunityDto);
  }

  // 分页查询page1数据
  @Get('page1')
  findSkipPage1(@Query() query) {
    return this.opportunityService.findSkipPage1(
      parseInt(query.pageSize),
      parseInt(query.pageNo),
      parseInt(query.id),
      query.companyName,
    );
  }
  // 分页查询page2数据
  @Get('page2')
  findSkipPage2(@Query() query) {
    return this.opportunityService.findSkipPage2(
      parseInt(query.pageSize),
      parseInt(query.pageNo),
    );
  }
  // 分页查询page3数据
  @Get('page3')
  findSkipPage3(@Query() query) {
    return this.opportunityService.findSkipPage3(
      parseInt(query.pageSize),
      parseInt(query.pageNo),
    );
  }
  // 分页查询page4数据
  @Get('page4')
  findSkipPage4(@Query() query) {
    return this.opportunityService.findSkipPage4(
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
    return this.opportunityService.updatePage1(+id, updateOpportunityDto);
  }
  // page2 更新数据
  @Patch('page2')
  updatePage2(
    @Param('id') id: string,
    @Body() updateOpportunityDto: UpdateOpportunityDtoPage2,
  ) {
    return this.opportunityService.updatePage2(+id, updateOpportunityDto);
  }
  // page3 更新数据
  @Patch('page3')
  updatePage3(
    @Param('id') id: string,
    @Body() updateOpportunityDto: UpdateOpportunityDtoPage3,
  ) {
    return this.opportunityService.updatePage3(+id, updateOpportunityDto);
  }
  // page4 更新数据
  @Patch('page4')
  updatePage4(
    @Param('id') id: string,
    @Body() updateOpportunityDto: UpdateOpportunityDtoPage4,
  ) {
    return this.opportunityService.updatePage4(+id, updateOpportunityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.opportunityService.remove(+id);
  }
}
