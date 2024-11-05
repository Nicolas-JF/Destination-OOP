const Plane = require('./Plane');
const Person = require('./Person');

describe('Plane Class Tests', () => {
    let plane;
    let person;

    beforeEach(() => {
        plane = new Plane('Airline', 'NYC', 'Paris');
        person = new Person('John', 'Paris');
    });

    test('should create an instance of Plane', () => {
        expect(plane).toBeInstanceOf(Plane);
    });

    test('should assign company, origin, and destination correctly', () => {
        expect(plane.company).toBe('Airline');
        expect(plane.origin).toBe('NYC');
        expect(plane.destination).toBe('Paris');
    });

    test('passengers should be an empty array initially', () => {
        expect(plane.getPassengers()).toEqual([]);
    });

    test('should add a passenger to passengers array', () => {
        plane.addPassenger(person);
        expect(plane.getPassengers()).toContain(person);
    });
});
