import React from "react";
import AUfooter, { AUfooterNav, AUfooterEnd } from "@gov.au/footer";
import AUlinkList from "@gov.au/link-list";
import Link from "gatsby-link";

import "./Footer.scss";
import linkIcon from "../assets/link.svg";

const Footer = () => (
	<div className="au-body au-body--dark">
		<AUfooter dark inline>
			<div className="container">
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
						inline
					/>
				</AUfooterNav>
				<AUfooterEnd>
					© Commonwealth of Australia. With the exception of the
					Commonwealth Coat of Arms and where otherwise noted, this
					work is licensed under the{" "}
					<a
						href="https://raw.githubusercontent.com/adamzerella/ausgov/master/LICENSE"
						rel="external"
					>
						MIT license
					</a>
				</AUfooterEnd>
			</div>
		</AUfooter>
	</div>
);

export default Footer;
