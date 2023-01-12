import { ReactComponent as IG } from "./images/Instagram.svg";
import { ReactComponent as FB } from "./images/Facebook.svg";
import { ReactComponent as YT } from "./images/YouTube.svg";

function Footer() {
	return (
		<div className="footer">
			<div className="footer-black">
				<div className="footer-icons">
					<FB />
					<YT />
					<IG />
				</div>
			</div>
			<div className="footer-gray">
				<h2 className="footer-text footer-signature">&copy;2023 Alina Henderson</h2>
				<h2 className="footer-text footer-email">alina.henders@gmail.com</h2>
			</div>
		</div>
	);
}

export default Footer;
