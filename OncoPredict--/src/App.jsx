import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import {
	PrincipalPage,
	LoadDataPage,
	ResultsPage,
	HistoryPage,
	HelpPage,
} from './Pages'

const router = createBrowserRouter([
	{
		path: "/",
		element: <Outlet />,
		children: [
			{
				index: true,
				element: <PrincipalPage />
			},
			{
				path: "cargar-datos",
				element: <LoadDataPage />
			},
			{
				path: "resultados",
				element: <ResultsPage />
			},
			{
				path: "historial-pacientes",
				element: <HistoryPage />
			},
			{
				path: "ayuda",
				element: <HelpPage />
			}
		]
	}

])


const App = () => {
	return (
		<RouterProvider router={router} />
	)
}

export default App
