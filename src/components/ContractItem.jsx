import Card from "./Card";

function ContractItem({ item }) {
  return (
    <Card className="contract-list">
      <div className="container row">
        <input
          type="checkbox"
          className="checkbox my-auto"
          id={item.company}
          name="contracts"
          checked
        />
        <div className="col-1">
          <div className="logo-mask">
            <img
              src={item.img}
              alt={item.company}
              className="logo-img my-auto"
            />
          </div>
        </div>
        <div className="col-1">
          <p>{item.company}</p>
        </div>
        <div className="col-1">
          <p>{item.status}</p>
        </div>
        <div className="col-1">
          <p>{item.invoiceID}</p>
        </div>
        <div className="col-1">
          <p>{item.startDate}</p>
        </div>
        <div className="col-1">
          <p>{item.endDate}</p>
        </div>
        <div className="col-1">
          <p>{item.mrr}</p>
        </div>
      </div>
    </Card>
  );
}

export default ContractItem;
