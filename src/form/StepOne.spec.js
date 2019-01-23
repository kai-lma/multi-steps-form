import StepOne, { extractAvailableMeals, validator } from './StepOne';
import { dishes } from '../../public/data/dishes.json';

describe('Selector tests', () => {
  it('Should extract all meals', () => {
    const expected = ['breakfast', 'lunch', 'dinner'];
    expect(extractAvailableMeals(dishes)).toEqual(expect.arrayContaining(expected));
  });
});

describe('Validator tests', () => {
  it('Should return object with meal property when meal is empty', () => {
    expect(validator({ meal: '' })).toHaveProperty('meal');
  });

  it('Should not return object with meal property when meal is not empty', () => {
    expect(validator({ meal: 'breakfast' })).not.toHaveProperty('meal');
  });

  it('Should return object with meal property when numberOfPeople is empty', () => {
    expect(validator({ numberOfPeople: '' })).toHaveProperty('numberOfPeople');
  });

  it('Should return object with meal property when numberOfPeople is out range 1 ~ 10', () => {
    expect(validator({ numberOfPeople: -1 })).toHaveProperty('numberOfPeople');
    expect(validator({ numberOfPeople: 11 })).toHaveProperty('numberOfPeople');
  });

  it('Should not return object with meal property when numberOfPeople is in range 1 ~ 10', () => {
    expect(validator({ numberOfPeople: 1 })).not.toHaveProperty('numberOfPeople');
    expect(validator({ numberOfPeople: 10 })).not.toHaveProperty('numberOfPeople');
  });

  it('Should return empty object when have meal and numberOfPeople is in range 1 ~ 10', () => {
    expect(validator({ meal: 'lunch', numberOfPeople: 1 })).toEqual({});
  });
});

describe('Component tests', () => {
  it('Should blabla', () => {});
});
