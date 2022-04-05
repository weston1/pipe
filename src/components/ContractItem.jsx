import Card from "./Card";

function ContractItem({ item }) {
  return (
    <>
      <div>
        <td className="faded" key={item.index}>
          {item.name}
        </td>
      </div>
      <Card className="contract-list">
        <td className="container row">
          <input
            type="checkbox"
            className="checkbox my-auto"
            id={item.invoiceID}
            name="contracts"
          />
          <td className="col-1 logo-mask">
            <img
              src={item.img}
              alt={item.company}
              className="logo-img m-auto"
            />
          </td>
          <td className="col-1">
            <p>{item.company}</p>
          </td>
          <td className="col-1">
            <p className="badge">{item.status}</p>
          </td>
          <td className="col-1">
            <p>{item.invoiceID}</p>
          </td>
          <td className="col-1">
            <p>{item.startDate}</p>
          </td>
          <td className="col-1">
            <p>{item.endDate}</p>
          </td>
          <td className="col-1">
            <p>{item.mrr}</p>
          </td>
        </td>
      </Card>
    </>
  );
}

export default ContractItem;
