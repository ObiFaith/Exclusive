import { Link } from 'react-router-dom';

export const Btn = ({ name, to, type = '' }) => (
	<Link to={to} className={`btn btn-primary ${type}`}>
		{name}
	</Link>
);
export const BtnSecondary = ({ name, className }) => (
	<button type="submit" className={`btn btn-secondary ${className}`}>
		{name}
	</button>
);
export const BtnPrimary = ({ name, className, type = '' }) => (
	<button type="submit" className={`btn btn-primary ${type} ${className}`}>
		{name}
	</button>
);
