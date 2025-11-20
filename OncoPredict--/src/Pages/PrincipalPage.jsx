import React from 'react'
import { Link } from 'react-router-dom'

const PrincipalPage = () => {
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
                    <i className="fas fa-tachometer-alt header-icon"></i>
                    <div>
                        <h1>Dashboard Principal</h1>
                        <p>Sistema de análisis y predicción de tumores</p>
                    </div>
                </header>

                <div className="grid-4-cols">
                    <div className="card metric-card-Total">
                        <span className="label">
                            Total Análisis <i className="fas fa-chart-line metric-icon blue"></i>
                        </span>
                        <span className="value">0</span>
                        <span className="sub-label">Predicciones realizadas</span>
                    </div>

                    <div className="card metric-card-Benignos">
                        <span className="label">
                            Tumores Benignos <i className="fas fa-chart-line metric-icon green"></i>
                        </span>
                        <span className="value">0</span>
                        <span className="sub-label">Resultados positivos</span>
                    </div>

                    <div className="card metric-card-Malignos">
                        <span className="label">
                            Tumores Malignos <i className="fas fa-chart-line metric-icon red"></i>
                        </span>
                        <span className="value">0</span>
                        <span className="sub-label">Requieren atención</span>
                    </div>

                    <div className="card metric-card-Precision">
                        <span className="label">
                            Precisión del Modelo <i className="fas fa-chart-line metric-icon purple"></i>
                        </span>
                        <span className="value">96.5%</span>
                        <span className="sub-label">AdaBoost Classifier</span>
                    </div>
                </div>

                <div className="grid-2-cols">
                    <div className="card action-card-AnalisisNuevo">
                        <i className="fas fa-cloud-upload-alt action-icon"></i>
                        <span className="title">Nuevo Análisis</span>
                        <span className="subtitle">Cargar datos de un nuevo paciente</span>
                        <button className="btn-primary">Iniciar Predicción</button>
                    </div>

                    <div className="card action-card-Historial">
                        <i className="fas fa-history action-icon purple"></i>
                        <span className="title">Historial</span>
                        <span className="subtitle">Ver análisis anteriores</span>
                        <button className="btn-secondary">Ver Historial</button>
                    </div>
                </div>

                <div className="card action-card-AnalisisRecientes">
                    <h2>Análisis Recientes</h2>
                    <span className="subtitle-recientes">Últimas predicciones realizadas</span>

                    <div className="empty-state">
                        <i className="fas fa-users empty-icon"></i>
                        <p>No hay predicciones realizadas aún</p>
                        <a href="#" className="Link-action">
                            Realizar primer análisis
                        </a>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default PrincipalPage