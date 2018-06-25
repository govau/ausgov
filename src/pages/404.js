import React from 'react';
import AUbutton from '@gov.au/buttons';
import "./404.scss"
import Link from "gatsby-link";

const error = () => {
    return (
        <div class="row">
            <div className="col-md-12">
                <h2 className="error-heading">Sorry, we can't find the page you're looking for</h2>
                <p>
                    The page might have been deleted, moved or it might not exist.
                    Please check you’ve typed the right address.
                </p>
                <br />
                <strong>Error code: 404</strong> <br /> <br />
                <Link to="/" className="visit-home-link"><AUbutton as='secondary'>
                    Visit our home page
                </AUbutton></Link>
            </div>

        </div>
    );
};

export default error;