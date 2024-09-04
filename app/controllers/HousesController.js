import { AppState } from "../AppState.js";
import { housesService } from "../services/HousesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class HousesController {
    constructor() {
        console.log('Houses Controller loaded');
        AppState.on('houses', this.drawHouses);
        AppState.on('user', this.showHouseForm);
        this.getHouses();

    }

    async getHouses() {
        try {
            await housesService.getHouses();
        } catch (error) {
            Pop.error(error);
            console.error(error);
        }
    }

    drawHouses() {
        console.log('Drawing houses');
        const houses = AppState.houses;
        let housesHTML = '';
        houses.forEach(house => housesHTML += house.houseHTMLTemplate);
        setHTML('house-listing', housesHTML);
    }

    async createHouse() {
        try {
            event.preventDefault()
            const form = event.target
            const houseData = getFormData(form)
            await housesService.createHouse(houseData)
            // @ts-ignore
            form.reset()
            Pop.success('House created successfully!')
        } catch (error) {
            Pop.error(error)
            console.error(error)
        }
    }

    showHouseForm() {
        if (!AppState.user == null) return
        const houseFormElem = document.getElementById('house-form')
        if (!houseFormElem == null) return
        houseFormElem.classList.remove('d-none')
    }
}
