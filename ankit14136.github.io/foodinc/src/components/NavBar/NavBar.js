import React from 'react';
import './NavBar.css';
import logo from './logo.png';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

library.add(faUser);
library.add(faShoppingBag);

const NavBar = () => {
		return (
		<header className="hder w-100 bg-white shadow-4 top-0 left-0 ">
			<nav className="flex h-100 items-center pa1 nav">
				<div><img style={{paddingLeft: '40px' ,paddingTop: '12px' ,width: '155px' ,height: '155px', cursor:'pointer'}} alt='logo' src={logo}/></div>
				<div className="spacer"></div>
				<div> 
					<ul className="ml pr1 f3">
						<li>
							<FontAwesomeIcon icon="user" className="pt2" />
						</li>
						<li>
							
						</li>
						<li>
							<FontAwesomeIcon icon="shopping-bag" className="pt2"/>
						
						</li>
						<li>
							
						</li>
					</ul>
				</div>
			</nav>
		</header>
		);
}

export default NavBar;