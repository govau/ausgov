import React from "react";

import Card from "../components/Card";
import Campaign from "../components/Campaign";

import "./index.scss";

class Index extends React.Component {
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
				<hr />
				<h1>Next public holiday:</h1>
				<br />
				<hr />
				<h1>What's the Government promoting?</h1>
				<Campaign />
			</div>
		);
	}
}

export default Index;
