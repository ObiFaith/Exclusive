import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import { google, side_image } from '../assets';
import { BtnPrimary, BtnSecondary } from '..';
import { Link } from 'react-router-dom';

const Signup = () => {
	const signupSchema = Yup.object().shape({
		username: Yup.string().required('Name is required'),
		emailOrPhone: Yup.string()
			.required('Email or phone number is required')
			.test('is-valid', 'Invalid email or phone number', value => {
				const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
				const phoneRegex = /^\+?[1-9]\d{1,14}$/

				return emailRegex.test(value) || phoneRegex.test(value)
			}),
		password: Yup.string()
			.min(8, 'Minimum of 8 character long')
			.required('Password is required'),
	});
	return (
		<div className="lg:pt-[60px] flex gap-4 lg:gap-10 pt-10">
			<img
				className="hidden md:inline w-3/5"
				src={side_image}
				alt="side image"
			/>
			<div className="container">
				<div className='max-md:text-center'>
					<h1 className="text-2xl lg:text-3xl font-medium pb-2">
						Create an account
					</h1>
					<p>Enter your details below</p>
				</div>
				<Formik
					initialValues={{ username: '', emailOrPhone: '', password: '' }}
					validationSchema={signupSchema}
					onSubmit={(values, { setSubmitting }) => {
						setSubmitting(false);
					}}
				>
					{() => <Form className='max-md:w-2/3 max-sm:w-full max-md:mx-auto'>
            <div className="*:pt-10 *:placeholder:text-sm *:w-full *:border-b *:outline-none *:border-dark-400">
              <Field type="text" placeholder='Name' name='username' />
              <Field type="text" placeholder='Email or Phone Number' name='emailOrPhone' />
              <Field type="text" placeholder='Password' name='password' />
            </div>
            <BtnPrimary className='w-full mt-10 mb-4' name="Create Account" />
          </Form>}
				</Formik>
        {/* <div className="flex cursor-pointer gap-4 justify-center items-center py-4 border-radius border border-black/40">
          <img src={google} alt="google icon" />
          <p>Sign up with Google</p>
        </div> */}
        <BtnSecondary icon={google} className='w-full' name='Sign up with Google' />
        <div className="pt-8 text-dark-400 flex gap-4 justify-center items-center">
          <p>Already have account?</p>
          <Link className='underline underline-offset-4 font-medium'>Log in</Link>
        </div>
			</div>
		</div>
	);
};

export default Signup;
