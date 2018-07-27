import React from "react";
import Link from "gatsby-link";

import "./Card.scss";

const Card = props => {
	return (
		<Link to={props.link} className="card-link">
			<div className={"card card--" + props.color}>
				<div className="card__text">
					<h3 className="card__heading">
						<b>{props.title}</b>
					</h3>
					<span className="card__subline">{props.bodyText}</span>
				</div>
			</div>
		</Link>
	);
};

export default Card;
