export const sendForm = async ({ data, handleAlert, type}) =>  {
    
    data.type = type;

    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    for (const key of Object.keys(data)) {
        const value = data[key];

        if (value === '' || value === null) {
            handleAlert({
                type: 'error',
                message: 'Todos los campos son requeridos'
            });
            return;
        }

        if (key === 'email' && (!regexEmail.test(value))) {
            handleAlert({
                type: 'error',
                message: 'El email es inválido'
            });
        return;
        }
    }

    handleAlert(null);

    const response = await fetch('https://eo9ct1p317tykir.m.pipedream.net', {
        method: 'POST',
        header: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    delete data.type

    handleAlert({
        type: 'success',
        message: 'Formulario enviado correctamente'
    })

    const result = await response.json();

    return result;
}

export const ERROR_ALERT = 'error'
export const SUCCESS_ALERT = 'success'