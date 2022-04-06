import React, { useState } from "react";
import ReactDOM from "react-dom";
import ContractData from "./data/ContractData";
import ContractItem from "./ContractItem";
import { FaArrowRight } from "react-icons/fa";

function SliderFilter() {
  const [contracts, setContracts] = useState(ContractData);
  const [companyList, filterList] = React.useState(ContractData);

  const headerColumns = [
    {
      value: "company",
      name: "Company",
    },
    {
      value: "status",
      name: "Status",
    },
    {
      value: "id",
      name: "invoiceID",
    },

    {
      value: "startdate",
      name: "Start Date",
    },
    {
      value: "enddate",
      name: "End Date",
    },
    {
      value: "mrr",
      name: "Monthly Revenue",
    },
  ];
  companyList.sort((a, b) => a.mrr - b.mrr);
  const [mrr, setPrice] = useState(500);

  // Triggered when the value gets updated while scrolling the slider:
  const handleInput = (e) => {
    setPrice(e.target.value);
  };

  return (
    <>
      <div className="container text-center">
        <div className="tagline">MRR for New Subscriptions</div>
        <div className="row">
          <div className="col-lg-2 px-3 mx-auto">
            <h2>${mrr}</h2>
          </div>
          <div className="col-lg-6 mx-auto my-auto py-3">
            <span className="badge badge-primary badge-subs">
              ({companyList.length}) Subscriptions
            </span>
          </div>
        </div>
        <div>
          <button className="btn">
            Pipe Subscriptions <FaArrowRight />
          </button>
        </div>
        {/* Price Range Input */}
        <div clasName="container mx-auto">
          <input
            className="slider"
            min={0}
            max={5000}
            type="range"
            onInput={handleInput}
          />
        </div>
      </div>

      <div style={{ padding: "20px", color: "#fff" }}>
        <table className="table-container">
          <div className="row">
            {headerColumns.map((headerColumns, index) => {
              return (
                <div
                  className="col-1 faded column-title"
                  key={headerColumns.index}
                >
                  {headerColumns.name}
                </div>
              );
            })}
          </div>
        </table>

        {/* Map All Contracts */}

        <div>
          <div>
            {companyList
              .filter((companyList) => {
                return companyList.mrr > parseInt(mrr, 10);
              })
              .map((companyList, index) => {
                return (
                  <ContractItem key={companyList.index} item={companyList} />
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default SliderFilter;
