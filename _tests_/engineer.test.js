const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('Instantiation', () => {
        it('creates an engineer object', () => {
            const engineer = new Engineer('12', 'Mike', 'mike@me.com', 'mikea');
            expect(engineer).toHaveProperty('id');
            expect(engineer).toHaveProperty('name');
            expect(engineer).toHaveProperty('email');
            expect(engineer).toHaveProperty('gitHub');
        });
    });

    describe('getRole', () => {
        it('returns engineer role', () => {
            const engineer = new Engineer('12', 'Mike', 'mike@me.com', 'mikea');
            expect(engineer.getRole()).toEqual('Engineer');
        })
    })

    describe('getGitHub', () => {
        it('returns engineer GitHub id', () => {
            const engineer = new Engineer('12', 'Mike', 'mike@me.com', 'mikea');
            expect(engineer.getGitHub()).toEqual('mikea');
        })
    })
});