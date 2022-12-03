import { apolloClient } from "../../graphql";
import { GET_ALL_CARS } from "./queries";
import { GetCars_cars } from "./__generated__/GetCars";

class CarService {
    /**
     * getCars
     */
    public async getCars(): Promise<GetCars_cars[]> {
        const response = await apolloClient.query(
            {
                query: GET_ALL_CARS,
            },
        )
        .catch((error) => {
            throw error;
        });

        if (response && response.data && response.data.cars) {
            return response.data.cars as GetCars_cars[];
        }
            
        return [];
    }
}

export default new CarService();
