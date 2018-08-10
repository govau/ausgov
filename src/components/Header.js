import React from "react";
import Link from "gatsby-link";
import AUheader, { AUheaderBrand } from "@gov.au/header";
import crest from "../assets/crest.svg";
import logo from "../assets/logo.svg";

import "./Header.scss";

const version = require("../../package.json").version;

const Header = ({ siteTitle }) => (
	<div className="header">
		<OfficalBanner />
		<AUheader>
			<div className="container">
				<AUheaderBrand
					link="/"
					linkComponent={Link}
					title={
						<div className="header-logo">
							<img src={logo} alt="australia.gov.au logo" />{" "}
							<span className="alpha-badge">
								alpha{` ${version}`}
							</span>
						</div>
					}
					brandImage={crest}
					brandImageAlt="australia.gov.au"
					subline={
						<div>
							Helping you find Australian government information
							and services{" "}
						</div>
					}
				/>
			</div>
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
