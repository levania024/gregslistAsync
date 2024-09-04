import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { api } from "./AxiosService.js";

class HousesService {
    async createHouse(houseFormData) {
        const response = await api.post('api/houses', houseFormData)
        console.log('response', response);

        const newHouse = new House(response.data)
        AppState.houses.push(newHouse)
    }
    async getHouses() {
        const response = await api.get('api/houses');
        console.log('Houses data:', response.data);

        const houses = response.data.map(houseData => new House(houseData));

        AppState.houses = houses;
    }
}

export const housesService = new HousesService();