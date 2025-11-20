import React from 'react'
import { Link } from 'react-router-dom';
import './LoadDataComponent.css'

const LoadDataComponent = () => {
    return (
        <div className="dashboard-layout">
            <aside className="sidebar">
                <div className="logo-area">
                    <i className="fas fa-chart-line logo-icon"></i>
                    <div className="logo-text-group">
                        <div className="logoText">OncoPredict</div>
                        <div className="logoMOTTO">Sistema de Predicción Oncológica</div>
                    </div>
                </div>

                <nav className="navegacion">
                    <h3>Navegación</h3>
                    <ul>
                        <li>
                            <Link to="/">
                                <i className="fas fa-home"></i> Inicio
                            </Link>
                        </li>
                        <li>
                            <Link to="/cargar-datos">
                                <i className="fas fa-upload"></i> Cargar Datos
                            </Link>
                        </li>
                        <li>
                            <Link to="/resultados">
                                <i className="fas fa-poll-h"></i> Resultados
                            </Link>
                        </li>
                        <li>
                            <Link to="/historial-pacientes">
                                <i className="fas fa-history"></i> Historial de Pacientes
                            </Link>
                        </li>
                        <li>
                            <Link to="/ayuda">
                                <i className="fas fa-question-circle"></i> Ayuda / Contacto
                            </Link>
                        </li>
                    </ul>
                </nav>
            </aside>

            <main className="main-content">
                <header className="main-header">
                    <i className="fas fa-upload header-icon"></i>
                    <div>
                        <h1>Cargar Datos para Predicción</h1>
                        <p>Ingrese la información requerida del paciente y las características del tumor.</p>
                    </div>
                </header>


                <div className="card patient-info-section">
                    <div className="card-header">
                        <h3>Información del Paciente</h3>
                        <p>Ingrese el ID del paciente y los datos clínicos</p>
                    </div>


                    <div className="input-group-patient">
                        <div className="id-input-container">
                            <label htmlFor="patient-id">ID del Paciente *</label>
                            <input type="text" id="patient-id" placeholder="Ej. P-0001" />
                        </div>


                        <button className="btn-secondary load-data-btn">
                            <i className="fas fa-upload"></i> Cargar Datos de Ejemplo
                        </button>
                    </div>
                </div>


                <div className="card tumor-features-section">
                    <div className="card-header">
                        <h3>Características del Tumor</h3>
                        <p>Ingrese los valores de las características medidas del tumor</p>
                    </div>


                    <div className="tabs-container">
                        <button className="tab-button active">Media (Mean)</button>
                        <button className="tab-button">Error Estándar (SE)</button>
                        <button className="tab-button">Peor Caso (Worst)</button>
                    </div>


                    <div className="tab-content active">
                        <div className="features-grid">
                            <div className="feature-col">
                                <label htmlFor="radius">radius</label>
                                <input type="number" id="radius" defaultValue="0.0" />


                                <label htmlFor="area">area</label>
                                <input type="number" id="area" defaultValue="0.0" />


                                <label htmlFor="concavity">concavity</label>
                                <input type="number" id="concavity" defaultValue="0.0" />


                                <label htmlFor="fractal-dimension">fractal dimension</label>
                                <input type="number" id="fractal-dimension" defaultValue="0.0" />
                            </div>


                            <div className="feature-col">
                                <label htmlFor="texture">texture</label>
                                <input type="number" id="texture" defaultValue="0.0" />


                                <label htmlFor="smoothness">smoothness</label>
                                <input type="number" id="smoothness" defaultValue="0.0" />


                                <label htmlFor="concave-points">concave points</label>
                                <input type="number" id="concave-points" defaultValue="0.0" />
                            </div>


                            <div className="feature-col">
                                <label htmlFor="perimeter">perimeter</label>
                                <input type="number" id="perimeter" defaultValue="0.0" />


                                <label htmlFor="compactness">compactness</label>
                                <input type="number" id="compactness" defaultValue="0.0" />


                                <label htmlFor="symmetry">symmetry</label>
                                <input type="number" id="symmetry" defaultValue="0.0" />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="form-controls">
                    <button className="btn-clean">Limpiar Formulario</button>
                    <button className="btn-predict">
                        <i className="fas fa-edit"></i> Predecir Tipo de Tumor
                    </button>
                </div>
            </main>
        </div >
    );
}

export default LoadDataComponent