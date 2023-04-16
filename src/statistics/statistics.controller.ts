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
  CreateStatisticDtoPage1,
  CreateStatisticDtoPage2,
  CreateStatisticDtoPage3,
  CreateStatisticDtoPage4,
} from './dto/create-statistic.dto';
import {
  UpdateStatisticDtoPage1,
  UpdateStatisticDtoPage2,
  UpdateStatisticDtoPage3,
  UpdateStatisticDtoPage4,
} from './dto/update-statistic.dto';
import { StatisticsService } from './statistics.service';

@Controller('statistics')
export class StatisticsController {
  constructor(private readonly statisticsService: StatisticsService) {}
  // page1 新建数据
  @Post('/page1')
  createPage1(@Body() createOpportunityDto: CreateStatisticDtoPage1) {
    return this.statisticsService.createPage1(createOpportunityDto);
  }
  // page2 新建数据
  @Post('/page2')
  createPage2(@Body() createOpportunityDto: CreateStatisticDtoPage2) {
    return this.statisticsService.createPage2(createOpportunityDto);
  }
  // page3 新建数据
  @Post('/page3')
  createPage3(@Body() createOpportunityDto: CreateStatisticDtoPage3) {
    return this.statisticsService.createPage3(createOpportunityDto);
  }
  // page4 新建数据
  @Post('/page4')
  createPage4(@Body() createOpportunityDto: CreateStatisticDtoPage4) {
    return this.statisticsService.createPage4(createOpportunityDto);
  }

  // 分页查询page1数据
  @Get('page1')
  findSkipPage1(@Query() query) {
    return this.statisticsService.findSkipPage1(
      parseInt(query.pageSize),
      parseInt(query.pageNo),
    );
  }
  // 分页查询page2数据
  @Get('page2')
  findSkipPage2(@Query() query) {
    return this.statisticsService.findSkipPage2(
      parseInt(query.pageSize),
      parseInt(query.pageNo),
    );
  }
  // 分页查询page3数据
  @Get('page3')
  findSkipPage3(@Query() query) {
    return this.statisticsService.findSkipPage3(
      parseInt(query.pageSize),
      parseInt(query.pageNo),
    );
  }
  // 分页查询page4数据
  @Get('page4')
  findSkipPage4(@Query() query) {
    return this.statisticsService.findSkipPage4(
      parseInt(query.pageSize),
      parseInt(query.pageNo),
    );
  }

  // page1 更新数据
  @Patch('page1')
  updatePage1(
    @Param('id') id: string,
    @Body() updateOpportunityDto: UpdateStatisticDtoPage1,
  ) {
    return this.statisticsService.updatePage1(+id, updateOpportunityDto);
  }
  // page2 更新数据
  @Patch('page2')
  updatePage2(
    @Param('id') id: string,
    @Body() updateOpportunityDto: UpdateStatisticDtoPage2,
  ) {
    return this.statisticsService.updatePage2(+id, updateOpportunityDto);
  }
  // page3 更新数据
  @Patch('page3')
  updatePage3(
    @Param('id') id: string,
    @Body() updateOpportunityDto: UpdateStatisticDtoPage3,
  ) {
    return this.statisticsService.updatePage3(+id, updateOpportunityDto);
  }
  // page4 更新数据
  @Patch('page4')
  updatePage4(
    @Param('id') id: string,
    @Body() updateOpportunityDto: UpdateStatisticDtoPage4,
  ) {
    return this.statisticsService.updatePage4(+id, updateOpportunityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.statisticsService.remove(+id);
  }
}
