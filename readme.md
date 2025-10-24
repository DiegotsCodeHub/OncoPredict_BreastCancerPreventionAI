# 🧬 OncoPredict: Sistema de Predicción Oncológica

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Development-yellow.svg)]()
[![Tecnología Principal](https://img.shields.io/badge/Python-3.8%2B-blue)]()
[![Framework Web](https://img.shields.io/badge/Web-Flask-green)]()

## 📝 Descripción del Proyecto

**OncoPredict** es una aplicación de soporte a la decisión clínica diseñada para predecir la malignidad (diagnóstico) de tumores de mama utilizando técnicas de **Machine Learning (ML)**. La aplicación proporciona un Dashboard moderno e intuitivo para que el personal médico pueda ingresar características citológicas de tumores y obtener un resultado de predicción instantáneo.

El proyecto se enfoca en la implementación completa, abarcando desde el modelo de IA entrenado hasta el frontend interactivo con funcionalidad de historial y documentación.

## 🎯 Objetivo y Modelo

### Clasificador Principal: `AdaBoostClassifier`
El sistema utiliza un modelo **AdaBoostClassifier** entrenado en un conjunto de datos de tumores de mama. Este algoritmo de *boosting* combina múltiples clasificadores débiles para crear una predicción fuerte y robusta.

### Métricas de Rendimiento
| Métrica | Valor |
| :--- | :--- |
| **Precisión** | $\approx 96.5\%$ |
| **AUC-ROC** | $\approx 0.98$ |
| **Sensibilidad** | $\approx 97.2\%$ |
| **Especificidad** | $\approx 95.8\%$ |

## 🛠️ Stack Tecnológico

| Componente | Tecnología | Rol |
| :--- | :--- | :--- |
| **Frontend** | HTML5, CSS3, JavaScript Vainilla, Font Awesome | Dashboard, formularios interactivos y diseño modular. |
| **Backend API** | Python (Flask, Flask-CORS) | Servidor RESTful para la API de predicción. |
| **Machine Learning** | Python (Scikit-learn, NumPy, Pickle) | Carga, deserialización y ejecución del modelo. |
| **Diseño/Estilos** | CSS Modular | Temas y componentes diseñados a medida (tarjetas, botones, layout). |

## 🚀 Instalación y Ejecución

### Prerrequisitos
* Python 3.8 o superior.
* Navegador web moderno.

### 1. Estructura del Proyecto

Asegúrate de tener la siguiente estructura de archivos (asumiendo que los archivos `.html` están en la raíz y los estilos están en `styles/`):

/OncoPredict ├── app.py # Servidor Flask ├── modelo_cancer_mama.pkl # El modelo entrenado ├── script.js # Lógica JS del frontend ├── index.html # Dashboard ├── loaddata.html # Cargar Datos ├── patienthistory.html # Historial ├── contact.html # Ayuda / Contacto └── styles/ ├── BaseStyle.css ├── Sidebar.css ├── Contact.css

└── ...otros.css

### 2. Configurar el Entorno Python

```bash
# Instalar dependencias
pip install flask scikit-learn numpy flask-cors

### 3. Iniciar el Servidor Backend (API)

```bash
python app.py
# El servidor estará disponible en: [http://127.0.0.1:5000](http://127.0.0.1:5000)

### 4. Acceder a la Aplicación
Abre directamente el archivo `index.html` en tu navegador. La aplicación se conectará a la API de Flask al hacer clic en el botón "Predecir Tipo de Tumor".

##🌟 Características Clave
*Carga de Datos: Formulario con 30 campos divididos en pestañas (Media, Error Estándar, Peor Caso) para ingresar las características del tumor.

*Historial de Pacientes: Sección interactiva con botones de filtro (Todos, Benignos, Malignos).

*Guía y Documentación: Acordeón interactivo (script.js y Contact.css) para explicar cada variable de entrada (Radius, Texture, etc.).

*Conexión Asíncrona: Uso de fetch en JavaScript para enviar datos al endpoint /predict y recibir la predicción en JSON.

##⚠️ Nota de Uso Clínico
Este sistema es una herramienta de apoyo diagnóstico y NO reemplaza el criterio clínico profesional. Los resultados generados por el modelo deben ser siempre evaluados por personal médico cualificado junto con otros métodos diagnósticos establecidos.