import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../App.css";

function Home() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://672d7fa3fd897971564299a4.mockapi.io/product"
        );
        let data = await response.json();

        data = data.sort(() => 0.5 - Math.random());

        setProducts(data.slice(0, 12));
      } catch (error) {
        console.error("Lỗi khi lấy sản phẩm:", error);
      }
    };

    fetchProducts();
  }, []);

  // Lọc sản phẩm theo từ khóa tìm kiếm
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="Home">
      <header className="header">
        <div className="header_info">
          <h1>NHÓM LỤM</h1>
          <h2>Trang web bán hàng online uy tín</h2>
          <p>Chúc anh chị em 8386</p>
          <div className="header_button">
            <Link to="/Login" className="login">
              LOGIN
            </Link>
            <Link to="/SignIn" className="login">
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
              placeholder="Search"
            />
            <input type="submit" value="Search" className="search_sub" />
          </div>
        </div>
        <div className="main_products">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                style={{ backgroundImage: `url(${product.avatar})`,
                         backgroundSize : '200px 200px',
                         backgroundRepeat : 'no-repeat'                   
                }}
                className="main_product"
              >
                <div className="product">
                  <div className="product_min">
                    <h2>{product.name}</h2>
                    <p>{product.des}</p>
                    <Link to={`/Des/${product.id}`} className="main_cart">
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
