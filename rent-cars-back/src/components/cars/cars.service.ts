import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Car } from 'src/entities/car';
import { Repository } from 'typeorm';
import { NewCarInput } from './dto/new-car.input';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Car) private readonly carRepository: Repository<Car>,
  ) {}
  public async addNewCar(newCarData: NewCarInput): Promise<Car> {
    const newCar: Car = this.carRepository.create(newCarData);
    await this.carRepository.save(newCar).catch((err) => {
      throw new InternalServerErrorException(err.message);
    });
    return newCar;
  }
  public async getAllCars(): Promise<Car[]> {
    return await this.carRepository.find({}).catch((err) => {
      throw new InternalServerErrorException(err.message);
    });
  }
}
