import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddressEntity } from './address.entity';
import { Repository } from 'typeorm';
import { CreateAddressDto, UpdateAddressDto } from 'src/address/address.dto';

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

  async getAddressList() {
    return await this.addressRepository.find({ relations: ['usuario'] });
  }

  async createAddress(address: CreateAddressDto) {
    const newAddress = this.addressRepository.create(address);
    return this.addressRepository.save(newAddress);
  }

  async deleteAddress(id_direccion: number) {
    return this.addressRepository.delete({ id_direccion });
  }

  async updateAddress(id_direccion: number, direccion: UpdateAddressDto) {
    this.addressRepository.update({ id_direccion }, direccion);
  }
}
