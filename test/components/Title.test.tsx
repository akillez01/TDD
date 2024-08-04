
import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import Title from "../../src/components/Title";


describe('Title', () => {
  it('should render with the children', () => {
    render(<Title>My Title</Title>)
    // screen.debug()
    const heading = screen.getByRole('heading', { name: /my title/i })
    expect(heading).toBeInTheDocument()
  })
})
