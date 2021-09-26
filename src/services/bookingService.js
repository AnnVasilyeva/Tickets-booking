export default class BookingService {
    constructor() {
        this._apiBase = 'https://fe-diplom.herokuapp.com';

    }

    async getResource(url) {
        // console.log(url);
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok) {
            throw new Error(`Error ${res.status}`);
        }

        return await res.json();
    }


    getCities(value) {
        return this.getResource(`/routes/cities?name=${value}`);
    }

    getLastRoutes() {
        return this.getResource('/routes/last');
    }

    getRoutes(body) {
        // console.log(body);

        let bodyString = [];

        for(let key in body) {
            
            if(body[key]) {
                if(key == 'from_city_id') {
                    bodyString.push(`${[key]}=${body[key]}`);
                } else {
                    bodyString.push(`&${[key]}=${body[key]}`);
                }     
            }
        }

        return this.getResource(`/routes/?${bodyString.join('')}`);

    }

    getSeats(body) {
        const {departure: {id, have_wifi, have_first_class, have_second_class, have_third_class, have_fourth_class, have_air_conditioning, have_express}} = body;

        // return this.getResource(`/routes/${id}/seats?have_wifi=${have_wifi}&have_first_class=${have_first_class}&have_second_class=${have_second_class}&have_third_class=${have_third_class}&have_fourth_class=${have_fourth_class}&have_air_conditioning=${have_air_conditioning}&have_express=${have_express}`);

        return this.getResource(`/routes/7150/seats?have_wifi=false`);
    }

     async postOrder(id, seats, user) {
        const res = await fetch( `${this._apiBase}/order`, {
            method: 'POST',
            body: JSON.stringify({
                user: user,
                departure: {
                    route_direction_id: id,
                    seats: seats
                }
            })
        })
    
        if(!res.ok) {
            throw new Error(`Error ${res.status}`);
        }
    
        return await res.json();
    }
}