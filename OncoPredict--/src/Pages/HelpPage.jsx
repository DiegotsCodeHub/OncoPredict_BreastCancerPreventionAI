import React from 'react'
import { Link } from 'react-router-dom'

const HelpPage = () => {
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
                    <i className="fas fa-question-circle header-icon"></i>
                    <div>
                        <h1>Ayuda y Documentación</h1>
                        <p>Sistema de análisis y predicción de tumores</p>
                    </div>
                </header>

                <div className="card fast-guide-info-section">
                    <div className="guide-header">
                        <i className="fas fa-book-open"></i>
                        <h2>Guía Rápida de Uso</h2>
                    </div>
                    <p className="guide-subtitle">Aprenda a utilizar el sistema OncoPredict</p>

                    <ol className="guide-steps">
                        <li>
                            <div className="step-number">1</div>
                            <div className="step-content">
                                <h3>Cargar Datos del Paciente</h3>
                                <p>Navegue a "Cargar Datos" e ingrese el ID del paciente y las características del tumor
                                    medidas.</p>
                            </div>
                        </li>
                        <li>
                            <div className="step-number">2</div>
                            <div className="step-content">
                                <h3>Realizar Predicción</h3>
                                <p>Complete los campos numéricos con los datos clínicos y presione "Predecir Tipo de Tumor"
                                    para obtener el análisis.</p>
                            </div>
                        </li>
                        <li>
                            <div className="step-number">3</div>
                            <div className="step-content">
                                <h3>Revisar Resultados</h3>
                                <p>Analice el resultado de la predicción, métricas de confianza y visualizaciones en la
                                    sección "Resultados".</p>
                            </div>
                        </li>
                        <li>
                            <div className="step-number">4</div>
                            <div className="step-content">
                                <h3>Consultar Historial</h3>
                                <p>Acceda al historial completo de análisis realizados y revise predicciones anteriores
                                    cuando lo necesite.</p>
                            </div>
                        </li>
                    </ol>
                </div>

                <div className="card tumor-variable-explication-features-section">
                    <div className="card-header">
                        <h3>Explicación de Variables</h3>
                        <p>Descripción de las características medidas del tumor</p>
                    </div>

                    <ul className="variable-accordion">
                        <li className="accordion-item">
                            <div className="accordion-header">
                                <span className="variable-title">Radius (Radio)</span>
                                <i className="fas fa-chevron-down accordion-icon"></i>
                            </div>
                            <div className="accordion-content">
                                <p>Distancia media desde el centro del núcleo celular hasta el perímetro. Se mide en unidades estándar y es un indicador importante del tamaño celular.</p>
                            </div>
                        </li>
                        <li className="accordion-item">
                            <div className="accordion-header">
                                <span className="variable-title">Texture (Textura)</span>
                                <i className="fas fa-chevron-down accordion-icon"></i>
                            </div>
                            <div className="accordion-content">
                                <p>Desviación estándar de los valores de escala de grises. Mide la variación en la intensidad de los píxeles en la imagen del núcleo celular.</p>
                            </div>
                        </li>
                        <li className="accordion-item">
                            <div className="accordion-header">
                                <span className="variable-title">Perimeter (Perímetro)</span>
                                <i className="fas fa-chevron-down accordion-icon"></i>
                            </div>
                            <div className="accordion-content">
                                <p>Longitud total del contorno del núcleo celular. Un perímetro irregular puede indicar malignidad.</p>
                            </div>
                        </li>
                        <li className="accordion-item">
                            <div className="accordion-header">
                                <span className="variable-title">Area (Área)</span>
                                <i className="fas fa-chevron-down accordion-icon"></i>
                            </div>
                            <div className="accordion-content">
                                <p>Superficie total del núcleo celular medida en píxeles cuadrados. Células más grandes pueden ser indicativas de malignidad.</p>
                            </div>
                        </li>
                        <li className="accordion-item">
                            <div className="accordion-header">
                                <span className="variable-title">Smoothness (Suavidad)</span>
                                <i className="fas fa-chevron-down accordion-icon"></i>
                            </div>
                            <div className="accordion-content">
                                <p>Variación local en la longitud del radio. Mide qué tan suave o irregular es el contorno del núcleo.</p>
                            </div>
                        </li>
                        <li className="accordion-item">
                            <div className="accordion-header">
                                <span className="variable-title">Compactness (Compacidad)</span>
                                <i className="fas fa-chevron-down accordion-icon"></i>
                            </div>
                            <div className="accordion-content">
                                <p>Calculada como (perímetro² / área - 1.0). Mide qué tan compacta es la forma del núcleo celular.</p>
                            </div>
                        </li>
                        <li className="accordion-item">
                            <div className="accordion-header">
                                <span className="variable-title">Concavity (Concavidad)</span>
                                <i className="fas fa-chevron-down accordion-icon"></i>
                            </div>
                            <div className="accordion-content">
                                <p>Severidad de las porciones cóncavas del contorno celular. Núcleos con alta concavidad pueden ser malignos.</p>
                            </div>
                        </li>
                        <li className="accordion-item">
                            <div className="accordion-header">
                                <span className="variable-title">Symmetry (Simetría)</span>
                                <i className="fas fa-chevron-down accordion-icon"></i>
                            </div>
                            <div className="accordion-content">
                                <p>Medida de la simetría del núcleo celular. La asimetría puede ser un indicador de malignidad.</p>
                            </div>
                        </li>
                        <li className="accordion-item">
                            <div className="accordion-header">
                                <span className="variable-title">Fractal Dimension (Dimensión Fractal)</span>
                                <i className="fas fa-chevron-down accordion-icon"></i>
                            </div>
                            <div className="accordion-content">
                                <p>Aproximación de la complejidad del contorno usando "aproximación costera - 1". Mide la irregularidad del borde celular.</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="card Model-explication-features-section">
                    <div className="card-header">
                        <h3>Información sobre los Modelos</h3>
                        <p>Detalles técnicos del clasificador utilizado</p>
                    </div>

                    <div className="model-explanation">
                        <h4>AdaBoostclassNameifier</h4>
                        <p>
                            **AdaBoost (Adaptive Boosting)** es un algoritmo de machine learning que combina múltiples
                            clasificadores débiles para crear un clasificador fuerte. El modelo ha sido entrenado con un
                            dataset de características de tumores de mama y alcanza una precisión del **96.5%** en pruebas
                            de validación.
                        </p>
                    </div>

                    <div className="important-note">
                        <i className="fas fa-info-circle note-icon"></i>
                        <div className="note-content">
                            <span className="note-title">Nota Importante</span>
                            <p>
                                Este sistema es una herramienta de apoyo diagnóstico. Los resultados deben ser siempre
                                evaluados por personal médico cualificado. No reemplaza el criterio clínico profesional ni
                                otros métodos diagnósticos establecidos.
                            </p>
                        </div>
                    </div>

                    <div className="metrics-grid-2-cols">
                        <div className="metric-box">
                            <span className="metric-label">Precisión</span>
                            <span className="metric-value">96.5%</span>
                        </div>
                        <div className="metric-box">
                            <span className="metric-label">AUC-ROC</span>
                            <span className="metric-value">0.98</span>
                        </div>
                        <div className="metric-box">
                            <span className="metric-label">Sensibilidad</span>
                            <span className="metric-value">97.2%</span>
                        </div>
                        <div className="metric-box">
                            <span className="metric-label">Especificidad</span>
                            <span className="metric-value">95.8%</span>
                        </div>
                    </div>
                </div>

                <div className="card contact-support-section">
                    <div className="card-header">
                        <h3>Soporte y Contacto</h3>
                        <p>¿Necesita ayuda adicional? Contacte a nuestro equipo de soporte.</p>
                    </div>

                    <div className="contact-links-grid">
                        <a href="mailto:soporte@oncologiapredictiva.com" className="contact-link-item">
                            <i className="fas fa-envelope"></i>
                            <span className="title">Correo Electrónico</span>
                            <span className="subtitle">soporte@oncologiapredictiva.com</span>
                        </a>

                        <a href="tel:+5212345678" className="contact-link-item">
                            <i className="fas fa-phone"></i>
                            <span className="title">Llamada</span>
                            <span className="subtitle">+52 123 456 7890</span>
                        </a>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default HelpPage