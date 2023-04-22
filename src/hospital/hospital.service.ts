import { Injectable } from '@nestjs/common';
import { CreateHospitalDto } from './dto/create-hospital.dto';
import { UpdateHospitalDto } from './dto/update-hospital.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Hospital } from './entities/hospital.entity';

@Injectable()
export class HospitalService {
  constructor(
    @InjectRepository(Hospital)
    private usersRepository: Repository<Hospital>,
  ) {}

  create(createHospitalDto: CreateHospitalDto) {
    return this.usersRepository.save(createHospitalDto);
  }

  findAll(): Promise<Hospital[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<Hospital | null> {
    return this.usersRepository.findOneBy({ id });
  }

  update(id: number, updateHospitalDto: UpdateHospitalDto) {
    return this.usersRepository.update(id, updateHospitalDto);
  }

  async remove(id: number): Promise<void> {
    try {
      await this.usersRepository.delete(id);
      console.log('ลบแล้ว');
    } catch (error) {
      console.log('ไม่สามารถลบได้ : ' + error);
    }
  }
}
