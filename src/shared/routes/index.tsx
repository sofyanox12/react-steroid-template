import GeneralHomePage from 'pages/General/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorBoundary from 'shared/components/ErrorBoundary'

const getRoutes = () => {
    return createBrowserRouter([
        {
            index: true,
            errorElement: <ErrorBoundary />,
            element: <GeneralHomePage />,
        },
    ])
}

const Router = () => {
    return <RouterProvider router={getRoutes()} />
}

export default Router
