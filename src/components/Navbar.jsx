import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <>
      <header className="navbar">
        <div className="shipping-info">
          FREE SHIPPING ON ALL FULL SUN PLANTS! FEB. 25–28.
        </div>
      </header>
      <div className="header">
        <p className="logo-text">
          Green <span className="thumb">Thumb</span>
        </p>
        <ul className="tabs">
          <li>Home</li>
          <li>Products</li>
          <li>About us</li>
          <li>Contact us</li>
        </ul>
        <div className="shop">
          <form className="search-form">
            <input type="text" placeholder="Search" />
            <img
              src="https://s3-alpha-sig.figma.com/img/c728/b99b/183f3d952c521a71688d1430060742b2?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K~Ttq9JhExso~U5cBIwGXX9Se7lbaZMOpUl8XFz3bA0RniAsb6Eleg21CY~xg2t2y1jGhwJ618uUPv1TbgOf4b6EboU2orhaWwi2NmnXhiX27SXbSVK~AxZUxG2CJ5xT353u5Tq-BpCcs9kzo~jWYVYh0jQHmSIZUAgD35CT3XH7h5Ki0vCK52rsU9aKonycWvtzzE4zIxkL1qfeMXsi2xAKzM43KMpMJsrNNqjC7IdeYQ1MkFRIpqBaqp93wj9UmiVivsHQjRQSzOHw2RG2c1rRgrmWC6ejlIW9tcJfcbbbQnKkIBNBQ1V~tcVMEaHV9BmDFMy9OY02ibKDac-Acg__"
              alt="search"
              className="glass"
            />
          </form>
          <span className="divider"></span>
          <img
            src="https://www.svgrepo.com/show/43071/shopping-bag.svg"
            className="bag"
          />
          <p>2</p>
        </div>
      </div>
    </>
  );
}
