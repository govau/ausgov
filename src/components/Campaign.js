import React from "react";
import Card from "./Card";

const Campaign = () => (
	<div>
		<div className="row row-aligned">
			<div className="col-sm-3">
				<Card
					title="Youth Jobs PaTH"
					type="campaign"
					bodyText="A flexible way to trial and hire the right young person for your business."
					color="plain"
					link="https://jobactive.gov.au/path"
					image="https://www.australia.gov.au/sites/default/files/styles/homepage_quick_link_carousel/public/global_site/library/images/carousel_images/ausgovau_YouthJobsPaTH_259x153.jpg?itok=goqS2o8J"
				/>
			</div>
			<div className="col-sm-3">
				<Card
					title="BreastScreen Australia"
					type="campaign"
					bodyText="Invitation for free breast screening now covers women 70-74."
					color="plain"
					link="https://campaigns.health.gov.au/breastscreen"
					image="https://www.australia.gov.au/sites/default/files/styles/homepage_quick_link_carousel/public/global_site/library/images/carousel_images/breast-screen-560x215.jpg?itok=GgS_uUBk"
				/>
			</div>

			<div className="col-sm-3">
				<Card
					link="https://www.homeaffairs.gov.au/about/contact/report-suspicious-activities-behaviour/protection-customs-fraud-offences"
					type="campaign"
					image="https://www.australia.gov.au/sites/default/files/styles/homepage_quick_link_carousel/public/global_site/library/images/carousel_images/BorderWatchPromo_275x160.jpg?itok=Vi3oKSJg"
					title="Border Watch"
					color="plain"
					bodyText="Flag suspicious activity anonymously with Border Watch and help the Australian Border Force keep our community safe."
				/>
			</div>
			<div className="col-sm-3">
				<Card
					link="https://www.defencejobs.gov.au/"
					type="campaign"
					image="https://www.australia.gov.au/sites/default/files/styles/homepage_quick_link_carousel/public/global_site/library/images/carousel_images/defence-jobs-%20large.jpg?itok=I63L9HhF"
					title="Defence Jobs"
					color="plain"
					bodyText="Find out more about life in the ADF or about Army, Navy and Air Force careers."
				/>
			</div>
		</div>
		<div className="row row-aligned">
			<div className="col-sm-3">
				<Card
					link="https://jobactive.gov.au/"
					type="campaign"
					image="https://www.australia.gov.au/sites/default/files/styles/homepage_quick_link_carousel/public/global_site/library/images/carousel_images/jobactive.jpg?itok=qnEb_TSz"
					title="Job Active"
					color="plain"
					bodyText="Find the right fit for your business."
				/>
			</div>
		</div>
	</div>
);

export default Campaign;
