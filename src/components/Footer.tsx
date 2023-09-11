import React from 'react';

const Footer = () => {
	return (
		<div className=' absolute inset-x-0 bottom-0 pt-60 flex justify-center items-center opacity-50 text-sm'>
			© {new Date().getFullYear()} codrkoaz. All Rights
			Reserved.
		</div>
	);
};

export default Footer;