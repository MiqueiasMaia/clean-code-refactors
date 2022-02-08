const rideCalculator = require('./example1-after');

const DISTANCE = 100;
const WEEK_DATE = new Date("2022-02-07T14:15:16");
const SUNDAY_DATE = new Date("2022-02-06T14:15:16");
const OVERNIGHT_DATE = new Date("2022-02-07T22:15:16");

test("Should calculate taxi ride on week and saturday", () => {
    const price = rideCalculator.calculateRide(DISTANCE, WEEK_DATE);
    expect(price).toBe(210);
});

test("Shouldn't calculate taxi ride on week and saturday", () => {
    const price = rideCalculator.calculateRide(DISTANCE, SUNDAY_DATE);
    expect(price).not.toBe(210);
});

test("Should calculate taxi ride on sundays", () => {
    const price = rideCalculator.calculateRide(DISTANCE, SUNDAY_DATE);
    expect(price).toBe(290);
});

test("Shouldn't calculate taxi ride on sundays", () => {
    const price = rideCalculator.calculateRide(DISTANCE, OVERNIGHT_DATE);
    expect(price).not.toBe(290);
});

test("Shoul calculate taxi ride on overnights", () => {
    const price = rideCalculator.calculateRide(DISTANCE, OVERNIGHT_DATE);
    expect(price).toBe(390);
});

test("Shouldn't calculate taxi ride on overnights", () => {
    const price = rideCalculator.calculateRide(DISTANCE, WEEK_DATE);
    expect(price).not.toBe(390);
});