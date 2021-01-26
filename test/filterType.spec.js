import {pokemonTypeFilterAdd, pokemonTypeFilterQuit} from '../src/filtros';
describe('pokemonTypeFilterAdd', () => {
    it('is a function', () => {
        expect(typeof pokemonTypeFilterAdd).toBe('function');
    });

    /*it('should throw TypeError when invoked with wrong argument types', () => {
        //expect(() =>pokemonTypeFilterAdd()).toThrow(TypeError);
        expect(() => pokemonTypeFilterAdd(0)).toThrow(TypeError);
        expect(() => pokemonTypeFilterAdd(null, [])).toThrow(TypeError);
        expect(() => pokemonTypeFilterAdd(0, 0)).toThrow(TypeError);
    });*/
    it('should return "["dratini", "dragonair", "dragonite", "kingdra"]" for typeDefinition ="dragon" and positionArrayType =16', () => {
        expect(pokemonTypeFilterAdd('dragon', 16)).toStrictEqual(["dratini", "dragonair", "dragonite", "kingdra"]);
    });
    it('should return "["dewgong", "cloyster", "jynx", "lapras", "articuno", "sneasel", "swinub", "piloswine", "delibird", "smoochum", "dratini", "dragonair", "dragonite", "kingdra"]" for typeDefinition ="ice" and positionArrayType =15', () => {
        expect(pokemonTypeFilterAdd('ice', 15)).toStrictEqual(["dewgong", "cloyster", "jynx", "lapras", "articuno", "sneasel", "swinub", "piloswine", "delibird", "smoochum", "dratini", "dragonair", "dragonite", "kingdra"]);
    });

    
});

describe('pokemonTypeFilterQuit', () => {
    it('is a function', () => {
        expect(typeof pokemonTypeFilterQuit).toBe('function');
    });

    /*it('should throw TypeError when invoked with wrong argument types', () => {
        //expect(() =>pokemonTypeFilterAdd()).toThrow(TypeError);
        expect(() => pokemonTypeFilterAdd(0)).toThrow(TypeError);
        expect(() => pokemonTypeFilterAdd(null, [])).toThrow(TypeError);
        expect(() => pokemonTypeFilterAdd(0, 0)).toThrow(TypeError);
    });*/
    it('should return "["dewgong", "cloyster", "jynx", "lapras", "articuno", "sneasel", "swinub", "piloswine", "delibird", "smoochum"]" for positionArrayType =16', () => {
        expect(pokemonTypeFilterQuit(16)).toStrictEqual(["dewgong", "cloyster", "jynx", "lapras", "articuno", "sneasel", "swinub", "piloswine", "delibird", "smoochum"]);
    });
    
    
});


describe('pokemonTypeFilterAdd', () => {
    it('should resturn"["dewgong", "cloyster", "jynx", "lapras", "articuno", "sneasel", "swinub", "piloswine", "delibird", "smoochum", "umbreon", "murkrow", "houndour", "houndoom", "tyranitar"]" for typeDefinition= "dark" an positionArrayType=17', ()=>{
        expect(pokemonTypeFilterAdd('dark', 17)).toStrictEqual(["dewgong", "cloyster", "jynx", "lapras", "articuno", "sneasel", "swinub", "piloswine", "delibird", "smoochum", "umbreon", "murkrow", "houndour", "houndoom", "tyranitar"]);
    });
    
});


/*
describe('pokemonTypeFilterAdd', () => {
    it('should resturn"["geodude", "graveler", "golem", "onix", "rhyhorn", "rhydon", "omanyte", "omastar", "kabuto", "kabutops", "aerodactyl", "sudowoodo", "shuckle", "magcargo", "corsola", "larvitar", "pupitar", "tyranitar"]" for typeDefinition= "rock" an positionArrayType=9', ()=>{
        expect(pokemonTypeFilterAdd('rock', 9)).toStrictEqual(["geodude", "graveler", "golem", "onix", "rhyhorn", "rhydon", "omanyte", "omastar", "kabuto", "kabutops", "aerodactyl", "sudowoodo", "shuckle", "magcargo", "corsola", "larvitar", "pupitar", "tyranitar"]);
    });
    it('should resturn""geodude", "graveler", "golem", "onix", "rhyhorn", "rhydon", "omanyte", "omastar", "kabuto", "kabutops", "aerodactyl", "sudowoodo", "shuckle", "magcargo", "corsola", "larvitar", "pupitar", "tyranitar", "sandshrew", "sandslash", "nidoqueen", "nidoking", "diglett", "dugtrio", "cubone", "marowak", "wooper", "quagsire", "gligar", "steelix", "swinub", "piloswine", "phanpy", "donphan"]" for typeDefinition="ground" an positionArrayType=10', ()=>{
        expect(pokemonTypeFilterAdd('ground', 10)).toStrictEqual(["geodude", "graveler", "golem", "onix", "rhyhorn", "rhydon", "omanyte", "omastar", "kabuto", "kabutops", "aerodactyl", "sudowoodo", "shuckle", "magcargo", "corsola", "larvitar", "pupitar", "tyranitar", "sandshrew", "sandslash", "nidoqueen", "nidoking", "diglett", "dugtrio", "cubone", "marowak", "wooper", "quagsire", "gligar", "steelix", "swinub", "piloswine", "phanpy", "donphan"]);
    });
});
*/
