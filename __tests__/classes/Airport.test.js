const Airport = require('./Airport');
const Plane = require('./Plane');

describe('Airport Class Tests', () => {
    let airport;
    let plane;

    beforeEach(() => {
        airport = new Airport('John F. Kennedy International Airport');
        plane = new Plane('Airline', 'NYC', 'Paris');
    });

    test('should create an instance of Airport', () => {
        expect(airport).toBeInstanceOf(Airport);
    });

    test('should assign name and airportCode correctly', () => {
        expect(airport.name).toBe('John F. Kennedy International Airport');
        expect(Airport.airportCode).toBe('JFK');
    });

    test('planes should be an empty array initially', () => {
        expect(airport.getPlanes()).toEqual([]);
    });

    test('should add a plane to planes array', () => {
        airport.addPlane(plane);
        expect(airport.getPlanes()).toContain(plane);
    });
});
