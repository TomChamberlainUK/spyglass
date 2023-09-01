import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react'
import React from 'react';
import Footer from '../../src/components/Footer';

describe('<Footer />', () => {
  it('Should render', () => {
    render(
      <Footer />
    );

    const component = screen.getByRole('contentinfo');

    expect(component).toBeInTheDocument();
  });
});
