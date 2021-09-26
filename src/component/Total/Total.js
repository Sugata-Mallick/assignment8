import React from 'react';

const Total = (props) => {
const {total} = props;
console.log(props)
const totalReduce = (previous, detail) => previous + detail.cost;

const card = total.reduce(totalReduce, 0);
 
    return (
      <div className="card bg-info  p-4">
        <h3> Details Summary</h3>
        <h5>Country Count:{props.total.length}</h5>
        <h5>total: {card.toFixed(2)}</h5>

        <button type="button" className="btn btn-primary text-light w-50">
          Details
        </button>
    
        <ul className="mt-3">
          {total.map((p) => (
            <li> {p.name}</li>
          ))}
        </ul>

      </div>
    );
};

export default Total;