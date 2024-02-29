import React, { useEffect, useRef, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import axios from "../../axios";
import "./navigationbar.css";



export default function NavigationBar(props) {
	useEffect(() => {
		const name1 = localStorage.getItem('username');
		if (name1 !== "") {
			setName(name1);
			// console.log(name);
		}
		// axios.get('/session').then((response) => {
		// 	if (response.data.username) {
		// 		setName(response.data.username);
		// 		console.log(response);
		// 	}
		// 	else {
		// 		// window.location.href = "/login";
		// 	}
		// });
	}, []);

	const [name, setName] = useState('');

	const Logout = (e) => {
		axios.post('logout');
		localStorage.removeItem('username');
		window.location.href = '/';
	}

	function ProfileOrLogin(props) {
		if (name) {
			return (
				<Dropdown>
					<Dropdown.Toggle id="dropdown-basic">
						<img
							alt="logo"
							src={require('./logged_in_icon.png')}
							width="90"
							height="50"
							className="nav-logo" />
					</Dropdown.Toggle>
					<Dropdown.Menu>
						<Dropdown.Item >{name}</Dropdown.Item>
						<Dropdown.Item onClick={Logout}>Logout</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			);
		}
		else {
			return (
				<Link to="/login">
					<button type="button" class="btn btn-outline-primary loginspl">Login</button>
				</Link>
			);

		}
	}

	if (props.pagetype === 'TechEvent') {
		let root = document.querySelector(':root');
		root.style.setProperty('--secondaryColor', '#DC2EFA');
		root.style.setProperty('--grdcolor1', '#DC2EFA');
		root.style.setProperty('--grdcolor2', '#FFFFFF');
	}
	else if (props.pagetype === 'CultEvent') {
		let root = document.querySelector(':root');
		root.style.setProperty('--secondaryColor', '#B4F40C');
		root.style.setProperty('--grdcolor1', '#B4F40C');
		root.style.setProperty('--grdcolor2', '#FFFFFF');
	}
	else if (props.pagetype === 'Workshop') {
		let root = document.querySelector(':root');
		root.style.setProperty('--secondaryColor', '#FF005C');
		root.style.setProperty('--grdcolor1', '#FF005C');
		root.style.setProperty('--grdcolor2', '#FFFFFF');
	}
	else if (props.pagetype === 'Proshow') {
		let root = document.querySelector(':root');
		root.style.setProperty('--secondaryColor', '#74F7FD');
		root.style.setProperty('--grdcolor1', '#74F7FD');
		root.style.setProperty('--grdcolor2', '#FFFFFF');
	}
	else if (props.pagetype === 'ContactUs') {
		let root = document.querySelector(':root');
		root.style.setProperty('--secondaryColor', '#D93CAF');
		root.style.setProperty('--grdcolor1', '#D93CAF');
		root.style.setProperty('--grdcolor2', '#FFFFFF');
	}
	else if (props.pagetype === 'sponsors') {
		let root = document.querySelector(':root');
		root.style.setProperty('--secondaryColor', '#74F7FD');
		root.style.setProperty('--grdcolor1', '#201F97');
		root.style.setProperty('--grdcolor2', '#DC2EFA');
	}
	else if (props.pagetype === 'merchandise') {
		let root = document.querySelector(':root');
		root.style.setProperty('--secondaryColor', '#D93CAF');
		root.style.setProperty('--grdcolor1', '#D93CAF');
		root.style.setProperty('--grdcolor2', '#FFFFFF');
	}



	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<Link to="/#">
				<img
					alt="logo"
					src={require('./tirutsavalogo_2023.png')}
					width="270"
					height="50"
					className="nav-logo" />
			</Link>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
			<nav ref={navRef}>
				<NavDropdown id="nav-dropdown-dark-example" title="Event" menuVariant="dark">
					<NavDropdown.Item className="dditem1" href="/cultural">Cultural</NavDropdown.Item>
					<NavDropdown.Item className="dditem2" href="/technical">Technical</NavDropdown.Item>
				</NavDropdown>
				<Link to="/workshop">Workshop</Link>
				<Link to="/proshows">ProShow</Link>
			 <a href="https://sites.google.com/view/tirutsava">Booking</a>
				<Link to="/sponsors">Sponsors</Link>
				<Link to="/ourteam/fest-heads">Contact Us</Link>

				{/* add if condition here */}

				<ProfileOrLogin />

				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>

			</nav>
		</header>
	);


}

// NavigationBar.propTypes = {
// 	pagetype: propTypes.string.isRequired
// }