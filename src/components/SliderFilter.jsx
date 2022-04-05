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
      value: "mrr",
      name: "Monthly Revenue",
    },
    {
      value: "startdate",
      name: "Start Date",
    },
    {
      value: "enddate",
      name: "End Date",
    },
  ];
  companyList.sort((a, b) => a.mrr - b.mrr);

  const [mrr, setPrice] = useState(0);

  // Triggered when the value gets updated while scrolling the slider:
  const handleInput = (e) => {
    setPrice(e.target.value);
  };
  const hotels = [
    {
      img: "https://logo.clearbit.com/google.com",
      company: "Google",
      status: "available",
      invoiceID: "123",
      mrr: "1",
      startDate: "2019-01-01",
      endDate: "2020-01-01",
    },
    {
      img: "https://is2-ssl.mzstatic.com/image/thumb/Purple115/v4/11/84/a2/1184a24f-3824-480d-1c57-76b79e096548/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png",
      company: "Fair",
      status: "available",
      invoiceID: "124",
      mrr: "12",
      startDate: "2019-01-01",
      endDate: "2020-01-01",
    },
    {
      img: "https://logo.clearbit.com/salesforce.com",
      company: "Salesforce",
      status: "available",
      invoiceID: "125",
      mrr: "2",
      startDate: "2019-01-01",
      endDate: "2020-01-01",
    },
  ];

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
      </div>
      {/* Price Range Input */}
      <div clasName="container">
        <input
          className="slider"
          min={0}
          max={7500}
          type="range"
          onInput={handleInput}
        />
      </div>
      <div style={{ padding: "20px", color: "#fff" }}>
        <table>
          <tr>
            {headerColumns.map((headerColumns, index) => {
              return (
                <td className="faded" key={headerColumns.index}>
                  {headerColumns.name}
                </td>
              );
            })}
          </tr>
          {/* 
            {companyList.map((item, index) => (
              <ContractItem key={item.index} item={item} />
            ))} */}
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
