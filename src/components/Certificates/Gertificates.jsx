import ProgrammingBasic from "../../assets/ProgrammingBasic.png";
import ProgrammingFundamentals from "../../assets/ProgrammingFundamentals.png";
import JsAdvance from "../../assets/JsAdvanced.png";
import JsApplications from "../../assets/JsApplications.png";
import ReactJs from "../../assets/ReactJs.png";

import CertificateCss from "./certificateQueres.module.css";
export function Certificates() {
	return (
		<div className={CertificateCss.wrapper}>
			<img className={CertificateCss.img} src={ProgrammingBasic} alt="jsBasicCertificates" />
			<img className={CertificateCss.img} src={ProgrammingFundamentals} alt="jsFundamentalsCertificate" />
			<img className={CertificateCss.img} src={JsAdvance} alt="JsAdvancedCertificate" />
			<img className={CertificateCss.img} src={JsApplications} alt="JsApplicationCertificate" />
			<img className={CertificateCss.img} src={ReactJs} alt="ReactCertificate" />
		</div>
	);
}
