import { describe, it, expect, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import React from 'react';
import { Header } from '../../src';

describe('<Header />', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should render', () => {
    render(
      <Header text="Test" />
    );

    const component = screen.getByRole('banner');
    expect(component).toBeInTheDocument();
  });

  it('Should render provided text', () => {
    render(
      <Header text="Test" />
    );

    const component = screen.getByText(/Test/);
    expect(component).toBeInTheDocument();
  })
});
