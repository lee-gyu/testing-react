import { describe, expect, it } from 'vitest';
import { Button } from '..';
import { render } from '@testing-library/react';

describe('components/button', () => {
  it('label', () => {
    const text = 'Click!';
    const renderButton = render(<Button>{text}</Button>);

    expect(renderButton.getAllByText(text)).toBeTruthy();
  });
});
