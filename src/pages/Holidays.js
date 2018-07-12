import React, { Component } from "react";
import { holidays } from "../assets/holidays.js";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "./Holiday.scss";
import { AUcalloutCalendar } from "@gov.au/callout";
import moment from "moment";

class Holiday extends Component {
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
		var nextHoliday = this.getNextDate(holidays, new Date(), true);
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
		var closestHolidayDate = Infinity;
		var nextHolidayId = null;
		var filteredHolidays = isNational
			? holidays.filter(record => record["Applicable To"] === "NATIONAL")
			: holidays;
		filteredHolidays.forEach(record => {
			if (
				new Date(record.Date) > now &&
				new Date(record.Date) < closestHolidayDate
			) {
				closestHolidayDate = new Date(record.Date);
				nextHolidayId = record._id;
			}
		});
		return this.state.holidays.filter(
			holiday => holiday._id === nextHolidayId
		);
	};

	/**
	 * Fires when the dropdown filter is changed. It updates the list of public holidays
	 * in the component state according to the state selected in the drop down box
	 */
	changeRegion = event => {
		const stateSelected = event.target.value;
		if (stateSelected === "none") {
			return null;
		} else {
			var stateHolidays = this.state.holidays.filter(
				record =>
					record["Applicable To"].includes(stateSelected) ||
					record["Applicable To"].includes("NATIONAL")
			);
			var nextHoliday = this.getNextDate(
				stateHolidays,
				new Date(),
				false
			);
			this.setState({ nextHoliday, stateSelected });
		}
	};

	/**
	 * Renders the next holiday on the page for the given region
	 */
	renderNextHoliday() {
		var firstHoliday = this.state.nextHoliday;
		return (
			<div key="one">
				<AUcalloutCalendar
					description="Callout calendar"
					time={moment(firstHoliday[0].Date, "YYYY/MM/DD").format(
						"DD MMMM"
					)}
					subline={
						"The next public holiday (" +
						this.state.stateSelected +
						") is "
					}
					name={firstHoliday[0]["Holiday Name"]}
				/>
				<span>{firstHoliday[0].Information}</span>
			</div>
		);
	}

	render() {
		return (
			<div className="row">
				<div className="col-sm-4">
					<h2>Check Upcoming Holidays For Your State</h2>
					<select
						id="state-select"
						className="au-select"
						onChange={this.changeRegion}
					>
						<option value="none">Please select</option>
						{this.state.states.map((state, i) => {
							return (
								<option value={state} key={i}>
									{state}
								</option>
							);
						})}
					</select>
					<br />
				</div>
				<div className="col-sm-8">{this.renderNextHoliday()}</div>
			</div>
		);
	}
}

export default Holiday;
