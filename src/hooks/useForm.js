import { useState } from 'react';

export const useForm = ( inicialForm = {} ) => {
    const [formState, serFormState] = useState( inicialForm );

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        serFormState({
            ...formState,
            [name]: value
        })
    }

    const onResetForm = () => {
        serFormState(inicialForm);
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}

