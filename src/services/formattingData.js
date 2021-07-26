export default class FormattingData {
    constructor() {
        this.seatsList = [
            {
                have_first_class: true,
                name: 'Люкс',
                classNumber: 'first'
                // price: departure.price_info.first.bottom_price,
                // count: departure.avaliable_seats_info.first
            },
            {
                have_second_class: true,
                name: 'Купе',
                classNumber: 'second'
                // price: departure.price_info.second.bottom_price,
                // count: departure.avaliable_seats_info.second
            },
            {
                have_third_class: true,
                name: 'Плацкарт',
                classNumber: 'third'
                // price: departure.price_info.third.bottom_price,
                // count: departure.avaliable_seats_info.third
            },
            {
                have_fourth_class: true,
                name: 'Сидячий',
                classNumber: 'fourth'
                // price: departure.price_info.fourth.bottom_price,
                // count: departure.avaliable_seats_info.fourth
            }
        ]; 
    }

    // getFeaturesList (departure) {
        

    // }
    
    ucFirst (str) {
        if (!str) return str;
      
        return str[0].toUpperCase() + str.slice(1);
    }

    formattedDatetime (timeMs) {
        const minutes = Math.floor((timeMs / (1000 * 60)) % 60),
            hours = Math.floor((timeMs / (1000 * 60 * 60)) % 24);
        
      return `${(hours < 10) ? "0" + hours : hours}:${(minutes < 10) ? "0" + minutes : minutes}`
    }

    formattedDuration (timeSec) {
        const hours = Math.floor(timeSec / 60 / 60);
        const minutes = Math.floor(timeSec / 60) - (hours * 60);

        return [hours.toString().padStart(2, '0'),
        minutes.toString().padStart(2, '0')].join(':');

    }  

    formattedDurationHours (timeSec) {
        const hours = Math.floor(timeSec / 60 / 60);
        
        return `${hours.toString().padStart(2, '0')} часов`;

    }

    formattedDurationMinutes (timeSec) {
        const hours = Math.floor(timeSec / 60 / 60);
        const minutes = Math.floor(timeSec / 60) - (hours * 60);

        return `${minutes.toString().padStart(2, '0')} минуты`;

    }



}