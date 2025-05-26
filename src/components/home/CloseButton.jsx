import { FaTimes } from 'react-icons/fa';
import { useRef } from "react";
import { useNavigate } from 'react-router-dom';

// Remap icon names to actual icons
const icon = {
	close: <FaTimes />,
};

const CloseButton = () => {
	const buttonRef = useRef(null);

	const navigate = useNavigate();

	const handleClick = (e) => {
		e.stopPropagation();
		e.preventDefault();
		buttonRef?.current?.blur();
		navigate("/");
	};

	return (
		<button
			ref={buttonRef}
			onClick={handleClick}
			onAuxClick={handleClick}
			className="flex items-center justify-center rounded-full text-sm tablet:text-base gap-2 tablet:gap-3 border-2 border-neutral-200 hover:bg-[#0000003b] hover:border-orange-300 focus:border-orange-300 outline-none hover:scale-105 duration-300">
			<FaTimes/>
		</button>
	);
};

export default CloseButton;
