function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  const lastDigits = number.slice(-4);

  const month = expirationMonth.toString().padStart(2, "0");
  const year = expirationYear.toString().slice(-2);

  const style = {
    backgroundColor: bgColor,
    color: color,
    width: "300px",
    borderRadius: "10px",
    padding: "15px",
    margin: "10px",
  };

  return (
    <div style={style}>
      <div>{type}</div>

      <h3>•••• •••• •••• {lastDigits}</h3>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>
          Expires {month}/{year}
        </span>
        <span>{bank}</span>
      </div>

      <p>{owner}</p>
    </div>
  );
} // ← manquant

export default CreditCard;
