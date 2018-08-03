import React from "react";

import "./Card.scss";

const Card = props => {
	return (
		<a href={props.link} className={"card card--" + props.color}>
			{props.image && (
				<img
					src={props.image}
					className="au-responsive-media-img card__image"
					alt=""
				/>
			)}
			<div className="card__text">
				<h3 className="card__heading">
					<b>{props.title}</b>
				</h3>
				<span className="card__subline">{props.bodyText}</span>
			</div>
		</a>
	);
};

export default Card;
