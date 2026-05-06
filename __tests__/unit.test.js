// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// isPhoneNumber tests
test('isPhoneNumber - valid format (123) 456-7890', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('isPhoneNumber - valid format 123-456-7890', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('isPhoneNumber - invalid format no dash', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});

test('isPhoneNumber - invalid format letters', () => {
  expect(isPhoneNumber('123-abc-7890')).toBe(false);
});

// isEmail tests
test('isEmail - valid email', () => {
  expect(isEmail('user@example.com')).toBe(true);
});

test('isEmail - valid email simple', () => {
  expect(isEmail('test123@mail.org')).toBe(true);
});

test('isEmail - invalid email missing domain', () => {
  expect(isEmail('test@')).toBe(false);
});

test('isEmail - invalid email missing @ symbol', () => {
  expect(isEmail('testexample.com')).toBe(false);
});

// isStrongPassword tests
test('isStrongPassword - valid password', () => {
  expect(isStrongPassword('Pass1234')).toBe(true);
});

test('isStrongPassword - valid password with underscore', () => {
  expect(isStrongPassword('Secure_Pass123')).toBe(true);
});

test('isStrongPassword - invalid password too short', () => {
  expect(isStrongPassword('Pwd')).toBe(false);
});

test('isStrongPassword - invalid password starts with number', () => {
  expect(isStrongPassword('1Password')).toBe(false);
});

// isDate tests
test('isDate - valid date', () => {
  expect(isDate('12/31/2020')).toBe(true);
});

test('isDate - valid date single digit', () => {
  expect(isDate('1/5/2023')).toBe(true);
});

test('isDate - invalid date wrong format', () => {
  expect(isDate('12-31-2020')).toBe(false);
});

test('isDate - invalid date year too short', () => {
  expect(isDate('12/31/20')).toBe(false);
});

// isHexColor tests
test('isHexColor - valid 6 char hex', () => {
  expect(isHexColor('#FF5733')).toBe(true);
});

test('isHexColor - valid 3 char hex no hash', () => {
  expect(isHexColor('FFF')).toBe(true);
});

test('isHexColor - invalid hex with letters', () => {
  expect(isHexColor('GGGGGG')).toBe(false);
});

test('isHexColor - invalid hex wrong length', () => {
  expect(isHexColor('#FF57')).toBe(false);
});
