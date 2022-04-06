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
        <td className="row">
          <input
            type="checkbox"
            className="checkbox my-auto"
            id={item.invoiceID}
            name="contracts"
          />
        </td>
        <td className="logo-mask">
          <img src={item.img} alt={item.company} className="logo-img m-auto" />
        </td>
        <td>
          <p>{item.company}</p>
        </td>
        <td>
          <p className="badge">{item.status}</p>
        </td>
        <td>
          <p className="date">{item.invoiceID}</p>
        </td>
        <td>
          <p>{item.startDate}</p>
        </td>
        <td>
          <p>{item.endDate}</p>
        </td>
        <td>
          <p>${item.mrr}</p>
        </td>
      </Card>
    </>
  );
}

export default ContractItem;
