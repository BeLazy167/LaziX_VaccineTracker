import React, { useState, useEffect } from "react";
import Select from "react-select";
import data from "./district.json";

function getUnique(arr, comp) {
    // store the comparison  values in array
    const unique = arr
        .map((e) => e[comp])

        // store the indexes of the unique objects
        .map((e, i, final) => final.indexOf(e) === i && i)

        // eliminate the false indexes & return unique objects
        .filter((e) => arr[e])
        .map((e) => arr[e]);

    return unique;
}
function test() {
    const handleChange = (e) => {
        state = e.target.value;
        
        // get district where state = state Code pending 
    };

    //get unique state
    const uniqueState = getUnique(data.district_name, "state_name");
    const SelectState = (e) => {};
    return (
        <div>
            //create a dropdown for state
            <Select
                option={uniqueState.map((key) => key)}
                isSearchable
                onInputChange={handleChange}
            />
        </div>
    );
}


{/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
<KeyboardDatePicker
  margin="normal"
  id="date-picker-dialog"
  format="dd-MM-yyyy"
  value={selectedDate}
  onChange={handleDateChange}
  className="districtDateInput"
/>
</MuiPickersUtilsProvider> */}

export default test;
