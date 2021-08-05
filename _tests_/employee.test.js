const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('Instantiation', () => {
        it('creates an employee object', () => {
            const employee = new Employee('12', 'Mike', 'mike@me.com');
            expect(employee).toHaveProperty('id');
            expect(employee).toHaveProperty('name');
            expect(employee).toHaveProperty('email');
        });
    });

    describe('getName', () => {
        it('returns employee name', () => {
            const name = 'Mike';
            const employee = new Employee('12', name, 'mike@me.com');
            expect(employee.getName()).toEqual(name);
        });
    });

    describe('getId', () => {
        it('returns employee id', () => {
            const id = '12';
            const employee = new Employee(id, 'Mike', 'mike@me.com');
            expect(employee.getId()).toEqual(id);
        });
    });

    describe('getEmail', () => {
        it('returns employee email', () => {
            const email = 'mike@me.com';
            const employee = new Employee('12', 'Mike', email);
            expect(employee.getEmail()).toEqual(email);
        });
    });

    describe('getRole', () => {
        it('returns employee role', () => {
            const employee = new Employee('12', 'Mike', 'mike@me.com');
            expect(employee.getRole()).toEqual('Employee');
        })
    })
});