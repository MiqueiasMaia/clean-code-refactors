const cpfValidator = require('../../src/example2/example2-before');

const VALID_CPF = '987.654.321-00';
const INVALID_CPF = '987.654.321-01';
const SEQUENTIAL_CPF = '123.456.789-00';
const IDENTIC_DIGITS_CPF = '111.111.111-11';
const INCOMPLETE_CPF = '123.456.789';

test("Should validate CPF", () => {
    const isValid = cpfValidator.validate(VALID_CPF);
    expect(isValid).toBeTruthy();
});

test("Shouldn't validate invalid CPF", () => {
    const isValid = cpfValidator.validate(INVALID_CPF);
    expect(isValid).toBeFalsy();
});

test("Shouldn't validate sequential CPF", () => {
    const isValid = cpfValidator.validate(SEQUENTIAL_CPF);
    expect(isValid).toBeFalsy();
});

test("Shouldn't validate CPF with identic digits", () => {
    const isValid = cpfValidator.validate(IDENTIC_DIGITS_CPF);
    expect(isValid).toBeFalsy();
});

test("Shouldn't validate null CPF", () => {
    const isValid = cpfValidator.validate();
    expect(isValid).toBeFalsy();
});

test("Shouldn't validate empty CPF", () => {
    const isValid = cpfValidator.validate('');
    expect(isValid).toBeFalsy();
});

test("Shouldn't validate inconplete CPF", () => {
    const isValid = cpfValidator.validate(INCOMPLETE_CPF);
    expect(isValid).toBeFalsy();
});