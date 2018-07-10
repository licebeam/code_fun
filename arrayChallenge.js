const weatherTime = [{ city: 'Tokyo', time: 1030, we: 'Rain' }, { city: 'London', time: 0800, we: 'Sunny' }];

//arrange array by city weather and times.
console.log(weatherTime)
const cities = weatherTime.map(item => item.city)
const weather = weatherTime.map(item => item.we)
const time = weatherTime.map(item => item.time)
console.log(cities, time, weather);