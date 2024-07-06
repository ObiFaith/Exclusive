import { Breadcrumb } from '..';
import { Btn } from '../components/Buttons';

const NotFound = () => {
	return (
		<div className="container">
			<Breadcrumb parent="Home" page="404 Error" />
			<div className="pt-[140px] text-center">
				<div>
					<h1 className="lg:text-8xl md:text-7xl text-6xl">
						404 Not Found
					</h1>
					<p>Your visited page not found. You may go home page.</p>
				</div>
				<div className="pt-20">
					<Btn to="/" name="Back to home page" />
				</div>
			</div>
		</div>
	);
};

export default NotFound;
