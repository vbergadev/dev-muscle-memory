import { describe, it, expect } from 'vitest';
import { fizzbuzz } from '../src/01-fizzbuzz';

describe('fizzbuzz', () => {
  it('returns "1" for n=1', () => {
    expect(fizzbuzz(1)).toEqual(['1']);
  });

  it('handles the first 15 numbers correctly', () => {
    expect(fizzbuzz(15)).toEqual(['1','2','Fizz','4','Buzz','Fizz','7','8','Fizz','Buzz','11','Fizz','13','14','FizzBuzz']);
  });

  it('returns empty array for n=0', () => {
    expect(fizzbuzz(0)).toEqual([]);
  });

  it('handles a larger n without breaking', () => {
    const r = fizzbuzz(100);
    expect(r).toHaveLength(100);
    expect(r[99]).toBe('Buzz');
    expect(r[89]).toBe('FizzBuzz');
  });
});
