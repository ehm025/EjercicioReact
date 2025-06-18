export const validateQuadraticForm = (formData) => {
    const errors = {};

    if (!formData.a.trim()) {
        errors.a = 'El coeficiente a es requerido';
    } else if (isNaN(formData.a) || parseFloat(formData.a) === 0) {
        errors.a = 'El coeficiente a debe ser un número diferente de 0';
    }

    if (!formData.b.trim()) {
        errors.b = 'El coeficiente b es requerido';
    } else if (isNaN(formData.b)) {
        errors.b = 'El coeficiente b debe ser un número';
    }

    if (!formData.c.trim()) {
        errors.c = 'El coeficiente c es requerido';
    } else if (isNaN(formData.c)) {
        errors.c = 'El coeficiente c debe ser un número';
    }

    return errors;
};
