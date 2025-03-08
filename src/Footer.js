export default function Footer() {
  const hour = new Date().getHours();
  const openHour = 9;
  const closeHour = 22;
  const isopen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isopen ? (
        <div className="order">
          <p>We're open until {closeHour}.00 Come visit us or order online. </p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>
          We're happy to welcome you between {openHour}.00 and {closeHour}.00.
        </p>
      )}
    </footer>
  );
}
