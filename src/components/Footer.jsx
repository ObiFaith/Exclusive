import { Link } from 'react-router-dom';
import { send, app_store, qr_code, google_play, socialIcons } from '../assets';
import { footerLinks } from '../constant';

function Footer() {
	return (
		<footer className="bg-black mt-[140px] py-6 text-white-200">
			<div className="container max-lg:gap-6 py-8 lg:py-14 flex flex-wrap max-md:flex-col justify-between">
				<div className="grid gap-4">
					<h1 className="text-xl lg:text-2xl">Exclusive</h1>
					<h2 className="text-lg lg:text-xl">Subscribe</h2>
					<div className="grid gap-2">
						<p>Get 10% off your first order</p>
						<div className='relative border border-white-200 border-radius pt-3 pb-2'>
							<input
								className="bg-black placeholder:text-white-200 max-lg:w-full indent-4 outline-none"
								placeholder="Enter your email"
								type="email"
							/>
							<button type="submit"><img className='absolute top-3 right-3' src={send} alt="send" /></button>
						</div>
					</div>
				</div>
        {footerLinks.map((item, index) => (
          <div key={index}>
            <h1 className="text-lg lg:text-xl font-medium pb-4 lg:pb-6">{item.title}</h1>
            <div className="grid gap-2 lg:gap-4">
              {item.text &&  item.text.map(value => <p key={value}>{value.slice(0, 25)}{value.length > 25 && <><br />{value.slice(25)}</> }</p>)}
              {item.links &&  item.links.map(linkObj =><Link key={linkObj.name} to={linkObj.to}>{linkObj.name}</Link>)}
            </div>
          </div>
        ))}
        <div>
          <div className="*:font-medium">
            <h2 className="text-lg lg:text-xl pb-4 lg:pb-6">Download App</h2>
            <p className='text-xs text-white-200'>Save $3 with App New User Only</p>
          </div>
          <div className="flex gap-3 pt-2 pb-4 lg:pb-6">
            <div><img src={qr_code} alt="qr_code" /></div>
            <div className="grid gap-2">
              <img src={google_play} alt="google_play" />
              <img src={app_store} alt="app_store" />
            </div>
          </div>
          <div className="flex gap-6">
            {socialIcons.map((icon, index) => <img key={index} src={icon} alt={icon.split('/').pop().replace('.svg', '')} />)}
          </div>
        </div>
			</div>
      <div className="text-[#F9F9F9]/20 pt-4">
        <hr />
        <p className='text-center pt-4'>&copy; Copyright Rimel {new Date().getFullYear()}. All right reserved</p>
      </div>
		</footer>
	);
}

export default Footer;
