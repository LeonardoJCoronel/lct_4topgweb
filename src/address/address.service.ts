import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddressEntity } from './address.entity';
import { Repository } from 'typeorm';
import { CreateAddressDto, UpdateAddressDto } from 'src/address/address.dto';
import { PaginationQueryDto } from 'src/dto/pagination.dto';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(AddressEntity)
    private addressRepository: Repository<AddressEntity>,
  ) {}

  async getAddressById(id_direccion: number) {
    return await this.addressRepository.findOne({
      where: {
        id_direccion,
      },
    });
  }

  async getAddressList({ limit, offset }: PaginationQueryDto) {
    return await this.addressRepository.find({
      relations: ['usuario'],
      skip: offset,
      take: limit,
    });
  }

  async createAddress(address: CreateAddressDto) {
    const newAddress = this.addressRepository.create(address);
    return await this.addressRepository.save(newAddress);
  }

  async deleteAddress(id_direccion: number) {
    return await this.addressRepository.delete({ id_direccion });
  }

  async updateAddress(id_direccion: number, direccion: UpdateAddressDto) {
    return await this.addressRepository.update({ id_direccion }, direccion);
  }
}
