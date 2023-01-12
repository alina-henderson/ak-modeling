import portrait from "./images/portrait.jpg";

function Portrait() {
	return <img className="portrait" src={portrait} alt="Portrait" style={{ height:"100%", width:"100%", objectFit:"cover" }} />;
}

export default Portrait;
