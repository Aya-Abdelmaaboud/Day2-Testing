import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import DynamicButton from './DynamicButton';

describe('DynamicButton', () => {
  it('renders button with dynamic label and handles click', () => {
    const handleClick = vi.fn();
    const label = 'Click Me';

    render(<DynamicButton label={label} onClick={handleClick} />);

    const buttonElement = screen.getByText(label);
    expect(buttonElement).toBeInTheDocument();

    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
