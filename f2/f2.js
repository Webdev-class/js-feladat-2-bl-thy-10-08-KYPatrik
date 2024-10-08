/*
Készítsd el az előző feladat azon változatát ahol megadjuk az óraszámot is.
Csak az adott órára vonatkozó hőmérséklettel térjen vissza a függvény.
*/

const locations = require('../locations.json');
const APIAdress = 'https://archive-api.open-meteo.com/v1/archive?';

const f2 = async (lat, long, timeStr, hour) => {
    if (hour < 0 || hour > 23) {
        throw new Error('Hour must be between 0 and 23.');
    }
    
     if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const str = APIAdress + `latitude=${lat}&longitude=${long}` + `&start_date=${timeStr}&end_date=${timeStr}&hourly=temperature_2m`;
    const rArr = await fetch(str)
        .then(data => data.json());
    return rArr.hourly.temperature_2m.at(hour);
}
module.exports = f2;
