import React, { Component } from "react";
import { holidays } from "./PublicHolidayList";
import { AUcalloutCalendar } from "@gov.au/callout";

class PublicHoliday extends Component {
	constructor(props) {
		super(props);

		this.state = {
			holidays,
			states: ["NATIONAL", "NT", "NSW", "VIC", "TAS", "SA", "ACT", "WA"],
			nextHoliday: [],
			stateSelected: "NATIONAL",
		};
	}

	componentWillMount() {
		let nextHoliday = this.getNextDate(holidays, new Date(), true);
		this.setState({ nextHoliday });
	}

	/**
	 * Compares an array of dates to a given date and returns the next date,
	 * or in this case the object of the next public holiday.
	 * @param holidays: this is the list of holidays
	 * @param now: time you want to compare to
	 * @param isNational: do you want to return a national holiday?
	 * This is true in the component will mount lifecycle, since we want to load
	 * a national holiday on page load
	 */
	getNextDate = (holidays, now, isNational) => {
		let closestHolidayDate = Infinity;
		let nextHolidayId = null;
		let filteredHolidays = isNational
			? holidays.filter(record => record.state === "NATIONAL")
			: holidays;
		filteredHolidays.forEach(record => {
			if (
				new Date(record.date) > now &&
				new Date(record.date) < closestHolidayDate
			) {
				closestHolidayDate = new Date(record.date);
				nextHolidayId = record._id;
			}
		});
		return this.state.holidays.filter(
			holiday => holiday._id === nextHolidayId
		);
	};

	render() {
		return (
			<div className="holidays">
				{this.props.showAll ? (
					this.state.holidays.map((item, i) => (
						<div key={i}>
							<AUcalloutCalendar
								description=""
								datetime=""
								time={new Date(item.date).toLocaleString(
									"en-AU",
									{
										day: "numeric",
										month: "long",
									}
								)}
								subline=""
								name={item.title}
							/>
						</div>
					))
				) : (
					<div className="col-sm-4">
						<AUcalloutCalendar
							description=""
							datetime={new Date(
								this.state.nextHoliday[0].date
							).toISOString()}
							time={new Date(
								this.state.nextHoliday[0].date
							).toLocaleString("en-AU", {
								day: "numeric",
								month: "long",
							})}
							subline={
								"The next " +
								this.state.stateSelected +
								" public holiday is "
							}
							name={this.state.nextHoliday[0].title}
						/>
						<span>{this.state.nextHoliday[0].Information}</span>
					</div>
				)}
			</div>
		);
	}
}

export default PublicHoliday;
