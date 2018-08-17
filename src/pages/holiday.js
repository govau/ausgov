import React from "react";

import PublicHoliday from "../components/PublicHoliday";

class Holiday extends React.Component {
	render() {
		return (
			<div className="public-holiday">
				<div className="container au-body">
					<h1>Public holidays</h1>
					The following list has been extracted from:{" "}
					<a
						href="https://data.gov.au"
						alt="Australian public holidays"
					>
						data.gov.au
					</a>
					<br />
					<br />
					<PublicHoliday showAll={true} />
				</div>
			</div>
		);
	}
}

export default Holiday;
