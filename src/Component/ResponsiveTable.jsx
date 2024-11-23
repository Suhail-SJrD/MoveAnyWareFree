import React from "react";
import ResponsiveTableCss from "../CustomCss/ResponsiveTable.module.css";

const ResponsiveTable = () => {
  const data = [
    {
      distance: "0 - 500 Miles",
      time: "1 - 2 Days",
      openCost: "$350",
      enclosedCost: "$550",
    },
    {
      distance: "500 - 1500 Miles",
      time: "2 - 4 Days",
      openCost: "$770",
      enclosedCost: "$975",
    },
    {
      distance: "1500 - 2500 Miles",
      time: "4 - 7 Days",
      openCost: "$1,070",
      enclosedCost: "$1,450",
    },
    {
      distance: "2500 Miles And Above",
      time: "7 - 9 Days",
      openCost: "$1,580",
      enclosedCost: "$2,150",
    },
  ];

  return (
    <div className={ResponsiveTableCss.tableContainer}>
      <h1 className={ResponsiveTableCss.heading}>
        How much does it <span>cost to ship a car per mile?</span>
      </h1>
      <p className={ResponsiveTableCss.description}>
        The average <strong>cost to ship a car</strong> is indirectly
        proportionate to the distance a car needs to be shipped. Let’s say if
        the vehicle needs to be transported up to 500 miles, then the average
        cost is slightly above $1. As the distance increases and it goes up to
        1000 miles, the average cost decreases to $0.75 per mile.
      </p>

      {/* Scrollable Table Wrapper */}
      <div className={ResponsiveTableCss.tableWrapper}>
        <table>
          <thead>
            <tr>
              <th>Distance</th>
              <th>Estimated Time</th>
              <th>Estimated Open Transport Cost</th>
              <th>Estimated Enclosed Transport Cost</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td data-label="Distance">{row.distance}</td>
                <td data-label="Estimated Time">{row.time}</td>
                <td data-label="Open Transport Cost">{row.openCost}</td>
                <td data-label="Enclosed Transport Cost">{row.enclosedCost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className={ResponsiveTableCss.note}>
        <strong>Note:</strong> Prices are based on recent shipping and current
        market scenarios. For a customized and accurate auto transportation
        quote, please call our toll-free number:{" "}
        <a href="tel:+18332334447">+1 (833) 233-4447</a>
      </p>
    </div>
  );
};

export default ResponsiveTable;
