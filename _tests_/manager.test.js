const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('Instantiation', () => {
        it('creates an manager object', () => {
            const manager = new Manager('12', 'Mike', 'mike@me.com', '202');
            expect(manager).toHaveProperty('id');
            expect(manager).toHaveProperty('name');
            expect(manager).toHaveProperty('email');
            expect(manager).toHaveProperty('officeNumber');
        });
    });

    describe('getRole', () => {
        it('returns manager role', () => {
            const employee = new Manager('12', 'Mike', 'mike@me.com', '202');
            expect(employee.getRole()).toEqual('Manager');
        })
    })

    describe('getOfficeNumber', () => {
        it('returns manager office number', () => {
            const employee = new Manager('12', 'Mike', 'mike@me.com', '202');
            expect(employee.getOfficeNumber()).toEqual('202');
        })
    })
});