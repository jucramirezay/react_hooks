import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples"
import { useCounter, useFetch } from "../../src/hooks";

jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter")

describe('Pruebas sobre el componente MultipleCustomHooks', () => {

    const mockIncrement = jest.fn()

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement,
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('Debe de mostrar el componente por defecto', () => {

        // Estado inicial del hook
        useFetch.mockReturnValue({
            data: null,
            isLoading: false,
            hasError: null
        });

        render(<MultipleCustomHooks />);
        
        expect( screen.getByText('Rick and Morty Quotes'));

        const nextButton = screen.getByRole('button');
        // Valida si el botón esta deshabilitado
        expect(nextButton.disabled ).toBeTruthy();

    });

    test('Debe de mostrar un character', () => {

        // Estado del hook una vez se resuelve el fetch
        useFetch.mockReturnValue({
            data: [{name: 'Juan Camilo', species: 'terricola'}],
            isLoading: false,
            hasError: null
        });

        render(<MultipleCustomHooks />);
        // screen.debug();
        // expect( screen.getByText('terricola')).toBeTruthy();
        // expect( screen.getByText('Juan Camilo')).toBeTruthy();

        const nextButton = screen.getByRole('button');
        expect(nextButton.disabled ).toBeFalsy();

    });

    test('Debe de llamar la función de incrementar', () => {

        // Estado del hook una vez se resuelve el fetch
        useFetch.mockReturnValue({
            data: [{name: 'Juan Camilo', species: 'terricola'}],
            isLoading: false,
            hasError: null
        });

        render(<MultipleCustomHooks />);
        const nextButton = screen.getByRole('button');
        fireEvent.click( nextButton );

        expect(increment).toHaveBeenCalled();

    })

})