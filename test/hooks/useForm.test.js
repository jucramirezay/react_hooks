import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe('Pruebas en useForm', () => {

    const initialForm = {
        name: 'Camilo',
        email: 'jucramireza@gmail.com'
    }

    test('Debe de regresar los valores por defecto. Valida si regresa el objeto indicado en el hook', () => {

        const { result } = renderHook( () => useForm(initialForm) );
        expect( result.current ).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any( Function ),
            onResetForm: expect.any( Function ),
        });
        
    });

    test('Debe de cambiar el campo de nombre del formulario', () => {

        const newValue = {
            name: 'name',
            value: 'Juan'
        }

        const { result } = renderHook( () => useForm(initialForm) );
        const { onInputChange } = result.current;

        act(() => {
            onInputChange({ target: {name: newValue.name, value: newValue.value} });
        });

        expect(result.current.name).toBe(newValue.value);
        expect(result.current.formState.name).toBe(newValue.value);

    });

    test('Debe de realizar el reset del formulario', () => {

        const newValue = {
            name: 'name',
            value: 'Juan'
        }

        const { result } = renderHook( () => useForm(initialForm) );
        const { onInputChange, onResetForm } = result.current;

        act(() => {
            onInputChange({ target: {name: newValue.name, value: newValue.value} });
            onResetForm();
        });

        expect(result.current.name).toBe(initialForm.name);
        expect(result.current.formState.name).toBe(initialForm.name);

    });

})