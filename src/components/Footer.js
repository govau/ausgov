import React from "react";
import AUfooter, { AUfooterNav, AUfooterEnd } from "@gov.au/footer";
import AUlinkList from "@gov.au/link-list";
import Link from "gatsby-link";

import "./Footer.scss";

const Footer = () => (
	<div className="au-body au-body--dark">
		<AUfooter dark>
			<div className="container">
				<AUfooterNav>
					<AUlinkList
						inline
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
					Commonwealth Coat of Arms and where otherwise noted, this
					work is licensed under the{" "}
					<a
						href="https://raw.githubusercontent.com/govau/ausgov/master/LICENSE"
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
