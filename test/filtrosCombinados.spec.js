/*import {pokemonTypeFilterAdd, weaknessesNumberFilterAdd} from '../src/filtros';
describe('pokemonTypeFilterAdd', () => {
    it('is a function', () => {
        expect(typeof pokemonTypeFilterAdd).toBe('function');
    });
    it('should return "["cleffa", "igglybuff", "togepi", "togetic", "marill", "azumarill", "snubbull", "granbull"]" for typeDefinition ="fairy" and positionArrayType =18', () => {
        expect(pokemonTypeFilterAdd('fairy', 18)).toStrictEqual(["cleffa", "igglybuff", "togepi", "togetic", "marill", "azumarill", "snubbull", "granbull"]);
    });
});

describe('weaknessesNumberFilterAdd', () => {
    it('is a function', () => {
        expect(typeof weaknessesNumberFilterAdd).toBe('function');
    });
    it('should return "["cleffa", "igglybuff", "togepi", "snubbull", "granbull"]" for filterNumber =2', () => {
        expect(weaknessesNumberFilterAdd(2)).toStrictEqual(["cleffa", "igglybuff", "togepi", "snubbull", "granbull"]);
    });
});*/
import {weaknessesNumberFilterAdd, weaknessesNumberFilterQuit, pokemonTypeFilterAdd, pokemonTypeFilterQuit} from '../src/filtros';
describe('pokemonTypeFilterAdd', () => {
    it('is a function', () => {
        expect(typeof pokemonTypeFilterAdd).toBe('function');
    });
    it('should return "["charmander", "charmeleon", "charizard", "vulpix", "ninetales", "growlithe", "arcanine", "ponyta", "rapidash", "magmar", "flareon", "moltres", "cyndaquil", "quilava", "typhlosion", "slugma", "magcargo", "houndour", "houndoom", "magby", "entei", "ho-oh"]" for typeDefinition ="fire" and positionArrayType =2', () => {
        expect(pokemonTypeFilterAdd('fire', 2)).toStrictEqual(["charmander", "charmeleon", "charizard", "vulpix", "ninetales", "growlithe", "arcanine", "ponyta", "rapidash", "magmar", "flareon", "moltres", "cyndaquil", "quilava", "typhlosion", "slugma", "magcargo", "houndour", "houndoom", "magby", "entei", "ho-oh"]);
    });
    it('should return "["charmander", "charmeleon", "charizard", "vulpix", "ninetales", "growlithe", "arcanine", "ponyta", "rapidash", "magmar", "flareon", "moltres", "cyndaquil", "quilava", "typhlosion", "slugma", "magcargo", "houndour", "houndoom", "magby", "entei", "ho-oh", "umbreon", "murkrow", "sneasel", "tyranitar"]" for typeDefinition ="fire" and positionArrayType =17', () => {
        expect(pokemonTypeFilterAdd('dark', 17)).toStrictEqual(["charmander", "charmeleon", "charizard", "vulpix", "ninetales", "growlithe", "arcanine", "ponyta", "rapidash", "magmar", "flareon", "moltres", "cyndaquil", "quilava", "typhlosion", "slugma", "magcargo", "houndour", "houndoom", "magby", "entei", "ho-oh", "umbreon", "murkrow", "sneasel", "tyranitar"]);
    });
});

describe('weaknessesNumberFilterAdd', () => {
    it('is a function', () => {
        expect(typeof weaknessesNumberFilterAdd).toBe('function');
    });
    it('should return " ["murkrow", "sneasel", "magcargo", "houndour", "houndoom", "ho-oh"]" for filterNumber =4', () => {
        expect(weaknessesNumberFilterAdd(4)).toStrictEqual(["murkrow", "sneasel", "magcargo", "houndour", "houndoom", "ho-oh"]);
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
    it('should return "["murkrow", "sneasel", "houndour", "houndoom"]" for positionArrayType =2', () => {
        expect(pokemonTypeFilterQuit(2)).toStrictEqual(["murkrow", "sneasel", "houndour", "houndoom"]);
    });

    it('should return "["murkrow", "sneasel", "houndour", "houndoom"]" for positionArrayType =2', () => {
        expect(pokemonTypeFilterQuit(2)).toStrictEqual(["murkrow", "sneasel", "houndour", "houndoom"]);
    });
    
    
});

describe('weaknessesNumberFilterAdd', () => {
    it('is a function', () => {
        expect(typeof weaknessesNumberFilterAdd).toBe('function');
    });
    it('should return "["umbreon"]" for filterNumber =3', () => {
        expect(weaknessesNumberFilterAdd(3)).toStrictEqual(["umbreon"]);
    });
});

describe('weaknessesNumberFilterQuit', () => {
    it('is a function', () => {
        expect(typeof weaknessesNumberFilterQuit).toBe('function');
    });
    it('should return "["umbreon", "murkrow", "sneasel", "houndour", "houndoom", "tyranitar"]"', () => {
        expect(weaknessesNumberFilterQuit()).toStrictEqual(["umbreon", "murkrow", "sneasel", "houndour", "houndoom", "tyranitar"]);
    });
});

describe('weaknessesNumberFilterAdd', () => {
    it('should return "[]" for filterNumber =1', () => {
        expect(weaknessesNumberFilterAdd(1)).toStrictEqual([]);
    });
    it('should return "["tyranitar"]" for filterNumber =7', () => {
        expect(weaknessesNumberFilterAdd(7)).toStrictEqual(["tyranitar"]);
    });
});

describe('pokemonTypeFilterQuit', () => {
    it('should return "["exeggcute", "exeggutor", "tyranitar"]" for positionArrayType =17', () => {
        expect(pokemonTypeFilterQuit(17)).toStrictEqual(["exeggcute", "exeggutor", "tyranitar"]);
    });
});


describe('pokemonTypeFilterAdd', () => {
    it('should resturn"[]" for typeDefinition= "fairy" and positionArrayType=18', ()=>{
        expect(pokemonTypeFilterAdd('fairy', 18)).toStrictEqual([]);
    });
    it('should resturn"["exeggcute", "exeggutor"]" for typeDefinition= "grass" an positionArrayType=1', ()=>{
        expect(pokemonTypeFilterAdd('grass', 1)).toStrictEqual(["exeggcute", "exeggutor"]);
    });
});


describe('pokemonTypeFilterQuit', () => {
    it('should resturn"["exeggcute", "exeggutor"]" for positionArrayType=18', ()=>{
        expect(pokemonTypeFilterQuit(18)).toStrictEqual(["exeggcute", "exeggutor"]);
    });
    it('should resturn"["exeggcute", "exeggutor", "tyranitar"]" for positionArrayType=1', ()=>{
        expect(pokemonTypeFilterQuit(1)).toStrictEqual(["exeggcute", "exeggutor", "tyranitar"]);
    });
});

/*
describe('weaknessesNumberFilterQuit', () => {
    it('should return "[allPokemon]"', () => {
        expect(weaknessesNumberFilterQuit()).toStrictEqual(["umbreon", "murkrow", "sneasel", "houndour", "houndoom", "tyranitar"]);
    });
});


it('should resturn"["exeggcute", "exeggutor"]" for typeDefinition= "ghost" an positionArrayType=11', ()=>{
        expect(pokemonTypeFilterAdd('ghost', 11)).toStrictEqual(["exeggcute", "exeggutor"]);
    });
    
    
    ["gastly", "haunter", "gengar", "misdreavus"]*/