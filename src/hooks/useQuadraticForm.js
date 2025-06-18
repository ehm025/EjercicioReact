import {useState} from 'react';
import {validateQuadraticForm} from '../utils/formValidation';
import {calculateQuadraticFormula} from '../utils/quadraticFormula';

export const useQuadraticForm = () => {
    const [formData, setFormData] = useState({
        a: '',
        b: '',
        c: ''
    });
    const [results, setResults] = useState(null);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateForm = () => {
        const newErrors = validateQuadraticForm(formData);
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                const a = parseFloat(formData.a);
                const b = parseFloat(formData.b);
                const c = parseFloat(formData.c);

                const result = calculateQuadraticFormula(a, b, c);
                setResults(result);

                window.alertify.success('Cálculo realizado con éxito');
            } catch (error) {
                window.alertify.error('Error al calcular: ' + error.message);
            }
        } else {
            Object.values(errors).forEach(error => {
                window.alertify.error(error);
            });
        }
    };

    const resetForm = () => {
        setFormData({a: '', b: '', c: ''});
        setResults(null);
        setErrors({});
        window.alertify.message('Formulario reiniciado');
    };

    return {
        formData,
        results,
        errors,
        handleChange,
        handleSubmit,
        resetForm
    };
};
