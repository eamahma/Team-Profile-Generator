const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('Instantiation', () => {
        it('creates an intern object', () => {
            const intern = new Intern('12', 'Mike', 'mike@me.com', 'MSU');
            expect(intern).toHaveProperty('id');
            expect(intern).toHaveProperty('name');
            expect(intern).toHaveProperty('email');
            expect(intern).toHaveProperty('school');
        });
    });

    describe('getRole', () => {
        it('returns intern role', () => {
            const intern = new Intern('12', 'Mike', 'mike@me.com', 'MSU');
            expect(intern.getRole()).toEqual('Intern');
        })
    })

    describe('getGitHub', () => {
        it('returns intern school name', () => {
            const intern = new Intern('12', 'Mike', 'mike@me.com', 'MSU');
            expect(intern.getSchool()).toEqual('MSU');
        })
    })
});