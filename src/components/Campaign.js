import React from "react";

import CampaignTile from "./CampaignTile";

const Campaign = () => (
	<div className="row">
		<div className="col-xl-2 col-md-3">
			<CampaignTile
				href="https://jobactive.gov.au/path"
				imgSrc="https://www.australia.gov.au/sites/default/files/styles/homepage_quick_link_carousel/public/global_site/library/images/carousel_images/ausgovau_YouthJobsPaTH_259x153.jpg?itok=goqS2o8J"
				title="Youth Jobs PaTH"
				desc="A flexible way to trial and hire the right young person for your business."
			/>
		</div>
		<div className="col-xl-2 col-md-3">
			<CampaignTile
				href="https://campaigns.health.gov.au/breastscreen"
				imgSrc="https://www.australia.gov.au/sites/default/files/styles/homepage_quick_link_carousel/public/global_site/library/images/carousel_images/breast-screen-560x215.jpg?itok=GgS_uUBk"
				title="BreastScreen Australia"
				desc="Invitation for free breast screening now covers women 70-74."
			/>
		</div>
		<div className="col-xl-2 col-md-3">
			<CampaignTile
				href="https://www.homeaffairs.gov.au/about/contact/report-suspicious-activities-behaviour/protection-customs-fraud-offences"
				imgSrc="https://www.australia.gov.au/sites/default/files/styles/homepage_quick_link_carousel/public/global_site/library/images/carousel_images/BorderWatchPromo_275x160.jpg?itok=Vi3oKSJg"
				title="Border Watch"
				desc="Flag suspicious activity anonymously with Border Watch and help the Australian Border Force keep our community safe."
			/>
		</div>
		<div className="col-xl-2 col-md-3">
			<CampaignTile
				href="https://www.defencejobs.gov.au/"
				imgSrc="https://www.australia.gov.au/sites/default/files/styles/homepage_quick_link_carousel/public/global_site/library/images/carousel_images/defence-jobs-%20large.jpg?itok=I63L9HhF"
				title="Defence Jobs"
				desc="Find out more about life in the ADF or about Army, Navy and Air Force careers."
			/>
		</div>
		<div className="col-xl-2 col-md-3">
			<CampaignTile
				href="https://jobactive.gov.au/"
				imgSrc="https://www.australia.gov.au/sites/default/files/styles/homepage_quick_link_carousel/public/global_site/library/images/carousel_images/jobactive.jpg?itok=qnEb_TSz"
				title="Job Active"
				desc="Find the right fit for your business."
			/>
		</div>
	</div>
);

export default Campaign;
