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
      <Header />
    );

    const component = screen.getByRole('banner');
    expect(component).toBeInTheDocument();
  });

  it('Should render BBC logo as an image with an alt tag', () => {
    render(
      <Header />
    );

    const component = screen.getByAltText(/BBC logo/i);
    expect(component).toBeInTheDocument();
  });
});
