import './App.css'
import {useQuadraticForm} from './hooks/useQuadraticForm'

function App() {
    const {
        formData,
        results,
        errors,
        handleChange,
        handleSubmit,
        resetForm
    } = useQuadraticForm();

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header bg-primary text-white">
                            <h2 className="text-center mb-0">Calculadora de Fórmula Cuadrática</h2>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="a" className="form-label">Coeficiente a:</label>
                                    <input
                                        type="text"
                                        className={`form-control ${errors.a ? 'is-invalid' : ''}`}
                                        id="a"
                                        name="a"
                                        value={formData.a}
                                        onChange={handleChange}
                                        placeholder="Ingrese el valor de a"
                                    />
                                    {errors.a && <div className="invalid-feedback">{errors.a}</div>}
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="b" className="form-label">Coeficiente b:</label>
                                    <input
                                        type="text"
                                        className={`form-control ${errors.b ? 'is-invalid' : ''}`}
                                        id="b"
                                        name="b"
                                        value={formData.b}
                                        onChange={handleChange}
                                        placeholder="Ingrese el valor de b"
                                    />
                                    {errors.b && <div className="invalid-feedback">{errors.b}</div>}
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="c" className="form-label">Coeficiente c:</label>
                                    <input
                                        type="text"
                                        className={`form-control ${errors.c ? 'is-invalid' : ''}`}
                                        id="c"
                                        name="c"
                                        value={formData.c}
                                        onChange={handleChange}
                                        placeholder="Ingrese el valor de c"
                                    />
                                    {errors.c && <div className="invalid-feedback">{errors.c}</div>}
                                </div>

                                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                    <button type="button" className="btn btn-secondary me-md-2" onClick={resetForm}>
                                        Limpiar
                                    </button>
                                    <button type="submit" className="btn btn-primary">Calcular</button>
                                </div>
                            </form>

                            {results && (
                                <div className="mt-4">
                                    <h3 className="text-center">Resultados</h3>
                                    <div className="alert alert-info">
                                        <p><strong>Discriminante:</strong> {results.discriminant}</p>
                                        <p><strong>x1:</strong> {results.x1}</p>
                                        <p><strong>x2:</strong> {results.x2}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
