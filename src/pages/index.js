import React from "react";
import Link from "gatsby-link";

import schoolIcon from "../assets/school.svg";
import telephoneCodesIcon from "../assets/telephone_codes.svg";
import timezoneIcon from "../assets/timezone.svg";
import publicHolidayIcon from "../assets/public_holiday.svg";
import nationalSymbolIcon from "../assets/national_symbol.svg";

import "./index.scss";

class Index extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="index">
				<div className="container-fluid">
					<div className="row">
						<div className="col-xs-4">
							<Link to="">
								<img
									className="icon"
									src={schoolIcon}
									alt="school icon"
								/>
							</Link>
							School Timetable
						</div>
						<div className="col-xs-4">
							<Link to="">
								<img
									className="icon"
									src={publicHolidayIcon}
									alt="public holidays"
								/>
							</Link>
							Public Holidays
						</div>
						<div className="col-xs-4">
							<Link to="">
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
									alt="australian timezones"
								/>
							</Link>
							Australian Timezones
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
					</div>
				</div>
			</div>
		);
	}
}

export default Index;
