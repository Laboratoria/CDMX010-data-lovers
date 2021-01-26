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
    it('should return "["charmander", "charmeleon", "charizard", "vulpix", "ninetales", "growlithe", "arcanine", "ponyta", "rapidash", "magmar", "flareon", "moltres", "cyndaquil", "quilava", "typhlosion", "slugma", "magcargo", "houndour", "houndoom", "magby", "entei", "ho-oh", "umbreon", "murkrow", "sneasel", "tyranitar"]" for typeDefinition ="dark" and positionArrayType =17', () => {
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


describe('weaknessesNumberFilterQuit', () => {
    it('should return "[allPokemon]"', () => {
        expect(weaknessesNumberFilterQuit()).toStrictEqual(["bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard", "squirtle", "wartortle", "blastoise", "caterpie", "metapod", "butterfree", "weedle", "kakuna", "beedrill", "pidgey", "pidgeotto", "pidgeot", "rattata", "raticate", "spearow", "fearow", "ekans", "arbok", "pikachu", "raichu", "sandshrew", "sandslash", "nidoran ♀ (female)", "nidorina", "nidoqueen", "nidoran ♂ (male)", "nidorino", "nidoking", "clefairy", "clefable", "vulpix", "ninetales", "jigglypuff", "wigglytuff", "zubat", "golbat", "oddish", "gloom", "vileplume", "paras", "parasect", "venonat", "venomoth", "diglett", "dugtrio", "meowth", "persian", "psyduck", "golduck", "mankey", "primeape", "growlithe", "arcanine", "poliwag", "poliwhirl", "poliwrath", "abra", "kadabra", "alakazam", "machop", "machoke", "machamp", "bellsprout", "weepinbell", "victreebel", "tentacool", "tentacruel", "geodude", "graveler", "golem", "ponyta", "rapidash", "slowpoke", "slowbro", "magnemite", "magneton", "farfetch'd", "doduo", "dodrio", "seel", "dewgong", "grimer", "muk", "shellder", "cloyster", "gastly", "haunter", "gengar", "onix", "drowzee", "hypno", "krabby", "kingler", "voltorb", "electrode", "exeggcute", "exeggutor", "cubone", "marowak", "hitmonlee", "hitmonchan", "lickitung", "koffing", "weezing", "rhyhorn", "rhydon", "chansey", "tangela", "kangaskhan", "horsea", "seadra", "goldeen", "seaking", "staryu", "starmie", "mr. mime", "scyther", "jynx", "electabuzz", "magmar", "pinsir", "tauros", "magikarp", "gyarados", "lapras", "ditto", "eevee", "vaporeon", "jolteon", "flareon", "porygon", "omanyte", "omastar", "kabuto", "kabutops", "aerodactyl", "snorlax", "articuno", "zapdos", "moltres", "dratini", "dragonair", "dragonite", "mewtwo", "mew", "chikorita", "bayleef", "meganium", "cyndaquil", "quilava", "typhlosion", "totodile", "croconaw", "feraligatr", "sentret", "furret", "hoothoot", "noctowl", "ledyba", "ledian", "spinarak", "ariados", "crobat", "chinchou", "lanturn", "pichu", "cleffa", "igglybuff", "togepi", "togetic", "natu", "xatu", "mareep", "flaaffy", "ampharos", "bellossom", "marill", "azumarill", "sudowoodo", "politoed", "hoppip", "skiploom", "jumpluff", "aipom", "sunkern", "sunflora", "yanma", "wooper", "quagsire", "espeon", "umbreon", "murkrow", "slowking", "misdreavus", "unown", "wobbuffet", "girafarig", "pineco", "forretress", "dunsparce", "gligar", "steelix", "snubbull", "granbull", "qwilfish", "scizor", "shuckle", "heracross", "sneasel", "teddiursa", "ursaring", "slugma", "magcargo", "swinub", "piloswine", "corsola", "remoraid", "octillery", "delibird", "mantine", "skarmory", "houndour", "houndoom", "kingdra", "phanpy", "donphan", "porygon2", "stantler", "smeargle", "tyrogue", "hitmontop", "smoochum", "elekid", "magby", "miltank", "blissey", "raikou", "entei", "suicune", "larvitar", "pupitar", "tyranitar", "lugia", "ho-oh", "celebi"]);
    });
});

describe('pokemonTypeFilterAdd', () => {
    it('should resturn"["gastly", "haunter", "gengar", "misdreavus"]" for typeDefinition= "ghost" an positionArrayType=11', ()=>{
        expect(pokemonTypeFilterAdd('ghost', 11)).toStrictEqual(["gastly", "haunter", "gengar", "misdreavus"]);
    });
});


describe('pokemonTypeFilterQuit', () => {
    it('should resturn"[nameAllPokemon]" for positionArrayType=11', ()=>{
        expect(pokemonTypeFilterQuit(11)).toStrictEqual(["bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard", "squirtle", "wartortle", "blastoise", "caterpie", "metapod", "butterfree", "weedle", "kakuna", "beedrill", "pidgey", "pidgeotto", "pidgeot", "rattata", "raticate", "spearow", "fearow", "ekans", "arbok", "pikachu", "raichu", "sandshrew", "sandslash", "nidoran ♀ (female)", "nidorina", "nidoqueen", "nidoran ♂ (male)", "nidorino", "nidoking", "clefairy", "clefable", "vulpix", "ninetales", "jigglypuff", "wigglytuff", "zubat", "golbat", "oddish", "gloom", "vileplume", "paras", "parasect", "venonat", "venomoth", "diglett", "dugtrio", "meowth", "persian", "psyduck", "golduck", "mankey", "primeape", "growlithe", "arcanine", "poliwag", "poliwhirl", "poliwrath", "abra", "kadabra", "alakazam", "machop", "machoke", "machamp", "bellsprout", "weepinbell", "victreebel", "tentacool", "tentacruel", "geodude", "graveler", "golem", "ponyta", "rapidash", "slowpoke", "slowbro", "magnemite", "magneton", "farfetch'd", "doduo", "dodrio", "seel", "dewgong", "grimer", "muk", "shellder", "cloyster", "gastly", "haunter", "gengar", "onix", "drowzee", "hypno", "krabby", "kingler", "voltorb", "electrode", "exeggcute", "exeggutor", "cubone", "marowak", "hitmonlee", "hitmonchan", "lickitung", "koffing", "weezing", "rhyhorn", "rhydon", "chansey", "tangela", "kangaskhan", "horsea", "seadra", "goldeen", "seaking", "staryu", "starmie", "mr. mime", "scyther", "jynx", "electabuzz", "magmar", "pinsir", "tauros", "magikarp", "gyarados", "lapras", "ditto", "eevee", "vaporeon", "jolteon", "flareon", "porygon", "omanyte", "omastar", "kabuto", "kabutops", "aerodactyl", "snorlax", "articuno", "zapdos", "moltres", "dratini", "dragonair", "dragonite", "mewtwo", "mew", "chikorita", "bayleef", "meganium", "cyndaquil", "quilava", "typhlosion", "totodile", "croconaw", "feraligatr", "sentret", "furret", "hoothoot", "noctowl", "ledyba", "ledian", "spinarak", "ariados", "crobat", "chinchou", "lanturn", "pichu", "cleffa", "igglybuff", "togepi", "togetic", "natu", "xatu", "mareep", "flaaffy", "ampharos", "bellossom", "marill", "azumarill", "sudowoodo", "politoed", "hoppip", "skiploom", "jumpluff", "aipom", "sunkern", "sunflora", "yanma", "wooper", "quagsire", "espeon", "umbreon", "murkrow", "slowking", "misdreavus", "unown", "wobbuffet", "girafarig", "pineco", "forretress", "dunsparce", "gligar", "steelix", "snubbull", "granbull", "qwilfish", "scizor", "shuckle", "heracross", "sneasel", "teddiursa", "ursaring", "slugma", "magcargo", "swinub", "piloswine", "corsola", "remoraid", "octillery", "delibird", "mantine", "skarmory", "houndour", "houndoom", "kingdra", "phanpy", "donphan", "porygon2", "stantler", "smeargle", "tyrogue", "hitmontop", "smoochum", "elekid", "magby", "miltank", "blissey", "raikou", "entei", "suicune", "larvitar", "pupitar", "tyranitar", "lugia", "ho-oh", "celebi"]);
    });
    
});



    //nameAllPokemon= ["bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard", "squirtle", "wartortle", "blastoise", "caterpie", "metapod", "butterfree", "weedle", "kakuna", "beedrill", "pidgey", "pidgeotto", "pidgeot", "rattata", "raticate", "spearow", "fearow", "ekans", "arbok", "pikachu", "raichu", "sandshrew", "sandslash", "nidoran ♀ (female)", "nidorina", "nidoqueen", "nidoran ♂ (male)", "nidorino", "nidoking", "clefairy", "clefable", "vulpix", "ninetales", "jigglypuff", "wigglytuff", "zubat", "golbat", "oddish", "gloom", "vileplume", "paras", "parasect", "venonat", "venomoth", "diglett", "dugtrio", "meowth", "persian", "psyduck", "golduck", "mankey", "primeape", "growlithe", "arcanine", "poliwag", "poliwhirl", "poliwrath", "abra", "kadabra", "alakazam", "machop", "machoke", "machamp", "bellsprout", "weepinbell", "victreebel", "tentacool", "tentacruel", "geodude", "graveler", "golem", "ponyta", "rapidash", "slowpoke", "slowbro", "magnemite", "magneton", "farfetch'd", "doduo", "dodrio", "seel", "dewgong", "grimer", "muk", "shellder", "cloyster", "gastly", "haunter", "gengar", "onix", "drowzee", "hypno", "krabby", "kingler", "voltorb", "electrode", "exeggcute", "exeggutor", "cubone", "marowak", "hitmonlee", "hitmonchan", "lickitung", "koffing", "weezing", "rhyhorn", "rhydon", "chansey", "tangela", "kangaskhan", "horsea", "seadra", "goldeen", "seaking", "staryu", "starmie", "mr. mime", "scyther", "jynx", "electabuzz", "magmar", "pinsir", "tauros", "magikarp", "gyarados", "lapras", "ditto", "eevee", "vaporeon", "jolteon", "flareon", "porygon", "omanyte", "omastar", "kabuto", "kabutops", "aerodactyl", "snorlax", "articuno", "zapdos", "moltres", "dratini", "dragonair", "dragonite", "mewtwo", "mew", "chikorita", "bayleef", "meganium", "cyndaquil", "quilava", "typhlosion", "totodile", "croconaw", "feraligatr", "sentret", "furret", "hoothoot", "noctowl", "ledyba", "ledian", "spinarak", "ariados", "crobat", "chinchou", "lanturn", "pichu", "cleffa", "igglybuff", "togepi", "togetic", "natu", "xatu", "mareep", "flaaffy", "ampharos", "bellossom", "marill", "azumarill", "sudowoodo", "politoed", "hoppip", "skiploom", "jumpluff", "aipom", "sunkern", "sunflora", "yanma", "wooper", "quagsire", "espeon", "umbreon", "murkrow", "slowking", "misdreavus", "unown", "wobbuffet", "girafarig", "pineco", "forretress", "dunsparce", "gligar", "steelix", "snubbull", "granbull", "qwilfish", "scizor", "shuckle", "heracross", "sneasel", "teddiursa", "ursaring", "slugma", "magcargo", "swinub", "piloswine", "corsola", "remoraid", "octillery", "delibird", "mantine", "skarmory", "houndour", "houndoom", "kingdra", "phanpy", "donphan", "porygon2", "stantler", "smeargle", "tyrogue", "hitmontop", "smoochum", "elekid", "magby", "miltank", "blissey", "raikou", "entei", "suicune", "larvitar", "pupitar", "tyranitar", "lugia", "ho-oh", "celebi"]