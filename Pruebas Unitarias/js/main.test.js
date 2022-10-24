const suma = require("./main.js");

test('sumar dos numeros 2 + 2 = 4', () => {
    expect(suma(2,2)).toBe(4);
});

test('sumar dos numeros 20 + 20 = 40', () => {
        expect(suma(20,20)).toBe(40);
});

test('sumar dos numeros 3 + 3 = 6', () => {
    expect(suma(3,3)).toBe(6);
});

test('sumar dos numeros 512 + 512 = 1024', () => {
    expect(suma(512,512)).toBe(1024);
});