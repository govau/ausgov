import React from "react";
import AUfooter, { AUfooterNav, AUfooterEnd } from "@gov.au/footer";
import AUlinkList from "@gov.au/link-list";
import Link from "gatsby-link";

import "./Footer.scss";
import linkIcon from "../assets/link.svg";

const Footer = () => (
	<div className="footer">
		<AUfooter dark>
			<AUfooterNav>
				<AUlinkList
					items={[
						{
							link: "/about",
							text: "About",
						},
						{
							link: "/privacy",
							text: "Privacy",
						},
						{
							link: "/accessibility",
							text: "Accessibility",
						},
					]}
					linkComponent={Link}
				/>
			</AUfooterNav>
			<AUfooterEnd>
				© Commonwealth of Australia. With the exception of the
				Commonwealth Coat of Arms and where otherwise noted, this work
				is licensed under the{" "}
				<a href="https://raw.githubusercontent.com/adamzerella/ausgov/master/LICENSE">
					MIT license
					<img
						className="licenseLink"
						alt="MIT license link"
						src={linkIcon}
					/>
				</a>{" "}
			</AUfooterEnd>
		</AUfooter>
	</div>
);

export default Footer;
