import React from "react";
import { it, expect, describe, beforeAll } from "vitest"
import { fireEvent, render, screen, act } from '@testing-library/react';
import Form from "../../src/components/Form";
import "@testing-library/jest-dom/vitest"

describe('Form', () => {
  beforeAll(() => {
    render(<Form />)
  })

  it('should render with the children', () => {
    expect(
      screen.getByRole('textbox')
    ).toBeInTheDocument()
  })

  it('should render valid CPF message', () => {
    const input = screen.getByRole('textbox')

    act(() => {
      fireEvent.change(input, { target: { value: '144.796.170-60' } })
    })

    act(() => {
      fireEvent.click(screen.getByRole('button'))
    })

    expect(
      screen.getByText('CPF válido')
    ).toBeInTheDocument()
  })

  it('should render invalid CPF message', () => {
    const input = screen.getByRole('textbox')

    act(() => {
      fireEvent.change(input, { target: { value: '000.000.000-00' } })
    })

    act(() => {
      fireEvent.click(screen.getByRole('button'))
    })

    expect(
      screen.getByText('CPF inválido')
    ).toBeInTheDocument()
  })
})
