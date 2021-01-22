import pokemonTypeFilterAdd from '../src/filtros';

console.log( pokemonTypeFilterAdd);
describe('pokemonTypeFilterAdd', () => {
    it('is a function', () => {
        expect(typeof pokemonTypeFilterAdd).toBe('function');
    });

    it('should throw TypeError when invoked with wrong argument types', () => {
      expect(() =>pokemonTypeFilterAdd()).toThrow(TypeError);
      expect(() => pokemonTypeFilterAdd(0)).toThrow(TypeError);
      expect(() => pokemonTypeFilterAdd(null, [])).toThrow(TypeError);
      expect(() => pokemonTypeFilterAdd(0, 0)).toThrow(TypeError);
    });
    it('should return "["dratini", "dragonair", "dragonite", "kingdra"]" for typeDefinition ="dragon" and positionArrayType =16', () => {
        expect(pokemonTypeFilterAdd('dragon', 16)).toBe('["dratini", "dragonair", "dragonite", "kingdra"]');
    });

});





/*import { example, anotherExample } from '../src/data.js';


describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/

