import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import React from 'react';
import {HelloWorld} from './hello-world';

describe(HelloWorld.name, () => {
    it('should display custom greeting text', () => {
        render(<HelloWorld greeting="eat toast" />);

        expect(screen.queryByText('eat toast world!')).toBeInTheDocument();
    });

    it('should display default greeting text', () => {
        render(<HelloWorld />);

        expect(screen.queryByText('Hello world!')).toBeInTheDocument();
    });

    it('should display text in normal weight by default', () => {
        render(<HelloWorld />);

        expect(screen.queryByText('Hello world!')).not.toHaveClass('bold');
    });

    it('should display text in bold', () => {
        render(<HelloWorld bold={true} />);

        expect(screen.queryByText('Hello world!')).toHaveClass('bold');
    });
});
