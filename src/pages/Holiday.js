import React, { Component } from "react";
import { holidays } from "../assets/holidays.js";
import moment from "moment";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "./Holiday.scss";

class Holiday extends Component {
	constructor(props) {
		super(props);
		this.state = {
			holidays,
			states: ["NATIONAL", "NT", "NSW", "VIC", "TAS", "SA", "ACT", "WA"],
			matchingHolidays: [],
		};
	}

	renderHolidays() {
		var firstHoliday = this.getNextDate(this.state.holidays, new Date());
		var secondHolidayId = firstHoliday[0]._id + 1;
		var secondHoliday = this.state.holidays.filter(
			holiday => holiday._id === secondHolidayId
		);
		var thirdHolidayId = secondHoliday[0]._id + 1;
		var thirdHoliday = this.state.holidays.filter(
			holiday => holiday._id === thirdHolidayId
		);
		const holidays = [firstHoliday, secondHoliday, thirdHoliday];
		return holidays.map((holiday, i) => (
			<p key={i}>
				{holiday[0]["Holiday Name"]} - {holiday[0].Date} -{" "}
				{holiday[0]["Applicable To"]}
			</p>
		));
	}

	getNextDate = (dates, now) => {
		var closestHolidayDate = Infinity;
		var nextHolidayId = null;
		dates.forEach(record => {
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

	changeRegion = event => {
		if (event.target.value === "none") {
			this.setState({ matchingHolidays: [] });
			return null;
		} else {
			var matchingHolidays = this.state.holidays.filter(
				record =>
					record["Applicable To"].includes(event.target.value) ||
					record["Applicable To"].includes("NAT")
			);
			var upcomingMatchingHolidays = matchingHolidays.filter(
				holiday => new Date(holiday.Date) > new Date()
			);
			this.setState({ matchingHolidays: upcomingMatchingHolidays });
		}
	};

	renderMatchingHolidays = () => {
		if (this.state.matchingHolidays) {
			return this.state.matchingHolidays.map((holiday, i) => (
				<p key={i}>
					{holiday.Date} - {holiday["Holiday Name"]}
				</p>
			));
		}
	};

	render() {
		return (
			<div className="au-body">
				<h1>Upcoming Holidays</h1>
				{this.renderHolidays()}
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
				<br />
				<ReactCSSTransitionGroup
					transitionName="example"
					transitionEnterTimeout={800}
					transitionLeaveTimeout={800}
				>
					{this.renderMatchingHolidays()}
				</ReactCSSTransitionGroup>
			</div>
		);
	}
}

export default Holiday;
