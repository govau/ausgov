import React, { Component } from "react";

import AUselect from "@gov.au/select";
import { config } from "../../gatsby-config";

class NextHoliday extends Component {
	constructor(props) {
		super(props);
		this.state = {
			publicHolidays: null,
			states: ["NAT", "NT", "NSW", "VIC", "TAS", "SA", "ACT", "WA"],
			matchingHolidays: null,
			NextHoliday: null,
			currentDate: null,
		};
	}

	componentWillMount() {
		const url =
			"https://data.gov.au/api/3/action/datastore_search?resource_id=31eec35e-1de6-4f04-9703-9be1d43d405b";
		fetch(url, {
			method: "get",
		})
			.then(function(response) {
				return response.json();
			})
			.then(data => {
				const currentYear = new Date().getFullYear();
				// get holidays for current year only
				return data.result.records.filter(
					record =>
						record.Date.toString().substr(0, 4) ===
						currentYear.toString()
				);
			})
			.then(holidays => {
				this.setState({ publicHolidays: holidays });
			})
			.catch(error => {
				alert("Holidays not loaded");
			});
		const currentDate = this.convertDate();
		this.setState({ currentDate });
	}

	changeRegion = event => {
		if (event.target.value === "none") {
			this.setState({ matchingHolidays: [] });
		} else {
			var matchingHolidays = this.state.publicHolidays.filter(
				record =>
					record["Applicable To"].includes(event.target.value) ||
					record["Applicable To"].includes("NAT")
			);
			this.setState({ matchingHolidays });
		}
	};

	convertDate = () => {
		var currDate = new Date();
		var year = currDate.getFullYear().toString();
		var month =
			currDate.getMonth().toString().length === 1
				? "0" + (currDate.getMonth() + 1).toString()
				: currDate.getMonth().toString();
		var day = currDate.getDate().toString();
		return year + month + day;
	};

	/**
	 * Fetches the next public holiday object.
	 */
	nextHoliday = () => {
		var closestHolidayDate = Infinity;
		var nextHolidayId = null;
		const now = parseInt(this.convertDate());
		this.state.publicHolidays.forEach(record => {
			if (record.Date >= now && record.Date < closestHolidayDate) {
				closestHolidayDate = record.Date;
				nextHolidayId = record._id;
			}
		});
		return this.state.publicHolidays.filter(
			holiday => holiday._id === nextHolidayId
		);
	};

	render() {
		return (
			<div>
				<div>
					<select onChange={this.changeRegion}>
						<option value="disabled" defaultValue>
							Select State
						</option>
						{this.state.states.map((state, i) => {
							return (
								<option value={state} key={i}>
									{state}
								</option>
							);
						})}
					</select>
				</div>
				<div>
					<h1>Holidays for state</h1>
					{this.state.matchingHolidays &&
						this.state.matchingHolidays.map((holiday, i) => {
							return (
								<p key={i}>
									{holiday["Holiday Name"] +
										" " +
										holiday.Date}
								</p>
							);
						})}
				</div>
			</div>
		);
	}
}

export default NextHoliday;
