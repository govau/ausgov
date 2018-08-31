import React from "react";
import Link from "gatsby-link";
import AUheader, { AUheaderBrand } from "@gov.au/header";
import AUmainNav, { AUmainNavContent } from "@gov.au/main-nav";

import crest from "../assets/crest.svg";
import logo from "../assets/logo.svg";

import "./Header.scss";

const version = require("../../package.json").version;
const menu = [
	{
		link: "#",
		text: "About",
	},
	{
		link: "#",
		text: "Get started",
	},
	{
		link: "#",
		text: "Components",
		active: true,
	},
	{
		link: "#",
		text: "Templates",
	},
	{
		link: "#",
		text: "Community",
	},
	{
		link: "#",
		text: "Support",
	},
	{
		link: "#",
		text: "GitHub",
	},
	{
		link: "#",
		text: "Download",
	},
];
const Header = ({ siteTitle }) => (
	<div className="au-body au-body--dark header">
		{/* <OfficalBanner /> */}
		<AUheader dark>
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<AUheaderBrand
							link="/"
							linkComponent={Link}
							title={
								<div className="header-logo">
									<img
										src={logo}
										alt="australia.gov.au logo"
									/>{" "}
									<span className="alpha-badge">
										alpha
										{` ${version}`}
									</span>
								</div>
							}
							brandImage={crest}
							brandImageAlt="australia.gov.au"
							subline="Helping you find Australian government information and services"
						/>
					</div>
				</div>
			</div>
		</AUheader>

		<AUmainNav dark alt>
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<AUmainNavContent items={menu}>
							<ul className="au-link-list au-link-list--inline">
								<li>
									<a href="">Some extra thing</a>
								</li>
								<li>
									<a href="">Another thing</a>
								</li>
							</ul>
						</AUmainNavContent>
					</div>
				</div>
			</div>
		</AUmainNav>
	</div>
);

const OfficalBanner = () => (
	<div className="official-banner">
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-12">
					<p>
						This website is in alpha. We’re testing new designs and
						a small amount of content. Let us know what you think.
						Go back to{" "}
						<a
							href="https://www.australia.gov.au/"
							title="australia.gov.au"
							target="_blank"
						>
							australia.gov.au
						</a>
					</p>
				</div>
			</div>
		</div>
	</div>
);

/**
 * Return true if the current URL is matched with the provided link.
 * @param {String} - Link path e.g /about or /contact
 * @returns {Boolean} - True if match, false otherwise.
 */
const isLinkActive = link => {
	return link === window.location.pathname;
};

export default Header;
