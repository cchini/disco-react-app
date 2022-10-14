/**
 *  @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('disco-app/Button', () => {
  it('should render correctly', () => {
    render(<Button>Hello</Button>);
    const heading = screen.getByRole('button');
    expect(heading).toBeInTheDocument();
  });
});
