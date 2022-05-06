import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import React from 'react';
import {ToniqButton} from './toniq-button';

describe(ToniqButton.name, () => {
    it('should display text', () => {
        render(<ToniqButton text="Buy Now" />);

        expect(screen.queryByText('Buy Now')).toBeInTheDocument();
    });
});
