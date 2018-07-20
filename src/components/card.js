import React from "react";
import "./card.scss";
import Link from "gatsby-link";

function Card(props) {
	return (
		<Link to={props.link} className="card-link">
			<div className={"card card--" + props.color}>
				<div>
					<h3 className="card__heading">
						<b>{props.title}</b>
					</h3>
					<span className="card__text">{props.bodyText}</span>
				</div>
			</div>
		</Link>
	);
}

export default Card;
