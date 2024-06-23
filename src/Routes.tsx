import { createBrowserRouter } from 'react-router-dom';

// * pages
import Layout from './layouts/Layout';
import App from './pages/App';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [{ index: true, element: <App /> }]
	}
]);

export default router;
