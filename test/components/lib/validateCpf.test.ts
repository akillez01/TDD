import { describe, it, expect } from 'vitest';

import { validateCPF } from '../../src/lib/validateCpf';

describe('valid CPFs', () => {
  const validCpfs = [
    "987.654.321-00",
    "714.602.380-01",
    "313.030.210-72",
    "144.796.170-60"
  ];

  it.each(validCpfs)("should be a valid CPF %s", (cpf: string) => {
    const isValid = validateCPF(cpf);
    expect(isValid).toBeTruthy();
  });
})

describe('invalid CPFs', () => {
  const invalidCpfs = [
    "000.000.000-00",
    "111.111.111-11",
    "222.222.222-22",
    "333.333.333-33",
    "444.444.444-44",
    "555.555.555-55",
    "666.666.666-66",
    "777.777.777-77",
    "888.888.888-88",
    "999.999.999-99",
    "987.654.321-01",
    "714.602.380-02",
    "313.030.210-73",
    "144.796.170-61"
  ];

  it.each(invalidCpfs)("should be an invalid CPF %s", (cpf: string) => {
    const isValid = validateCPF(cpf);
    expect(isValid).toBeFalsy();
  });
})
