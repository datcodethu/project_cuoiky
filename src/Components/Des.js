import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams(); // Lấy id sản phẩm từ URL
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://672c05c31600dda5a9f70d59.mockapi.io/datit/product/${id}`
        );
        const data = await response.json();
        setProduct(data); // Lưu sản phẩm vào state
      } catch (error) {
        console.error("Lỗi khi lấy chi tiết sản phẩm:", error);
      }
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    navigate("/Cart");
  };

  // Kiểm tra nếu chưa có dữ liệu sản phẩm
  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-detail">
      <div className="product-container">
        <div className="product-images">
          <div className="main-image">
            <img src={product.avatar} alt="Main Product" />
          </div>
          <div className="sub-images">
            {[product.avatar, product.avatar, product.avatar].map(
              (image, index) => (
                <div className="sub-image" key={index}>
                  <img src={image} alt={`Sub Image ${index + 1}`} />
                </div>
              )
            )}
          </div>
        </div>
        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="price">${product.price}</p>
          <p className="rating">
            4.5/5 <span className="stars">★★★★☆</span>{" "}
            <a href="#" className="description-link">
              {product.des}
            </a>
          </p>

          <div className="color-options">
            <p>Colors</p>
            <div className="color-box pink"></div>
            <div className="color-box red"></div>
            <div className="color-box yellow"></div>
            <div className="color-box grey"></div>
          </div>

          <div className="size-options">
            <p>Sizes</p>
            <div className="size-box">
              Small <span>120 by 18 inches</span>
            </div>
            <div className="size-box">
              Medium <span>150 by 18 inches</span>
            </div>
          </div>

          <button className="add-to-cart" onClick={handleAddToCart}>
            ADD TO CART
          </button>
          <button className="buy-now">BUY NOW</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
