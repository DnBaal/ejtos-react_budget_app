import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
    const { dispatch } = useContext(AppContext);

    const changeCurrency = (val) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        })
    }

    return (
        <div className="dropdown-button-wrapper">
            <span className="dropdown-button-text">Currency:</span>
            <select
                id="cars"
                className="btn btn-secondary dropdown-toggle"
                style={{ backgroundColor: "#80e188", color: "black", textAlign: "", width: "250px" }}
                onChange={event => changeCurrency(event.target.value)}
            >
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>
            </select>
        </div> 
    );
}

export default Currency;