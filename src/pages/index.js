import React from "react";

import Card from "../components/Card";

import PublicHolidays from "../components/PublicHoliday";

import "./index.scss";

class Index extends React.Component {
	render() {
		return (
			<div className="index">
				<div className="container-fluid">
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
								link="/holiday"
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
					<h2>Next public holiday</h2>
					<div className="row">
						<div className="col-sm-8">
							Our National Public Holidays are New Year's Day,
							Australia Day, Good Friday, Easter Monday, Anzac
							Day, Christmas Day and Boxing Day. <br />
							<br /> All other public holidays such as Queen's
							Birthday and Labour Day are individually declared by
							the state and territory governments.
						</div>
						<PublicHolidays showAll={false} />
					</div>
					<br />
				</div>
			</div>
		);
	}
}

export default Index;
