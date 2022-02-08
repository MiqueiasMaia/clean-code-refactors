const rideCalculator = require('../../src/example1/example1-before');

const DISTANCE = 100;
const WEEK_DATE = new Date("2022-02-07T14:15:16");
const SUNDAY_DATE = new Date("2022-02-06T14:15:16");
const OVERNIGHT_DATE = new Date("2022-02-07T22:15:16");

test("Should calculate taxi ride on week and saturday", () => {
    const price = rideCalculator.calc(DISTANCE, WEEK_DATE);
    expect(price).toBe(210);
});

test("Shouldn't calculate taxi ride on week and saturday", () => {
    const price = rideCalculator.calc(DISTANCE, SUNDAY_DATE);
    expect(price).not.toBe(210);
});

test("Should calculate taxi ride on sundays", () => {
    const price = rideCalculator.calc(DISTANCE, SUNDAY_DATE);
    expect(price).toBe(290);
});

test("Shouldn't calculate taxi ride on sundays", () => {
    const price = rideCalculator.calc(DISTANCE, OVERNIGHT_DATE);
    expect(price).not.toBe(290);
});

test("Shoul calculate taxi ride on overnights", () => {
    const price = rideCalculator.calc(DISTANCE, OVERNIGHT_DATE);
    expect(price).toBe(390);
});

test("Shouldn't calculate taxi ride on overnights", () => {
    const price = rideCalculator.calc(DISTANCE, WEEK_DATE);
    expect(price).not.toBe(390);
});