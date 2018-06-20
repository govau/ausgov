import React from "react";
import Link from "gatsby-link";
import AUheader, { AUheaderBrand } from "@gov.au/header";
import AUaccordion from "@gov.au/accordion";

import crest from "../assets/crest.svg";
import star from "../assets/star_white.svg";

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
				subline={
					<div>
						Australian Government information{" "}
						<span className="alpha-badge">alpha</span>
					</div>
				}
			/>
		</AUheader>
	</div>
);

const OfficalBanner = () => (
	<div className="offical-banner">
		{" "}
		<AUaccordion
			header={
				<div>
					<span className="offical-logo">
						<img src={star} alt="Australia star logo" />
					</span>{" "}
					<span className="offical-title">Australian Government</span>{" "}
					<span className="offical-subline">official website</span>
				</div>
			}
		>
			<div className="offical-content">test</div>
		</AUaccordion>
		<span className="offical-link">
			<a
				href="https://www.dta.gov.au/"
				alt="DTA website"
				className="banner-link"
			>
				dta.gov.au
			</a>
		</span>
	</div>
);

export default Header;
