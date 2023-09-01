import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Header } from '../../src/components/Header';

describe('<Header />', () => {
  it('Should render', () => {
    render(
      <Header text="Test" />
    );

    const component = screen.getByText('Test');

    expect(component).toBeInTheDocument();
  });
});
