const Bag = require('./Bag');
const Person = require('./Person');

describe('Bag Class Tests', () => {
    let bag;
    let person;

    beforeEach(() => {
        bag = new Bag(10, 'A123');
        person = new Person('John', 'Paris');
    });

    test('should create an instance of Bag', () => {
        expect(bag).toBeInstanceOf(Bag);
    });

    test('should assign weight and id correctly', () => {
        expect(bag.weight).toBe(10);
        expect(bag.id).toBe('A123');
    });

    test('should have null as initial owner', () => {
        expect(bag.getOwner()).toBeNull();
    });

    test('should assign owner correctly', () => {
        bag.assignOwner(person);
        expect(bag.getOwner()).toBe(person);
    });
});
