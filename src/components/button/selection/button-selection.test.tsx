import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import React from 'react';
import {ButtonSelection} from './button-selection';

describe(ButtonSelection.name, () => {
    it('should display text', () => {
        render(<ButtonSelection text="For Sale" />);

        expect(screen.queryByText('For Sale')).toBeInTheDocument();
    });
});
