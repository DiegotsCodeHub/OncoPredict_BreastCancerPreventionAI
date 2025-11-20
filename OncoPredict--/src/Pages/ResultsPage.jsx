import React from 'react'
import { Link } from 'react-router-dom'

const ResultsPage = () => {
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
                    <i className="fas fa-poll-h header-icon"></i>
                    <div>
                        <h1>Resultados de Predicción</h1>
                        <p>Sistema de análisis y predicción de tumores</p>
                    </div>
                </header>


                <div className="card action-card-AnalisisResultados">
                    <div className="empty-state">
                        <i className="fas fa-chart-bar empty-icon"></i>
                        <p>No hay resultados disponibles</p>
                        <p>Realice una predicción para ver los resultados aquí</p>
                        <a href="/principal/cargar-datos" className="link-action">
                            Realizar primer análisis
                        </a>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default ResultsPage