import StepTwo, { extractRestaurantByMeal, validator } from './StepTwo';
import { dishes } from '../../public/data/dishes.json';

describe('Selector tests', () => {
  it('Should extract all restaurants has breakfast', () => {
    const meal = 'breakfast';
    const expected = ['Mc Donalds', 'Vege Deli', 'Olive Garden'];
    expect(extractRestaurantByMeal(meal)(dishes)).toEqual(expect.arrayContaining(expected));
  });

  it('Should extract all restaurants has lunch', () => {
    const meal = 'lunch';
    const expected = [
      'Mc Donalds',
      'Taco Bell',
      'Vege Deli',
      'Pizzeria',
      'Panda Express',
      'Olive Garden',
    ];
    expect(extractRestaurantByMeal(meal)(dishes)).toEqual(expect.arrayContaining(expected));
  });

  it('Should extract all restaurants has dinner', () => {
    const meal = 'dinner';
    const expected = ['Mc Donalds', 'Taco Bell', 'Pizzeria', 'Panda Express', 'Olive Garden'];
    expect(extractRestaurantByMeal(meal)(dishes)).toEqual(expect.arrayContaining(expected));
  });
});

describe('Validator tests', () => {
  it('Should return object with restaurant property when restaurant is empty', () => {
    expect(validator({ restaurant: '' })).toHaveProperty('restaurant');
  });

  it('Should not return object with restaurant property when restaurant is not empty', () => {
    expect(validator({ restaurant: 'Pizzeria' })).not.toHaveProperty('restaurant');
  });

  it('Should return empty object when have restaurant', () => {
    expect(validator({ restaurant: 'Panda Express' })).toEqual({});
  });
});

describe('Component tests', () => {
  it('Should blabla', () => {});
});
