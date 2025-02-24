import { createContext } from "react";

export const PlantContext = createContext();

export const PlantProvider = ({ children }) => {
  const plantsData = [
    {
      id: 1,
      img_url:
        "https://s3-alpha-sig.figma.com/img/7f2f/202e/8727d5c56cfb3c198d22126a4beff904?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ifpNWSzVN1CWEKZLHC-BBJl8YfKYtCXDoyyQ0g6eARjYVxDGmKLBaJLr-~7oAwpMSCLOyvrrbEtNFmEUK~qTtqGhz0MGDZx-K-u0t6vih4P6y2jgLNLsjzp1YQ6klfe7Jb9LoXXvlKMmsM-jElxCG97zwenxKOMhfMQg5AgkkOkL06QzspAWGkDpddVDKkWsdfSe2TUuxQpGsdY8oYMcmteekheNfZh4quRqpizFTbiBUWdMGdpEo5XgUv3TAlXMnXssThwUwQrbyIjEFkqiJf28aV-Jmzir5oWXSu7cNViq3ogMQp2d~iuc6qz23gzyvOlX80XyxTvcJWOSWajxOQ__",
      name: "Marble Queen",
      price: 350,
      description:
        "A timeless beauty with elegant white and green marbled leaves. Perfect for adding a touch of sophistication to any space. Low-maintenance and ideal for beginners.",
    },
    {
      id: 2,
      img_url:
        "https://s3-alpha-sig.figma.com/img/ef7e/7b23/eed1e52486c1561b4de015d41663f66d?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YJhXN~WGLlDpPom5EsB19oH9kYazpY3Cjiw0P~S74SnDYoq9B1HMUI-VOcbu~4AnG3xI~h6lRd9kKvcz4hKTqTBdUpMzxZ2nxCDZlS-G0fvEzRAomvun-i2YR5oWQgR3mFWn05vw2To~jbrqM4z6YVDAlYnCW14Z3a1xCpscXo63mSxinXmHzhwR~dr241j0CqMGadWGVfK6n5kBAjDpWMQT3av9Yb0uf7H98qC3T5ysgeuIj4rGyug~MIVK12DtTqbf4BpP9vK9pNPqUP-kt8U~8E01rzmlC1NtwLe~iA~0r23vH6eTAkyUAwuRasQJwm0a2TDG3mqbkRTs6eW2sQ__",
      name: "Neon Pothos",
      price: 350,
      description:
        "Brighten your home with this vibrant plant! Its neon-green leaves are a statement piece, thriving even in low-light conditions. A great air purifier and conversation starter.",
    },
    {
      id: 3,
      img_url:
        "https://s3-alpha-sig.figma.com/img/a454/d497/e9d032b32bb60e1f2276a060934b383e?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kmIAK-DBbL2J1HmMje0A5ohJHiPko2wQ7xt2s-5wgPtXnIjtSRvhJ9pG9KVcO3PnctGwSesIEyT1wxDBhpy83hzKRljBn9PG1vub~gvqkrR7rEwXQM~-C1m303S3T1NG95Igh5vwzNTSK-GyP1-rAMoo9nFGa8fGq-o8KUj-MR~Cwo8X~gR7PMsvtSzEtaZiPN0uSCsc2ajDWlV7elZ728ylGqPY4gQ9H5YY-DhZeQNwnRywh7USm2AEAj7LlKmoTA4ueFFdW~n9iVa61oOtunFoWKPSt6~QPyBeIMmwTG8OZ2iiUmXShkQ4q3NagLnggdNk2SiK1fhsAFJMaPQPOQ__",
      name: "Syngonium Rayii",
      price: 350,
      description:
        "This striking plant features deep green, velvety leaves with a contrasting silver vein. Compact and easy to care for, it’s a favorite for desk or shelf displays.",
    },
    {
      id: 4,
      img_url:
        "https://s3-alpha-sig.figma.com/img/189c/61ef/f52981039e008f7f416960430939b583?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p6d5QIqqso7tZuSJykznbYyAbjqbJwPjrnsdQTYchpt4-VT531Np8V9tw8GxZrTVBwramPGXL8bYmxjERbz-I1e8u1oe5jzp1urXkhDmUvbUZDuiPLpn0Q3NPJ2gVxC3v87wnliHEuWGLth7TQbC8ZEBV9GBo42Cy8qdZ6rh7uH0f-kyUBCbe9XCIQUMszlqqpo6HWBegn0bn~HN2O~HzWhG0lftZXBaKvs5CVKrMt0PiyJEDA2toCk0ELNY2xuxHmKbcY3cUmk-R-xDKjbczYKNZv-BVMD-908PE~lJdqV4e1obeP0oiPLf3fEiFGnGr984jyfxrKiv6qGZA6U4VA__",
      name: "Pineapple",
      price: 350,
      description:
        "Bring a tropical vibe to your home! This playful plant showcases spiky green leaves and an exotic flair. It’s a fun addition to any indoor jungle.",
    },
    {
      id: 5,
      img_url:
        "https://s3-alpha-sig.figma.com/img/6ff7/9584/2a0e479fb4d896f76053b84ae9d01397?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E6RlXypcp9D-eqxUXE11Q7krnIeY9slIM4Exjp1nMQw5UiGGJKTqJr2FEpXxPbssFM9SRVsXG9Okel6UupJpbNzLcUtuAdcSrjS-ett1Glho3o0Js2VENE~~BojToe0kyzBjdgsQQbud-G5ZEDRCvHFfbwCXPKm0bG~hZXKA6uDz0whnfaWGlD3tqGIEwlAKZgUZAxt7g9A5NjevjJkEXUwywqkdY86uiY8zu3otkyoa1hjZ1GYv5WuqY~DLV4DMyRZ5Xh8KwBC7yTInYDNisviBuWYELkI4ezH0EGYz2Ghr9RD9iRJ~l2CuoH-Chw411bEsyQoNPe7P0HlxjWsTbQ__",
      name: "African Milk Tree",
      price: 350,
      description:
        "A unique cactus-like plant with upright stems and sharp edges. Known for its striking silhouette and resilience, it’s a perfect pick for plant enthusiasts.",
    },
    {
      id: 6,
      img_url:
        "https://s3-alpha-sig.figma.com/img/523b/f403/5f4f3c410ecfaf9a75ef3f74afc7bf78?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jSfIdVJqqea5C6WJMOpGL8ZJ6XiES8mwchgwSyLTWD3JEaY8IOqZoSreeBPeayRp6BkAkPcTWZaXQMEH0pA4Su1~ehbk6QyvO65ONJQcxHIkRNg0VWYWqOogY89P62TiagsbN4tYc8yqnmGrh8K~f0hnvIUTZpaooQphNOwcRGS5RwxaIRYUT11YxgMRaBLPFkiFbQ9ccLkZKX5ZvYvZWLw4rDsK6COnQCoAYgtciyDuhpzoHoym3Ncga9bFk8QwtohhgJMpzj1rbPds43DI2FdeXSRJQvovkjktpD-JbGyLPT-s4GEKOtmSGZW9WVqvcFv30lh9MUZ4IsZiWmhorA__",
      name: "Pothos",
      price: 350,
      description:
        "A classic favorite, known for its trailing vines and heart-shaped leaves. Incredibly versatile, this plant can climb or cascade, making it a decor dream.",
    },
    {
      id: 7,
      img_url:
        "https://s3-alpha-sig.figma.com/img/1e80/9935/3aed17333afe779d11644ae29785c5e7?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Lvuhf3Lqs35oDh51Oe1y8DRAWU8oODugRL~Xbgm0aM~gARrmUii7oE3kwdhnr7kQQvRldiXhSP5052m32--UWhK8Jne-HQ8bODxr-66YScFNS7Pl9VM64BSKcChtL5K8cm4~5IKNWmO7S94PzlgorADbWusJlS1V1ZVZJmPbMpywj5ag4OYQgLSkAKyP~WeHUjl5UtttiRHndXDDSlwnam9cPco2m2nPDkbNtU8TBsjpdjAeHdldhcI-i2mOMi9a7jakdgMcO1IuGj1sUo71PowTlippvYMDd3TgDyfY3rAnv1snCxkq~rTWPjXh9hLJ8cpUTyjVfapOVaWrtJzKmA__",
      name: "Chinese Evergreen",
      price: 350,
      description:
        "A plant of elegance and durability, featuring glossy, patterned leaves. It thrives in low-light areas and brings timeless charm to any indoor setting.",
    },
    {
      id: 8,
      img_url:
        "https://s3-alpha-sig.figma.com/img/a454/d497/e9d032b32bb60e1f2276a060934b383e?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kmIAK-DBbL2J1HmMje0A5ohJHiPko2wQ7xt2s-5wgPtXnIjtSRvhJ9pG9KVcO3PnctGwSesIEyT1wxDBhpy83hzKRljBn9PG1vub~gvqkrR7rEwXQM~-C1m303S3T1NG95Igh5vwzNTSK-GyP1-rAMoo9nFGa8fGq-o8KUj-MR~Cwo8X~gR7PMsvtSzEtaZiPN0uSCsc2ajDWlV7elZ728ylGqPY4gQ9H5YY-DhZeQNwnRywh7USm2AEAj7LlKmoTA4ueFFdW~n9iVa61oOtunFoWKPSt6~QPyBeIMmwTG8OZ2iiUmXShkQ4q3NagLnggdNk2SiK1fhsAFJMaPQPOQ__",
      name: "Syngonium Rayii",
      price: 350,
      description:
        "Once again, meet the Syngonium Rayii with its velvety dark-green leaves and striking silver veins. A compact plant that packs a visual punch.",
    },
    {
      id: 9,
      img_url:
        "https://s3-alpha-sig.figma.com/img/a6ff/c795/3ee712c1ee05b419de135abd2fec5397?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=awhaGi~HjCBcIwzrxxelQg8C-x-O~T1figyFH1day1mtaeMKp~-MDk3PLEoSEp35ut5RFnjPUdJfnzUMXreVCK5CDTTStnZEGSE9grwb8X4qQRn~rkoyr693AklHBwQEji2G-TQJLokIl2k~YL7o3EEstyf0MJjI1ouR8PNc7m9nxEUfu1yfdoihSLYi10yDRFXwFfNjyKiyXSzFMGpTQbJNmvLHTrcVW1wcQpvjMfelrUFiLl-dGbnbcgm7xuG7mLxHGz-8jXGKovYyAO6WbmYa9GYWfBnfz6DWl5~MPk4NPkbzQHCOG1~1r4Nc4RuaUkCZcQ2bUrRIY8QUmVgW-A__",
      name: "Peruvian Cactus",
      price: 350,
      description:
        "This tall, rugged cactus brings desert vibes to your home. Low-maintenance and visually striking, it’s a bold choice for modern and minimalistic spaces.",
    },
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

  const getPlantById = (id) => {
    return plantsData.find((plant) => plant.id === id) || null;
  };

  return (
    <PlantContext.Provider value={{ plantsData, getPlantById }}>
      {children}
    </PlantContext.Provider>
  );
};
