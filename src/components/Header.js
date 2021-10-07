import { Link } from 'react-router-dom';
import ProfileImage from '../assets/images/profile.svg';
import { SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline';
import { useState } from 'react';

const Header = ({ cartItems }) => {
	const [searchItem, setSearchItem] = useState('');

	return (
		<header>
			{/* Top Nav */}
			<div className="flex items-center bg-skill_mine p-1 py-2">
				<Link to="/">
					<div className="flex items-center flex-grow sm:flex-grow-0">
						<h1 className="text-white font-bold text-sm md:text-xl px-2 md:px-5">SKILL-MINE</h1>
					</div>
				</Link>

				{/* Search Bar */}
				<div className="sm:flex items-center flex-grow h-10 rounded-md bg-yellow-400 hover:bg-yellow-500 cursor-pointer">
					<input
						className="p-2 h-full w-36 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
						type="text"
						value={searchItem}
						onChange={(e) => setSearchItem(e.target.item)}
						placeholder="Search"
					/>
					<SearchIcon className="hidden md:block md:h-12 md:p-4" />
				</div>
				{/* Right */}
				<div className="flex text-white items-center text-xs space-x-6 mx-6 whitespace-nowrap">
					<div className="relative link flex items-center cursor-pointer">
						<span className="absolute top-0 left-7 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
							{cartItems.length}
						</span>
						<ShoppingCartIcon className="h-8 md:h-10" />
					</div>
					<div className="link">
						<img src={ProfileImage} alt="person" className="h-8 md:h-10 w-8 md:w-10" />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
