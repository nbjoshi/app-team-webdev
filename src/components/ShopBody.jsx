import "../styles/ShopBody.css";

export default function ShopBody() {
  return (
    <div className="main-body">
      <div className="sort">
        <div className="search">
          <p>Sort By</p>
          <p>Popular</p>
        </div>
        <div className="item-number">
          <p>Showing 1003 products</p>
        </div>
      </div>
      <div className="shop"></div>
    </div>
  );
}
