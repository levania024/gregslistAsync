export class House {
    constructor(data) {
        this.id = data.id
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.levels = data.levels
        this.imgUrl = data.imgUrl
        this.year = data.year
        this.price = data.price
        this.description = data.description
        this.creatorId = data.creatorId
        this.creator = data.creator
    }

    get houseHTMLTemplate() {
        return `
        <div class="col-md-4 mb-3">
            <div class="card h-100">
                <img src="${this.imgUrl}" class="card-img-top" alt="${this.description}" style="height: 200px; object-fit: cover;">
                <div class="card-body">
                    <h5 class="card-title">${this.bedrooms} bed, ${this.bathrooms} bath</h5>
                    <p class="card-text">Levels: ${this.levels}</p>
                    <p class="card-text">Year: ${this.year}</p>
                    <p class="card-text">Price: $${this.price}</p>
                    <p class="card-text">${this.description}</p>
                </div>
            </div>
        </div>`
    }
}