import { Link } from 'react-router-dom';
import { headerAd } from '../constant';

const TopHeader = () => {
	const { text, discount, link, linkText } = headerAd;
	return (
		headerAd && (
			<div className="bg-black text-white-200 py-4 text-sm">
				<div className="container flex max-md:justify-center justify-between">
          <p></p>
          <p className='flex items-center gap-2'>
            <span>{text} {discount && `- OFF ${discount}!`}</span>
            <Link className='underline underline-offset-1 font-semibold' to={link}>
              Show Now
            </Link>
          </p>
          <select name="language" className='bg-black px-6 max-md:hidden outline-none'>
            <option value="english">English</option>
            <option value="french">French</option>
            <option value="spanish">Spanish</option>
          </select>
        </div>
			</div>
		)
	);
};

export default TopHeader