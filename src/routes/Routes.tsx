import {
	Navigate,
	RouterProvider,
	createBrowserRouter,
} from 'react-router-dom';
import AuthPage from '../components/Auth/AuthPage';
import IdeaStatuses from '../components/Catalogs/IdeaStatuses/IdeaStatuses';
import OfferStatuses from '../components/Catalogs/OfferStatuses/OfferStatuses';
import Tags from '../components/Catalogs/Tags/Tags';
import Users from '../components/Catalogs/Users/Users';
import IdeasRegister from '../components/IdeasRegister/IdeasRegister';
import Main from '../components/Main/Main';

const router = createBrowserRouter([
	{ path: '/main', element: <Main /> },
	{ path: '/auth', element: <AuthPage /> },
	{ path: '/ideas-register', element: <IdeasRegister /> },
	{
		path: '/catalogs',
		children: [
			{ path: '/catalogs/users', element: <Users /> },
			{ path: '/catalogs/idea-statuses', element: <IdeaStatuses /> },
			{ path: '/catalogs/offer-statuses', element: <OfferStatuses /> },
			{ path: '/catalogs/tags', element: <Tags /> },
		],
	},
	{ path: '/', element: <Navigate to='main' /> },
]);

export default function Routes() {
	return <RouterProvider router={router} />;
}
