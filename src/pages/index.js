import React from "react";
import Link from "gatsby-link";

import schoolIcon from "../assets/school.svg";
import telephoneCodesIcon from "../assets/telephone_codes.svg";
import timezoneIcon from "../assets/timezone.svg";
import publicHolidayIcon from "../assets/public_holiday.svg";
import nationalSymbolIcon from "../assets/national_symbol.svg";
import countryIcon from "../assets/australia.svg";

import PublicHolidays from "../components/PublicHoliday";

import "./index.scss";

class Index extends React.Component {
	render() {
		return (
			<div className="index">
				<div className="row">
					<div className="col-xs-4">
						<Link to="/school-term-dates">
							<img
								className="icon"
								src={schoolIcon}
								alt="school icon"
							/>
						</Link>
						School Timetables
					</div>
					<div className="col-xs-4">
						<Link to="/holiday">
							<img
								className="icon"
								src={publicHolidayIcon}
								alt="public holidays"
							/>
						</Link>
						Public Holidays
					</div>
					<div className="col-xs-4">
						<Link to="/telephone-country-and-area-codes">
							<img
								className="icon"
								src={telephoneCodesIcon}
								alt="telephone codes"
							/>
						</Link>
						Telephone Codes
					</div>
					<div className="col-xs-4">
						<Link to="">
							<img
								className="icon"
								src={timezoneIcon}
								alt="australian time zones"
							/>
						</Link>
						Australian Time Zones
					</div>
					<div className="col-xs-4">
						<Link to="">
							<img
								className="icon"
								src={nationalSymbolIcon}
								alt="national symbols"
							/>
						</Link>
						National Symbols
					</div>
					<div className="col-xs-4">
						<Link to="">
							<img
								className="icon"
								src={countryIcon}
								alt="our country"
							/>
						</Link>
						Our Country
					</div>
				</div>
				<br />
				<hr />
				<h1>Next public holiday:</h1>
				<div className="row">
					<div className="col-sm-8">
						Our National Public Holidays are New Year's Day,
						Australia Day, Good Friday, Easter Monday, Anzac Day,
						Christmas Day and Boxing Day. <br />
						<br /> All other public holidays such as Queen's
						Birthday and Labour Day are individually declared by the
						state and territory governments.
					</div>
					<PublicHolidays showAll={false} />
				</div>
				<br />
				<hr />
				<h1>What's the Government promoting?</h1>
			</div>
		);
	}
}

export default Index;
