import {weaknessesNumberFilterAdd} from '../src/filtros';
describe('weaknessesNumberFilterAdd', () => {
    it('is a function', () => {
        expect(typeof weaknessesNumberFilterAdd).toBe('function');
    });

    /*it('should throw TypeError when invoked with wrong argument types', () => {
        //expect(() => weaknessesNumberFilterAdd()).toThrow(TypeError);
        expect(() => weaknessesNumberFilterAdd(0)).toThrow(TypeError);
        expect(() => weaknessesNumberFilterAdd(null, [])).toThrow(TypeError);
        expect(() => weaknessesNumberFilterAdd(0, 0)).toThrow(TypeError);
    });*/

    it('should return "["exeggcute", "exeggutor", "tyranitar"]" for filterNumber =7', () => {
        expect(weaknessesNumberFilterAdd(7)).toStrictEqual(["exeggcute", "exeggutor", "tyranitar"]);
    });

    it('should return ["paras", "parasect", "geodude", "graveler", "golem", "onix", "rhyhorn", "rhydon", "jynx", "larvitar", "pupitar"]" for filterNumber =6', () => {
        expect(weaknessesNumberFilterAdd(6)).toStrictEqual(["paras", "parasect", "geodude", "graveler", "golem", "onix", "rhyhorn", "rhydon", "jynx", "larvitar", "pupitar"]);
    });

});