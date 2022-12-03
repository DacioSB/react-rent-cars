import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Car } from 'src/entities/car';
import { CarsService } from './cars.service';
import { NewCarInput } from './dto/new-car.input';

@Resolver()
export class CarsResolver {
  constructor(private readonly carsService: CarsService) {}

  @Query((returns) => [Car])
  public async cars(): Promise<Car[]> {
    return await this.carsService.getAllCars().catch((err) => {
      throw err;
    });
  }

  @Mutation((returns) => Car)
  public async addNewCar(
    @Args('newCarData') newCarData: NewCarInput,
  ): Promise<Car> {
    return await this.carsService.addNewCar(newCarData).catch((err) => {
      throw err;
    });
  }
}
