import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import React from 'react';
import {ButtonPrimary} from './button-primary';

describe(ButtonPrimary.name, () => {
    it('should display text', () => {
        render(<ButtonPrimary text="Buy Now" />);

        expect(screen.queryByText('Buy Now')).toBeInTheDocument();
    });
});
