import React, { useState } from "react";
import ReactDOM from "react-dom";
import ContractData from "./data/ContractData";
import ContractItem from "./ContractItem";
import { Slider } from "@material-ui/core";

function SliderFilter() {
  const [contracts, setContracts] = useState(ContractData);

  const [value, setValue] = React.useState(0);
  const [companyList, filterList] = React.useState(ContractData);
  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    let limit = 0;
    switch (Math.round(newValue)) {
      case 100: {
        limit = 100;
        break;
      }
      case 1000: {
        limit = 1000;
        break;
      }
      case 2500: {
        limit = 2500;
        break;
      }
      case 5000: {
        limit = 5000;
        break;
      }
      case 6000: {
        limit = 6000;
        break;
      }
      case 7500: {
        limit = 7500;
        break;
      }
      default: {
        limit = 10000;
      }
    }
    const newList = ContractData.filter((item) => item.mrr <= limit);
    filterList(newList);
  };
  const headerColumns = [
    {
      value: "company",
      label: "Company",
    },
  ];
  companyList.sort((a, b) => a.mrr - b.mrr);
  return (
    <>
      <div id="container mx-auto text-center">
        <div className="tagline">MRR for New Subscriptions</div>

        <h2>$ {value}</h2>
        <span class="badge badge-primary faded">
          Contracts Currently Available ({companyList.length})
        </span>
      </div>
      {/* Price Range Input */}
      <div style={{ padding: "20px", color: "#fff" }}>
        <Slider
          defaultValue={value}
          step={1}
          s
          min={0}
          max={10000}
          onChange={handleSliderChange}
          aria-labelledby="linear-slider"
        />
        {/* Map All Contracts */}
        <div>
          <div>
            {headerColumns.map((item, index) => (
              <li key={item.index} item={item} />
            ))}
          </div>
          {companyList.map((item, index) => (
            <ContractItem key={item.index} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default SliderFilter;
