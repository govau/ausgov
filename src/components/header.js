import React from "react";
import Link from "gatsby-link";
import AUheader, { AUheaderBrand } from "@gov.au/header";
import crest from "../assets/crest.svg";

import "./header.scss";

const version = require("../../package.json").version;

const Header = ({ siteTitle }) => (
	<div>
		<OfficalBanner />
		<AUheader>
			<AUheaderBrand
				link="/"
				linkComponent={Link}
				title={siteTitle}
				brandImage={crest}
				brandImageAlt="australia.gov.au"
				subline={
					<div>
						Helping you find Australian government information and
						services{" "}
						<span className="alpha-badge">
							alpha{` ${version}`}
						</span>
					</div>
				}
			/>
		</AUheader>
	</div>
);

const OfficalBanner = () => (
	<div className="official-banner">
		This website is in alpha. We’re testing new designs and a small amount
		of content. Let us know what you think. Go back to{" "}
		<a
			href="https://www.australia.gov.au/"
			alt="australia.gov.au"
			target="_blank"
		>
			australia.gov.au
		</a>
	</div>
);

export default Header;
