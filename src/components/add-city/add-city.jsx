import React from 'react';
import "./add-city.scss";

import {ReactComponent as City} from "../../assets/city.svg"
import {ReactComponent as AddButton} from "../../assets/add_button.svg"


const AddCity = (props) => {
    return (
        <div className="addcity">
            <h2 className="addcity__title">Add City</h2>
            <AddButton className="addcity__add_button" />
            <City className="addcity__city" />
        </div>
    );
};

export default AddCity;