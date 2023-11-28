import {
  Body,
  Controller,
  Post,
  Get,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { AddressService } from './address.service';
import { CreateAddressDto, UpdateAddressDto } from 'src/address/address.dto';
import { PaginationQueryDto } from 'src/dto/pagination.dto';

@Controller('address')
export class AddressController {
  constructor(private addressService: AddressService) {}

  @Post()
  createAddress(@Body() newAddress: CreateAddressDto) {
    return this.addressService.createAddress(newAddress);
  }

  @Get(':id_direccion')
  getAddressById(@Param('id_direccion') id: number) {
    return this.addressService.getAddressById(id);
  }

  @Get()
  getAddressList(@Query() pagination: PaginationQueryDto) {
    return this.addressService.getAddressList(pagination);
  }

  @Delete(':id_direccion')
  deleteAddress(@Param('id_direccion') id: number) {
    return this.addressService.deleteAddress(id);
  }

  @Patch(':id_direccion')
  updateAddress(
    @Param('id_direccion') id: number,
    @Body() direccion: UpdateAddressDto,
  ) {
    return this.addressService.updateAddress(id, direccion);
  }
}
