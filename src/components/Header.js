import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
	return (
		<div>
			<nav>
				<Link to="/">News by Super(code)</Link>
			</nav>
		</div>
	);
};

export default Header;
