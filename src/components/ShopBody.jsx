import "../styles/ShopBody.css";
import FilterComponent from "./FilterComponent";
import PlantCard from "./PlantCard";
import Cart from "./Cart";
import { useState } from "react";

const plantsData = [
  {
    id: 1,
    img_url:
      "https://s3-alpha-sig.figma.com/img/7f2f/202e/8727d5c56cfb3c198d22126a4beff904?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ifpNWSzVN1CWEKZLHC-BBJl8YfKYtCXDoyyQ0g6eARjYVxDGmKLBaJLr-~7oAwpMSCLOyvrrbEtNFmEUK~qTtqGhz0MGDZx-K-u0t6vih4P6y2jgLNLsjzp1YQ6klfe7Jb9LoXXvlKMmsM-jElxCG97zwenxKOMhfMQg5AgkkOkL06QzspAWGkDpddVDKkWsdfSe2TUuxQpGsdY8oYMcmteekheNfZh4quRqpizFTbiBUWdMGdpEo5XgUv3TAlXMnXssThwUwQrbyIjEFkqiJf28aV-Jmzir5oWXSu7cNViq3ogMQp2d~iuc6qz23gzyvOlX80XyxTvcJWOSWajxOQ__",
    name: "Snake Plant",
    price: 350,
  },
  {
    id: 2,
    img_url:
      "https://s3-alpha-sig.figma.com/img/7f2f/202e/8727d5c56cfb3c198d22126a4beff904?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ifpNWSzVN1CWEKZLHC-BBJl8YfKYtCXDoyyQ0g6eARjYVxDGmKLBaJLr-~7oAwpMSCLOyvrrbEtNFmEUK~qTtqGhz0MGDZx-K-u0t6vih4P6y2jgLNLsjzp1YQ6klfe7Jb9LoXXvlKMmsM-jElxCG97zwenxKOMhfMQg5AgkkOkL06QzspAWGkDpddVDKkWsdfSe2TUuxQpGsdY8oYMcmteekheNfZh4quRqpizFTbiBUWdMGdpEo5XgUv3TAlXMnXssThwUwQrbyIjEFkqiJf28aV-Jmzir5oWXSu7cNViq3ogMQp2d~iuc6qz23gzyvOlX80XyxTvcJWOSWajxOQ__",
    name: "Spider Plant",
    price: 200,
  },
  {
    id: 3,
    img_url:
      "https://s3-alpha-sig.figma.com/img/7f2f/202e/8727d5c56cfb3c198d22126a4beff904?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ifpNWSzVN1CWEKZLHC-BBJl8YfKYtCXDoyyQ0g6eARjYVxDGmKLBaJLr-~7oAwpMSCLOyvrrbEtNFmEUK~qTtqGhz0MGDZx-K-u0t6vih4P6y2jgLNLsjzp1YQ6klfe7Jb9LoXXvlKMmsM-jElxCG97zwenxKOMhfMQg5AgkkOkL06QzspAWGkDpddVDKkWsdfSe2TUuxQpGsdY8oYMcmteekheNfZh4quRqpizFTbiBUWdMGdpEo5XgUv3TAlXMnXssThwUwQrbyIjEFkqiJf28aV-Jmzir5oWXSu7cNViq3ogMQp2d~iuc6qz23gzyvOlX80XyxTvcJWOSWajxOQ__",
    name: "Snake Plant",
    price: 350,
  },
  {
    id: 4,
    img_url:
      "https://s3-alpha-sig.figma.com/img/7f2f/202e/8727d5c56cfb3c198d22126a4beff904?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ifpNWSzVN1CWEKZLHC-BBJl8YfKYtCXDoyyQ0g6eARjYVxDGmKLBaJLr-~7oAwpMSCLOyvrrbEtNFmEUK~qTtqGhz0MGDZx-K-u0t6vih4P6y2jgLNLsjzp1YQ6klfe7Jb9LoXXvlKMmsM-jElxCG97zwenxKOMhfMQg5AgkkOkL06QzspAWGkDpddVDKkWsdfSe2TUuxQpGsdY8oYMcmteekheNfZh4quRqpizFTbiBUWdMGdpEo5XgUv3TAlXMnXssThwUwQrbyIjEFkqiJf28aV-Jmzir5oWXSu7cNViq3ogMQp2d~iuc6qz23gzyvOlX80XyxTvcJWOSWajxOQ__",
    name: "Snake Plant",
    price: 350,
  },
  {
    id: 5,
    img_url:
      "https://s3-alpha-sig.figma.com/img/7f2f/202e/8727d5c56cfb3c198d22126a4beff904?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ifpNWSzVN1CWEKZLHC-BBJl8YfKYtCXDoyyQ0g6eARjYVxDGmKLBaJLr-~7oAwpMSCLOyvrrbEtNFmEUK~qTtqGhz0MGDZx-K-u0t6vih4P6y2jgLNLsjzp1YQ6klfe7Jb9LoXXvlKMmsM-jElxCG97zwenxKOMhfMQg5AgkkOkL06QzspAWGkDpddVDKkWsdfSe2TUuxQpGsdY8oYMcmteekheNfZh4quRqpizFTbiBUWdMGdpEo5XgUv3TAlXMnXssThwUwQrbyIjEFkqiJf28aV-Jmzir5oWXSu7cNViq3ogMQp2d~iuc6qz23gzyvOlX80XyxTvcJWOSWajxOQ__",
    name: "Snake Plant",
    price: 350,
  },
  {
    id: 6,
    img_url:
      "https://s3-alpha-sig.figma.com/img/7f2f/202e/8727d5c56cfb3c198d22126a4beff904?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ifpNWSzVN1CWEKZLHC-BBJl8YfKYtCXDoyyQ0g6eARjYVxDGmKLBaJLr-~7oAwpMSCLOyvrrbEtNFmEUK~qTtqGhz0MGDZx-K-u0t6vih4P6y2jgLNLsjzp1YQ6klfe7Jb9LoXXvlKMmsM-jElxCG97zwenxKOMhfMQg5AgkkOkL06QzspAWGkDpddVDKkWsdfSe2TUuxQpGsdY8oYMcmteekheNfZh4quRqpizFTbiBUWdMGdpEo5XgUv3TAlXMnXssThwUwQrbyIjEFkqiJf28aV-Jmzir5oWXSu7cNViq3ogMQp2d~iuc6qz23gzyvOlX80XyxTvcJWOSWajxOQ__",
    name: "Snake Plant",
    price: 350,
  },
  {
    id: 7,
    img_url:
      "https://s3-alpha-sig.figma.com/img/7f2f/202e/8727d5c56cfb3c198d22126a4beff904?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ifpNWSzVN1CWEKZLHC-BBJl8YfKYtCXDoyyQ0g6eARjYVxDGmKLBaJLr-~7oAwpMSCLOyvrrbEtNFmEUK~qTtqGhz0MGDZx-K-u0t6vih4P6y2jgLNLsjzp1YQ6klfe7Jb9LoXXvlKMmsM-jElxCG97zwenxKOMhfMQg5AgkkOkL06QzspAWGkDpddVDKkWsdfSe2TUuxQpGsdY8oYMcmteekheNfZh4quRqpizFTbiBUWdMGdpEo5XgUv3TAlXMnXssThwUwQrbyIjEFkqiJf28aV-Jmzir5oWXSu7cNViq3ogMQp2d~iuc6qz23gzyvOlX80XyxTvcJWOSWajxOQ__",
    name: "Snake Plant",
    price: 350,
  },
  {
    id: 8,
    img_url:
      "https://s3-alpha-sig.figma.com/img/7f2f/202e/8727d5c56cfb3c198d22126a4beff904?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ifpNWSzVN1CWEKZLHC-BBJl8YfKYtCXDoyyQ0g6eARjYVxDGmKLBaJLr-~7oAwpMSCLOyvrrbEtNFmEUK~qTtqGhz0MGDZx-K-u0t6vih4P6y2jgLNLsjzp1YQ6klfe7Jb9LoXXvlKMmsM-jElxCG97zwenxKOMhfMQg5AgkkOkL06QzspAWGkDpddVDKkWsdfSe2TUuxQpGsdY8oYMcmteekheNfZh4quRqpizFTbiBUWdMGdpEo5XgUv3TAlXMnXssThwUwQrbyIjEFkqiJf28aV-Jmzir5oWXSu7cNViq3ogMQp2d~iuc6qz23gzyvOlX80XyxTvcJWOSWajxOQ__",
    name: "Snake Plant",
    price: 350,
  },
  {
    id: 9,
    img_url:
      "https://s3-alpha-sig.figma.com/img/7f2f/202e/8727d5c56cfb3c198d22126a4beff904?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ifpNWSzVN1CWEKZLHC-BBJl8YfKYtCXDoyyQ0g6eARjYVxDGmKLBaJLr-~7oAwpMSCLOyvrrbEtNFmEUK~qTtqGhz0MGDZx-K-u0t6vih4P6y2jgLNLsjzp1YQ6klfe7Jb9LoXXvlKMmsM-jElxCG97zwenxKOMhfMQg5AgkkOkL06QzspAWGkDpddVDKkWsdfSe2TUuxQpGsdY8oYMcmteekheNfZh4quRqpizFTbiBUWdMGdpEo5XgUv3TAlXMnXssThwUwQrbyIjEFkqiJf28aV-Jmzir5oWXSu7cNViq3ogMQp2d~iuc6qz23gzyvOlX80XyxTvcJWOSWajxOQ__",
    name: "Snake Plant",
    price: 350,
  },
];

export default function ShopBody() {
  const [isCartVisible, setCartVisible] = useState(false);

  const handleShowCart = () => {
    setCartVisible(true);
  };

  const handleCloseCart = () => {
    setCartVisible(false);
  };

  return (
    <div className="shop-body-container">
      <div className="shop-sort-section">
        <div className="shop-sort-bar">
          <p>Sort By</p>
          <div className="shop-sort-options">
            <p>
              <b>Popular</b>
            </p>
            <img
              src="https://icons.veryicon.com/png/o/miscellaneous/information-domain-security-cloud-network/chevron_down-1.png"
              alt="down-chevron"
              className="shop-sort-chevron"
            />
          </div>
        </div>
        <div className="shop-product-count">
          <p>Showing {plantsData.length} products</p>
        </div>
      </div>
      <div className="shop-content">
        <div className="shop-filters">
          <FilterComponent name="All Categories" />
          <FilterComponent name="Price" />
          <FilterComponent name="Include" />
        </div>
        <div className="shop-plant-grid">
          {plantsData.map((plant) => (
            <PlantCard
              key={plant.id}
              id={plant.id}
              img_url={plant.img_url}
              name={plant.name}
              price={plant.price}
              onBuy={handleShowCart}
            />
          ))}
        </div>
      </div>
      {isCartVisible && <Cart onClose={handleCloseCart} />}
    </div>
  );
}
