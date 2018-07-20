import React from "react";

import "./CampaignTile.scss";

class CampaignTile extends React.Component {
	constructor(props) {
		super();
	}

	render() {
		return (
			<div className="feature-tile">
				<div className="feature-tile-image">
					<a href={this.props.href}>
						<img src={this.props.imgSrc} alt="" />
						<div className="feature-tile-content">
							<h3>{this.props.title}</h3>
							<p>{this.props.desc}</p>
						</div>
					</a>
				</div>
			</div>
		);
	}
}

export default CampaignTile;
