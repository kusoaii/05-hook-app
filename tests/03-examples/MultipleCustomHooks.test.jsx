import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks"
import { useFetch } from "../../src/hooks/useFetch"
import { useCounter } from "../../src/hooks/useCounter";

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('pruebas en MultipleCustomHooks', () => {
    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('debe de mostar el componente por defecto ', () => {
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

        render(<MultipleCustomHooks />);
        expect(screen.getByText('Loading...'));
        expect(screen.getByText('Breaking quotes'));

        const nextButton = screen.getByRole('button', { name: 'Next' });
        expect(nextButton.disabled).toBeTruthy();
    })


    test('debe de mostrar un quote ', () => {
        useFetch.mockReturnValue({
            data: { category: 'Fer', title: 'hola mundo' },
            isLoading: false,
            hasError: null
        });

        render(<MultipleCustomHooks />);

        expect(screen.getByText('hola mundo')).toBeTruthy();
        expect(screen.getByText('Fer')).toBeTruthy();

        const nextButton = screen.getByRole('button', { name: 'Next' });
        expect(nextButton.disabled).toBeFalsy();
    });

    test('debe de llamar la funcion incrementar ', () => {
        useFetch.mockReturnValue({
            data: { category: 'Fer', title: 'hola mundo' },
            isLoading: false,
            hasError: null
        });

        render(<MultipleCustomHooks />);

        const nextButton = screen.getByRole('button', { name: 'Next' });
        expect(nextButton.disabled).toBeFalsy();
        fireEvent.click(nextButton);

        expect(mockIncrement).toHaveBeenCalled();
    })

})
