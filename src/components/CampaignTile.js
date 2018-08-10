import React from "react";

import "./CampaignTile.scss";

class CampaignTile extends React.Component {
	constructor(props) {
		super();
	}

	render() {
		return (
			<a className="campaign-tile" href={this.props.href}>
				<div className="col-xl-2 col-md-3">
					<img src={this.props.imgSrc} alt="" />
					<div className="campaign-tile-content">
						<h3>{this.props.title}</h3>
						<p>{this.props.desc}</p>
					</div>
				</div>
			</a>
		);
	}
}

export default CampaignTile;
