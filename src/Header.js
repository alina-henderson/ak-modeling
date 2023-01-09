import { ReactComponent as Logo } from "./Alisa Kornilova.svg";
import Nav from "./Nav";

function Header(props) {
	return (
		<div className="header">
			<Logo className="logo-alisa"/>
      <Nav />
		</div>
	);
}

export default Header;
