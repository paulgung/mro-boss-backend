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
  CreateFinanceDtoPage1,
  CreateFinanceDtoPage2,
  CreateFinanceDtoPage3,
} from './dto/create-finance.dto';
import {
  UpdateFinanceDtoPage1,
  UpdateFinanceDtoPage2,
  UpdateFinanceDtoPage3,
} from './dto/update-finance.dto';
import { FinanceService } from './finance.service';

@Controller('finance')
export class FinanceController {
  constructor(private readonly financeService: FinanceService) {}
  // page1 新建数据
  @Post('/page1')
  createPage1(@Body() createFinanceDto: CreateFinanceDtoPage1) {
    return this.financeService.createPage1(createFinanceDto);
  }
  // page2 新建数据
  @Post('/page2')
  createPage2(@Body() createFinanceDto: CreateFinanceDtoPage2) {
    return this.financeService.createPage2(createFinanceDto);
  }

  // page3 新建数据
  @Post('/page3')
  createPage3(@Body() createFinanceDto: CreateFinanceDtoPage3) {
    return this.financeService.createPage3(createFinanceDto);
  }

  // 分页查询page1数据
  @Get('page1')
  findSkipPage1(@Query() query) {
    return this.financeService.findSkipPage1(
      parseInt(query.pageSize),
      parseInt(query.pageNo),
    );
  }
  // 分页查询page2数据
  @Get('page2')
  findSkipPage2(@Query() query) {
    return this.financeService.findSkipPage2(
      parseInt(query.pageSize),
      parseInt(query.pageNo),
    );
  }
  // 分页查询page3数据
  @Get('page3')
  findSkipPage3(@Query() query) {
    return this.financeService.findSkipPage3(
      parseInt(query.pageSize),
      parseInt(query.pageNo),
    );
  }

  // page1 更新数据
  @Patch('page1')
  updatePage1(
    @Param('id') id: string,
    @Body() updateFinanceDto: UpdateFinanceDtoPage1,
  ) {
    return this.financeService.updatePage1(+id, updateFinanceDto);
  }
  // page2 更新数据
  @Patch('page2')
  updatePage2(
    @Param('id') id: string,
    @Body() updateFinanceDto: UpdateFinanceDtoPage2,
  ) {
    return this.financeService.updatePage2(+id, updateFinanceDto);
  }
  // page3 更新数据
  @Patch('page3')
  updatePage3(
    @Param('id') id: string,
    @Body() updateFinanceDto: UpdateFinanceDtoPage3,
  ) {
    return this.financeService.updatePage3(+id, updateFinanceDto);
  }
}
