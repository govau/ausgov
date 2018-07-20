import React from "react";
import Link from "gatsby-link";

import schoolIcon from "../assets/school.svg";
import telephoneCodesIcon from "../assets/telephone_codes.svg";
import timezoneIcon from "../assets/timezone.svg";
import publicHolidayIcon from "../assets/public_holiday.svg";
import nationalSymbolIcon from "../assets/national_symbol.svg";
import countryIcon from "../assets/australia.svg";
import Card from "../components/card";

import "./index.scss";

class Index extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="index">
				<div className="container ">
					<h2>About Australia</h2>

					<div className="row card-row">
						<div className="col-md-4">
							<Card
								title="Our Country"
								bodyText="Find out more about Australia"
								color="purple-light"
								link="/about-australia"
							/>
						</div>
						<div className="col-md-4">
							<Card
								title="National Symbols"
								bodyText="See National Symbols"
								color="green"
								link="/national-symbols"
							/>
						</div>
						<div className="col-md-4">
							<Card
								title="Telephone Codes"
								bodyText="Check Australian Phone codes"
								color="purple"
								link="/telephone-country-and-area-codes"
							/>
						</div>
					</div>

					<h2>Holidays and events</h2>
					<div className="row card-row">
						<div className="col-md-4">
							<Card
								title="School Holidays"
								bodyText="Check to see upcoming school holidays"
								color="purple-light"
								link="/school-term-dates"
							/>
						</div>
						<div className="col-md-4">
							<Card
								title="Public Holidays"
								bodyText="Check public holidays for your state"
								color="green"
								link="/holidays"
							/>
						</div>
						<div className="col-md-4">
							<Card
								title="Timezones"
								bodyText="Check timezones in Australia"
								color="purple"
								link="/time-zones-and-daylight-saving"
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Index;
