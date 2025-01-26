import "../styles/Recommendation.css";
import PlantCard from "./PlantCard";
import { useState } from "react";
import Cart from "../components/Cart";

export default function Recommendation() {
  const [isCartVisible, setCartVisible] = useState(false);

  const handleShowCart = () => {
    setCartVisible(true);
  };

  const handleCloseCart = () => {
    setCartVisible(false);
  };
  const plantsData = [
    {
      id: 200,
      img_url:
        "https://s3-alpha-sig.figma.com/img/4034/92a9/f63167c9c6e0a2a5e4f3eab087bc4c2a?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CD65WgPeHb7Po4qe8ojm9HSedf41LxmNhOXLrnaYuvMygarjMdgLBkW43qhRst9msI8KssFIPTtlbZk-agl0tiCc4E9NFLOcnslASM8wa-KNgkd7jZVNmbtSqZ1~hkV~mUVs0DvdcWWcAQP1mOiuRz6kPAmzNeopPH3pXBQ8~WJM~cUZRvyZXe5SJUJazZ07hI1y~bfs1xB65B3A0L0yxB0QNAluwXaPHRxeezAkP6fzVrGFRP62xCfRVZlvHeMTFhkOfbT6p2P4cE6mTNsK8jXb7K5JvDzvk48E4G9arolohsovayZiGix9UH8IdYVMmwTV-2xX3zSiSgQtwB2FZg__",
      name: "String of Hearts",
      price: 350,
      description:
        "A beautiful trailing plant with heart-shaped leaves, perfect for hanging baskets.",
    },
    {
      id: 202,
      img_url:
        "https://s3-alpha-sig.figma.com/img/64d0/ac5b/118c1b60aba7876fa839ce161e060113?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BmgHEs193KbdoKtEbVJSsQ2G7ZGxJ-PPifQlgHtaZA6g3WHNQeznAhD-mFkZubKTpVXdxXghJ4eVZJ2g3cikw39sYZCr--97U9s5N-awKXeAxGE7wPSnqJu5JBOMdbofCYcq-JU5zuL5ChK-1C3gt5Dw3XDSrtoau6bGPzVc4UFm7kbrVFKTatszRp4CWYs3Oa2rvko2PEiWfOgbl0C5ZWg9jHaLNnSKQzUqZtE8N1RfxpuWzeAXVMZcEuNf27iXcHFhHvZw1Cw8hgo4Dj-xN9TZKxpryt-g-jHisXHmwNTqghQt67-BGcaMytXzacFfc59~gZH5qaSLawA8XpfiiA__",
      name: "Red Secret Alocasia",
      price: 350,
      description:
        "An exotic plant with stunning red leaves, adding a touch of elegance to any space.",
    },
    {
      id: 203,
      img_url:
        "https://s3-alpha-sig.figma.com/img/d490/2406/0c64a3a05748ace3bd07458f1618979b?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FDaTRvYoKZR0oe6H8P3ue4c1~0opWg9n7ui8~2W6Zdbm2DCC-kqtEjltKtJn9hZuk7gIOIa1jdCIb1Ze0oYJwV-jQfInsDILXFXH8t9JIYpZWUpyVFSszjp2VBO8LKZO7LmmyLiTQnU8cazkqNvLhK-bk5TEvqQdZsPGjgCBTZZoJ231iDzcLaTijZeUmD4Vh-C~vip9iSfwwKl4hn2iPuxz01EWC5b71SdYAw-1CfRuuWwVjAdafBwABRtj~uInTI4e3TVmegF7QI9cKHTjkJx7q7ZZs2Q~C6a9TNGi-SlJey8OXQjNUR3cecJMRKJPevJhoQxWIWLFU~pZAoDFlg__",
      name: "Jewel Alocasia",
      price: 350,
      description:
        "A rare plant with jewel-like leaves, perfect for plant collectors and enthusiasts.",
    },
    {
      id: 204,
      img_url:
        "https://s3-alpha-sig.figma.com/img/5627/d845/8deb852af8b81607aca11939c1a509d9?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IVzIRtRcoeuMabFW-XurX1plXkBjZP~ntJZIew4~malszlBbJjPBNx1-4WJfqpJODjyWBe8uXzkWYvlp~UNNUyPxUEA7FvqTtTl2bUJ9DPeP1oxyTszGooJyVhjg5G7UfZZZuVrlLKjnGu90CEIB~Zg~DXG0Um5YCgPIpb9M-R67LyFnSGb~w0DkiMGzA8hHYnprmFAlbwJDovBUYYpc1jiJDvvnHRtYOVsvHCPPw8TvKVsHzHXQ-gAMM9l9egZIpRzN6P6ghq01KrKKgI5C1jXfaJvMXfY8MjPtNY7uy7kSY0fttKajOYAgZx9rNiEjwA92cqJnaijmM4HWIJJc5g__",
      name: "SpiderPlant",
      price: 350,
      description:
        "A low-maintenance plant with long, arching leaves, ideal for beginners.",
    },
  ];

  return (
    <div className="recommendation-container">
      <div className="recommendation-header">
        <h1>
          <span>You'll love </span>these too...
        </h1>
      </div>
      <div className="recommendation-grid">
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
      {isCartVisible && <Cart onClose={handleCloseCart} />}
    </div>
  );
}
