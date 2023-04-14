import React from "react";

import "./Curriculum.css";

import data from "./Curriculum.json";

function Curriculum() {
    return (
        <main className="content-page">
            <div className="container-contents">
                <div className="contents">
                    <h3>SOBRE MIM</h3>
                    <p>{data.about}</p>
                    <p>{data.about2}</p>
                </div>
                <div className="contents">
                    <h3>FORMAÇÕES ACADÊMICAS</h3>
                    <ul>
                        {data.academicEducation.map((item, index) => (
                            <li key={index}>
                                <b>{item.title}</b> - {item.description} - {item.local} - {item.dateEnd}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="contents">
                    <h3>HISTÓRICO PROFISSIONAL</h3>
                    <ul>
                        {data.professionalHistory.map((item, index) => (
                            <li key={index}>
                                <b>{item.jobPosition}</b> - {item.employer} - {item.local} - {item.dateStart} - {item.dateEnd}
                            </li>
                        ))}                      
                    </ul>
                </div>
            </div>
        </main> 
    )
}

export default Curriculum;
