import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputAutoComplete from "./InputAutoComplete";
import CountriesList from "../../data/countries-list.json";
import "./index.css";

const AutoComplete = () => {
    const [country, setcountry] = useState("");
    return (
        <>
            <div className="row">
                <div className="col text-center">
                    <h2>Search Country!!!</h2>
                    <p>You can search a country by it's name</p>
                    <div className="d-flex justify-content-center mb-3">
                        <div className="search-bar-container">
                            <InputAutoComplete
                                data={CountriesList}
                                onSelect={country => setcountry(country)}
                            />

                            <FontAwesomeIcon
                                icon="search"
                                className="search-bar-icon"
                            />
                        </div>
                    </div>

                    {country && (
                        <pre className="text-left">
                            {JSON.stringify(country, 0, 2)}
                        </pre>
                    )}
                </div>
            </div>
        </>
    );
};

export default AutoComplete;
