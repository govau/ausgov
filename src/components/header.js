import React from "react";
import Link from "gatsby-link";
import AUheader, { AUheaderBrand } from "@gov.au/header";
import AUaccordion from "@gov.au/accordion";

import crest from "../assets/crest.svg";
import "./header.scss";

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
				subline="Australian Government information and services"
			/>
		</AUheader>
	</div>
);

const OfficalBanner = () => {
	return (
		<div className="offical-banner">
			{" "}
			<AUaccordion header={`Australian Government official website`}>
				Here <a href="#url">is</a> some accordion content
			</AUaccordion>{" "}
			<span className="banner-link">dta.gov.au</span>
		</div>
	);
};

export default Header;
