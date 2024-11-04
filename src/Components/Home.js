import { Link } from "react-router-dom";
import { useState } from "react";
function Home() {
  const products = [
    {
      id: 1,
      name: "IP 16",
      price: 1500,
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "img",
    },
    {
      id: 2,
      name: "IP 15",
      price: 500,
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "img",
    },
    {
      id: 3,
      name: "IP 15",
      price: 1000,
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "img",
    },
    {
      id: 4,
      name: "IP 15",
      price: 1200,
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "img",
    },
    {
      id: 5,
      name: "IP 15",
      price: 1234,
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "img",
    },
    {
      id: 6,
      name: "IP 15",
      price: 1242,
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "img",
    },
    {
      id: 7,
      name: "IP 15",
      price: 1098,
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "img",
    },
    {
      id: 7,
      name: "IP 15",
      price: 1098,
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "img",
    },
    {
      id: 7,
      name: "IP 15",
      price: 1098,
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "img",
    },
    {
      id: 7,
      name: "IP 15",
      price: 1098,
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "img",
    },
    {
      id: 7,
      name: "IP 15",
      price: 1098,
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "img",
    },
    {
      id: 8,
      name: "IP 15",
      price: 1224,
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "img",
    },
  ];
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="Home">
      <header className="header">
        <div className="header_info">
          <h1>NHÓM LỤM</h1>
          <h2>Trang wed bán hàng online uy tín </h2>
          <p>Chúc anh chị em 8386</p>
          <div className="header_button">
            <Link to="/Login" className="login">
              LOGIN
            </Link>
            <Link to="/SingIn" className="login">
              SIGN IN
            </Link>
          </div>
        </div>
      </header>
      <main className="main">
        <div className="main_search">
          <div className="search_text">
            <h1>DANH SÁCH SẢN PHẨM</h1>
            <h2>Các món hàng dưới đây là lí min tịt</h2>
          </div>
          <div className="search_button">
            <input
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search_in"
            ></input>
            <input
              type="submit"
              placeholder="Search"
              className="search_sub"
            ></input>
          </div>
        </div>
        <div className="main_products">
          {filteredProducts.length > 0 ? (
            products.map((product) => (
              <div key={product.id} className="main_product">
                <div
                  style={{ backgroundImage: `${product.image}` }}
                  className="product"
                >
                  <div className="product_min">
                    <h2>{product.name}</h2>
                    <p>{product.des}</p>
                    <Link to="/Des" className="main_cart">
                      ${product.price}
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h2>KHÔNG TÌM THẤY SẢN PHẨM</h2>
          )}
        </div>
      </main>
      <footer className="footer"></footer>
    </div>
  );
}
export default Home;
