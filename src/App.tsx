import "./App.scss";
import img from "./assets/Logo.png";

export const App = () => {
  const navLinks = [
    "Mac",
    "Iphone",
    "Ipad",
    "Watch",
    "Airpods",
    "TV и Дом",
    "Аксессуары",
    "Доставка",
  ];

  return (
    <>
      <header
        style={{
          position: "sticky",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          width: "100%",
          height: "50px",
          backgroundColor: "#454545",
        }}
      >
        <img
          src={img}
          style={{
            justifySelf: "center",
            alignSelf: "center",
          }}
        />
        <nav
          style={{
            display: "flex",
            flexFlow: "row nowrap",
            gap: "10px",
            alignSelf: "center",
            color: "white",
          }}
        >
          {navLinks.map((el) => (
            <a
              key={el}
              style={{
                fontFamily: "SF-Pro-Display-Regular_light",
                fontSize: "0.9rem",
              }}
            >
              {el}
            </a>
          ))}
        </nav>
        <nav
          style={{
            alignSelf: "center",
            justifySelf: "center",
            display: "flex",
            flexFlow: "row nowrap",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <i
            className="fa-solid fa-magnifying-glass fa-xs"
            style={{
              color: "white",
            }}
          />
          <div
            style={{
              display: "flex",
              flexFlow: "row nowrap",
              alignItems: "center",
              gap: "3px",
            }}
          >
            <span
              style={{
                backgroundColor: "#3c3c3c",
                borderRadius: "1000px",
                padding: "2px 6px",
                color: "white",
              }}
            >
              0
            </span>
            <i
              className="fa-regular fa-bag-shopping fa-xs"
              style={{
                color: "white",
              }}
            />
          </div>
        </nav>
      </header>
    </>
  );
};
