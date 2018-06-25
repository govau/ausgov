import React from "react";

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
						<div className="col-xs-4" />
						<div className="col-xs-4" />
						<div className="col-xs-4" />
						<div className="col-xs-4" />
					</div>
				</div>
			</div>
		);
	}
}

export default Index;
