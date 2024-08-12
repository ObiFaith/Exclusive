import * as Yup from 'yup';
import { Breadcrumb, BtnPrimary } from '..';
import { Mail, PhoneCall } from 'lucide-react';
import { ErrorMessage, Field, Form, Formik } from 'formik';

const Contact = () => {
	const contactSchema = Yup.object().shape({
		username: Yup.string().required('Name is required'),
		email: Yup.string()
			.required('Email address is required')
			.matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email address'),
		phone: Yup.string()
			.required('Phone number is required')
			.matches(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number'),
	});
	return (
		<div className="container">
			<Breadcrumb parent="Home" page="Contact" />
			<div className="grid gap-4 md:gap-6 lg:gap-8 md:grid-cols-2 pt-16 lg:pt-20 lg:grid-cols-3 *:rounded-[4px] *:bg-white *:shadow-md">
				<div className="pt-10 px-9 pb-12">
					<div className="grid gap-6">
						<div className="flex items-center gap-4">
							<div className="p-2.5 rounded-full bg-red-400">
								<PhoneCall size={20} color="white" />
							</div>
							<span className="font-semibold">Call To Us</span>
						</div>
						<div className="grid gap-4 text-sm">
							<p>We are available 24/7, 7 days a week.</p>
							<p>Phone: +8801611112222</p>
						</div>
					</div>
					<hr className="my-9 opacity-50" />
					<div className="grid gap-6">
						<div className="flex items-center gap-4">
							<div className="p-2.5 rounded-full bg-red-400">
								<Mail size={20} color="white" />
							</div>
							<span className="font-semibold">Write To US</span>
						</div>
						<div className="grid gap-4 text-sm">
							<p>
								Fill out our form and we will contact you within
								24 hours.
							</p>
							<p>Emails: customer@exclusive.com</p>
							<p>Emails: support@exclusive.com</p>
						</div>
					</div>
				</div>
				<div className="lg:col-span-2 py-10 px-8">
					<Formik
						initialValues={{ username: '', email: '', phone: '' }}
						validationSchema={contactSchema}
						onSubmit={(values, { setSubmitting }) => {
							setSubmitting(false);
						}}
					>
						{() => (
							<Form className="grid gap-y-8">
								<div className="grid lg:grid-cols-3 items-end gap-4">
									<div className="grid gap-2">
										<ErrorMessage
											className="text-red-400 text-sm"
											name="username"
											component="p"
										/>
										<Field
											className="px-4 py-3 placeholder:text-sm w-full outline-none bg-secondary"
											type="text"
											placeholder="Your Name*"
											name="username"
										/>
									</div>
									<div className="grid gap-2">
										<ErrorMessage
											className="text-red-400 text-sm"
											name="email"
											component="p"
										/>
										<Field
											className="px-4 py-3 placeholder:text-sm w-full outline-none bg-secondary"
											type="text"
											placeholder="Your Email*"
											name="email"
										/>
									</div>
									<div className="grid gap-2">
										<ErrorMessage
											className="text-red-400 text-sm"
											name="phone"
											component="p"
										/>
										<Field
											className="px-4 py-3 placeholder:text-sm w-full outline-none bg-secondary"
											type="text"
											placeholder="Your Phone*"
											name="phone"
										/>
									</div>
								</div>
								<textarea
									rows={10}
									name="message"
									className="bg-secondary w-full"
								></textarea>
                <div className="ms-auto max-lg:mx-auto"><BtnPrimary name='Send Message' /></div>
							</Form>
						)}
					</Formik>
				</div>
			</div>
		</div>
	);
};

export default Contact;
