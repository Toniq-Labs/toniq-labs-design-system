import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import React from 'react';
import {HelloWorldNew} from './hello-world-new';

describe(HelloWorldNew.name, () => {
    it('should display custom greeting text', () => {
        render(<HelloWorldNew greeting="eat toast" />);

        expect(screen.queryByText('eat toast world!')).toBeInTheDocument();
    });

    it('should display default greeting text', () => {
        render(<HelloWorldNew />);

        expect(screen.queryByText('Hello world!')).toBeInTheDocument();
    });

    it('should display text in normal weight by default', () => {
        render(<HelloWorldNew />);

        expect(screen.queryByText('Hello world!')).not.toHaveClass('bold');
    });

    it('should display text in bold', () => {
        render(<HelloWorldNew bold={true} />);

        expect(screen.queryByText('Hello world!')).toHaveClass('bold');
    });
});
