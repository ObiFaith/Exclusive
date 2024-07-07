const Section = ({ className, children, lastSection = false }) => {
	return (
		<section>
			<div className={`container ${className}`}>{children}</div>
			{!lastSection && <hr className="mt-[70px] text-dark-200" />}
		</section>
	);
};

export default Section;
