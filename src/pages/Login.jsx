import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { side_image } from '../assets';
import { BtnPrimary } from '..';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/auth';

const Login = () => {
	const {login} = useAuth()
	const loginSchema = Yup.object().shape({
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
			<div className="container grid items-center">
				<div>
        <div className='max-md:text-center'>
					<h1 className="text-2xl lg:text-3xl font-medium pb-4">Log in to Exclusive</h1>
					<p>Enter your details below</p>
				</div>
				<Formik
					initialValues={{ emailOrPhone: '', password: '' }}
					validationSchema={loginSchema}
					onSubmit={(values, { setSubmitting }) => {
						login(values.email, values.password)
						setSubmitting(false);
					}}
				>
					{() => <Form className='max-md:w-2/3 max-sm:w-full max-md:mx-auto'>
            <>
							<Field className="pt-10 placeholder:text-sm w-full border-b outline-none border-dark-400" type="text" placeholder='Email or Phone Number' name='emailOrPhone' />
							<ErrorMessage className='text-red-400 text-sm' name='emailOrPhone' component='p' />
						</>
						<>
							<Field className="pt-10 placeholder:text-sm w-full border-b outline-none border-dark-400" type="text" placeholder='Password' name='password' />
							<ErrorMessage className='text-red-400 text-sm' name='password' component='p' />
						</>
            <div className="flex items-center justify-between gap-4 mt-10 mb-4">
              <BtnPrimary name="Login" />
              <Link to='' className='text-red-400'>Forget Password?</Link>
            </div>
          </Form>}
				</Formik>
        </div>
			</div>
		</div>
	);
};

export default Login;
