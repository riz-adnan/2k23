
import './sponsors.css';
import yearsDiscription from "./sponsorsDetails"
import React, { useState } from "react";
import SponsorsCard from "./sponsorsCard"

function SponsorsPage() {
  const years = [2023, "previous"];
  const [selectedYear, setSelectedYear] = useState(2023);


  return (
    <div className = "mainBackground w-100">
      <div>
        <div className = "mb-4">
          <h1 className = "titleStyle text-center">Sponsors</h1>
        </div>
        <div>
          <div style={timelineContainer}>
            {years.map((year, index) => (
              <div className = "inputContainer" key = {year}>
                <div className="yearContainer">
                  <div>
                    <input
                        type="radio"
                        name="year"
                        id={year}
                        checked={year === selectedYear}
                        onChange={() => setSelectedYear(year)}
                        className = "timelineRadio"
                      />
                  </div>
                  <div>
                    <label htmlFor={year} style={{color:selectedYear === year ? '#01FFF4' : 'white', cursor: "pointer",
                        fontFamily:"Good Times W00 Bold"}} className = "labelStyle">
                      {year}
                    </label>
                  </div>
                </div>
                <div>
                  {index!==years.length - 1 && <div className='timelineConnector'/>}
                </div>
              </div>
            ))}
            </div>
          </div>
        <div className = "mainBoxContainer mt-4">
        <div className = "d-flex flex-row flex-wrap boxContainer m-auto justify-content-center w-100">
          {yearsDiscription[selectedYear].length===0 && <h1 className = "comingStyle">Coming Soon..</h1>}
          {yearsDiscription[selectedYear].length!==0 && yearsDiscription[selectedYear].map((eachItem)=><SponsorsCard logo = {eachItem.companyLogo} companyName = {eachItem.companyName} key = {eachItem.uniqueNo}/>)}
          </div>
        </div>
      </div>
    </div>
  )
}

const timelineContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent:"center",
  width: "100%",
  height: "50px"
};


export default SponsorsPage;
