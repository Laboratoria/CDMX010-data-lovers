import {getPokemones, orderData} from '../src/data.js';

describe('Probar Async/Await', () => {

    it('Realizar peticion a una api', async () => {
        await getPokemones().then(data => {
            expect(data.results).toBeGreaterThan[0];
        });
    });

    it('Ordenar de A-Z', )
});
