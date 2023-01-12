import { ReactComponent as FB } from "./images/Facebook.svg";
import { ReactComponent as YT } from "./images/YouTube.svg";

function Footer() {
	return (
		<div className="footer">
			<div className="footer-black">
				<FB />
				<YT />
			</div>
			<div className="footer-gray">
				<h2 className="footer-signature">&copyAlina Henderson</h2>
				<h2 className="footer-email">alina.henders@gmail.com</h2>
			</div>
		</div>
	);
}

export default Footer;
