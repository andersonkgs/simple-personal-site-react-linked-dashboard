import React from "react";

import PortfolioItem from "../PortfolioItem/PortfolioItem";

import "./Portfolio.css";

import portfolio from "./Portfolio.json";

function Portfolio() {

    return (
        <main className="content-page">
            <div className="container-contents">

                {portfolio.map(
                    (item, index) =>
                        <PortfolioItem
                            key={index}
                            link={item.link}
                            image={item.image}
                            description={item.description}
                        ></PortfolioItem>
                    )   
                }

            </div>
        </main>
    )
}

export default Portfolio;
