import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faMapSigns } from "@fortawesome/free-solid-svg-icons";

const Details = (props) => {
  const { name, img, country, countryCode, dialCode, cost } = props.details;

  const element = <FontAwesomeIcon icon={faMapSigns} />;
  console.log(props.details);
  return (
    <div>
      <div className="col">
        <div className="card ">
          <div className="card-body bg-warning border border-2 border-primary rounded-5">
            <div>
              <img className="w-100" src={img} alt="" />
            </div>
            <div>
              <h6 className=" card-title mt-2">Name: {name}</h6>
              <h6 className=" card-title ">Country:{country}</h6>
              <h6 className=" card-title ">CountryCode: {countryCode}</h6>
              <h6 className=" card-title ">DialCode: {dialCode}</h6>
              <h6 className=" card-title ">Cost: ${cost} </h6>
              <button
                className="btn btn-success text-light rounded-5 mt-2"
                onClick={() => props.handleVisit(props.details)}
              >
                {" "}
                {element} Visit here
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
