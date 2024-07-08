import { Link } from 'react-router-dom';

export const Btn = ({ name, to }) => (
	<Link to={to} className='btn btn-primary'>
		{name}
	</Link>
);
export const BtnSecondary = ({ name, className='' }) => (
	<button type="submit" className={`btn btn-secondary ${className}`}>
		{name}
	</button>
);
export const BtnPrimary = ({ name, className='' }) => (
	<button type="submit" className={`btn btn-primary ${className}`}>
		{name}
	</button>
);
