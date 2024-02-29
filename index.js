
const allDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(2,4);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(numb) {
    return function(fare) {
        return fare * numb;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);


const selectDifferentDrivers = function(drivers, selectFunction) {
    return selectFunction(drivers);
}

