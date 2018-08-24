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
			<div className="col-sm-3">
				<Card
					link="http://www.australia.gov.au/novisa"
					type="campaign"
					image="https://www.australia.gov.au/sites/default/files/styles/homepage_quick_link_carousel/public/global_site/library/images/carousel_images/no-way-560x215.jpg?itok=rxsk73OR"
					title="No Way"
					color="plain"
					bodyText="Find out about Australia's tough border protection measures."
				/>
			</div>
			<div className="col-sm-3">
				<Card
					link="http://www.australia.gov.au/quitnow"
					type="campaign"
					image="https://www.australia.gov.au/sites/default/files/styles/homepage_quick_link_carousel/public/global_site/library/images/carousel_images/NTC3.jpg?itok=xDN-esVN"
					title="National Tobacco Campaign"
					color="plain"
					bodyText="Your story is what you make it. Quit smoking today for a better future for you and your family."
				/>
			</div>
			<div className="col-sm-3">
				<Card
					link="http://www.australia.gov.au/bowelscreening"
					type="campaign"
					image="https://www.australia.gov.au/sites/default/files/styles/homepage_quick_link_carousel/public/global_site/library/images/carousel_images/bowel4.jpg?itok=UnwG7vgX"
					title="National Bowel Cancer Screening"
					color="plain"
					bodyText="By 2020, all eligible people aged 50-74 will be sent a free bowel cancer screening kit every two years."
				/>
			</div>
		</div>
	</div>
);

export default Campaign;
