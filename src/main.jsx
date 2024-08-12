import React from 'react';
import ReactDOM from 'react-dom/client';
import { About, Contact, Home, Login, NotFound, Signup } from '.';
import { Root } from './layouts';
import {
	Navigate,
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import './index.css';
import { AuthProvider, useAuth } from './contexts/auth';

export const PrivateRoute = ({ component: Component }) => {
	const { user } = useAuth();
	return user ? <Component /> : <Navigate to="/" />;
};

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Root />}>
			<Route index element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/signup" element={<Signup />} />
			<Route path="/login" element={<Login />} />
			<Route path="*" element={<NotFound />} />
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
	</React.StrictMode>
);
