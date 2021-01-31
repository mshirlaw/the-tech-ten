import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

import Home from './index';

describe('Home', () => {
    test('it correctly renders the home page', () => {
        render(Home);

        expect(screen.getByRole('heading')).toHaveTextContent('Hello world!');
    })
})

