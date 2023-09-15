import { describe, it, expect, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react'
import React from 'react';
import Footer from '../../src/components/Footer';

describe('<Footer />', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should render', () => {
    render(
      <Footer />
    );

    const component = screen.getByRole('contentinfo');
    expect(component).toBeInTheDocument();
  });

  it('Should render the text "BBC"', () => {
    render(
      <Footer />
    );

    const component = screen.getByText(/BBC/);
    expect(component).toBeInTheDocument();
  });
});
