import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home, Login, NotFound, Signup } from '.';
import { Root } from './layouts'
import {
	Navigate,
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import './index.css';

export const PrivateRoute = ({component: Component}) => <Component /> /* {
	const {user} = useAuth()
	return user ? <Component /> : <Navigate to='/' />
} */

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Root />}>
			<Route index element={<Home />} />
			<Route path='/signup' element={<Signup />} />
			<Route path='/login' element={<Login />} />
			<Route path='*' element={<NotFound />} />
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		{/* <AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider> */}
    <RouterProvider router={router} />
	</React.StrictMode>
);
