import React from "react";

import Campaign from "../components/Campaign";
import Card from "../components/Card";

import PublicHolidays from "../components/PublicHoliday";

import "./index.scss";

class Index extends React.Component {
	render() {
		return (
			<main>
				<div className="container au-body">
					<h1>About Australia</h1>
					<div className="row row-aligned">
						<div className="col-md-4">
							<Card
								title="Our Country"
								type="standard"
								bodyText="Find out more about Australia"
								color="neutral"
								link="/about-australia"
							/>
						</div>
						<div className="col-md-4">
							<Card
								title="National Symbols"
								type="standard"
								bodyText="See National Symbols"
								color="neutral"
								link="/national-symbols"
							/>
						</div>
						<div className="col-md-4">
							<Card
								title="Telephone Codes"
								type="standard"
								bodyText="Check Australian Phone codes"
								color="neutral"
								link="/telephone-country-and-area-codes"
							/>
						</div>
					</div>

					<h1>Holidays and events</h1>
					<div className="row row-aligned">
						<div className="col-md-4">
							<Card
								title="School Holidays"
								type="standard"
								bodyText="Check to see upcoming school holidays"
								color="neutral"
								link="/school-term-dates"
							/>
						</div>
						<div className="col-md-4">
							<Card
								title="Public Holidays"
								type="standard"
								bodyText="Check public holidays for your state"
								color="neutral"
								link="/holiday"
							/>
						</div>
						<div className="col-md-4">
							<Card
								title="Timezones"
								type="standard"
								bodyText="Check timezones in Australia"
								color="neutral"
								link="/time-zones-and-daylight-saving"
							/>
						</div>
					</div>
				</div>
				<div className="au-body container">
					<h2>Next public holiday</h2>
					<div className="row row-aligned">
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
				</div>
				<br />

				<div className="au-body au-body--alt">
					<div className="container">
						<h1>What's the Government promoting?</h1>
						<Campaign />
					</div>
				</div>
			</main>
		);
	}
}

export default Index;
