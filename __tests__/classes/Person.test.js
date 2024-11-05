const Person = require('./Person');
const Bag = require('./Bag');

describe('Person Class Tests', () => {
    let person;
    let bag;

    beforeEach(() => {
        person = new Person('John', 'Paris');
        bag = new Bag(10, 'A123');
    });

    test('should create an instance of Person', () => {
        expect(person).toBeInstanceOf(Person);
    });

    test('should assign name and destination correctly', () => {
        expect(person.name).toBe('John');
        expect(person.destination).toBe('Paris');
    });

    test('bags should be an empty array initially', () => {
        expect(person.getBags()).toEqual([]);
    });

    test('should add a bag to bags array', () => {
        person.addBag(bag);
        expect(person.getBags()).toContain(bag);
    });
});
