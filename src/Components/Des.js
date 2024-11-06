import React from 'react';
import product1 from '../images/1.jpg'; // Đường dẫn hình ảnh

function ProductDetail() {
    return (
        <div className="product-detail">
            <div className="product-container">
                <div className="product-images">
                    <div className="main-image">
                        <img src={product1} alt="Avatar" />
                    </div>
                    <div className="sub-images">
                        <div className="sub-image"><img src={product1} alt="Sub Image 1" /></div>
                        <div className="sub-image"><img src={product1} alt="Sub Image 2" /></div>
                        <div className="sub-image"><img src={product1} alt="Sub Image 3" /></div>
                    </div>
                </div>
                <div className="product-info">
                    <h1>Name_product</h1>
                    <p className="price">$PRICE</p>
                    <p className="rating">4.5/5 <span className="stars">★★★★☆</span> <a href="#" className="description-link">Description</a></p>

                    <div className="color-options">
                        <p>Title</p>
                        <div className="color-box pink"></div>
                        <div className="color-box red"></div>
                        <div className="color-box yellow"></div>
                        <div className="color-box grey"></div>
                    </div>

                    <div className="size-options">
                        <p>Title</p>
                        <div className="size-box">Small <span>120 by 18 inches</span></div>
                        <div className="size-box">Medium <span>150 by 18 inches</span></div>
                    </div>

                    <button className="add-to-cart">ADD TO CART</button>
                    <button className="buy-now">BUY NOW</button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
