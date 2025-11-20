import React from 'react'
import { Link } from 'react-router-dom'

const HistoryPage = () => {
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
                    <i className="fas fa-history header-icon"></i>
                    <div>
                        <h1>Historial de Pacientes</h1>
                        <p>Sistema de análisis y predicción de tumores</p>
                    </div>
                </header>


                <div className="card patient-info-PatientHistory">
                    <div className="card-header">
                        <div>
                            <h3>Historial de Pacientes</h3>
                            <p>0 análisis realizados en total</p>
                        </div>

                        <div className="filter-buttons">
                            <button className="filter-button active">Todos</button>
                            <button className="filter-button">Benignos</button>
                            <button className="filter-button">Malignos</button>
                        </div>
                    </div>

                    <div className="input-group-search search-bar-container">
                        <i className="fas fa-search"></i>
                        <input
                            type="text"
                            id="patient-search"
                            className="search-bar search-input-with-icon"
                            placeholder="Buscar por ID de paciente..."
                        />
                    </div>


                    <div className="empty-state">
                        <i className="fas fa-filter empty-icon"></i>
                        <p>No se encontraron resultados</p>
                        <p>Aún no se han realizado análisis</p>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default HistoryPage