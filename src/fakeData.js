import item1 from "./logo/promo_2711_1641055549966.jpg";
import item2 from "./logo/promo_2713_1641056385647.jpg";
import item3 from "./logo/promo_2705_1641055184568.jpg";
import item4 from "./logo/promo_2708_1641055302491.jpg";
import item5 from "./logo/promo_2710_1641055420852.jpg";
import item6 from "./logo/promo_2720_1641056802015.jpg";
import item7 from "./logo/promo_2715_1641056583250.jpg";
import item8 from "./logo/promo_2714_1641056461025.jpg";
const products = [
  {
    id: "1",
    title: " Combo Burger Bò Phô Mai và Pepsi Cola Chai 390ml",
    price: "40.000đ",
    img: item1,
    discout: "-15%",
  },
  {
    id: "2",
    title: "  Combo 2 miếng Gà Rán và 01 7Up Chai 390ml",
    price: "55.000đ ",
    img: item2,
    discout: "-20%",
  },
  {
    id: "3",
    title: " Combo Burger Bò Phô Mai và 01 Pepsi Cola Chai 390ml",
    price: "40.000đ",
    img: item3,
    discout: "-15%",
  },
  {
    id: "4",
    title: " 03 Cold Brew Phúc Bồn Tử",
    price: "70.000đ",
    img: item4,
    discout: "-34%",
  },
  {
    id: "5",
    title: " 03 Trà Cold Brew Táo Quế",
    price: "70.000đ",
    img: item5,
    discout: "-34%",
  },
  {
    id: "6",
    title: "  Heo Xiên Nướng Mỡ Hành và 7Up 390ml Chai",
    price: "24.000đ",
    img: item6,
    discout: "-18%",
  },
  {
    id: "7",
    title: " Dưa Lưới Cắt Sẵn và Trà Tea Oolong Lemon 455ml",
    price: "30.000đ",
    img: item7,
    discout: "-17%",
  },
  {
    id: "8",
    title: "  Combo 5 miếng Gà Rán và 02 7Up Chai 390ml",
    price: "135.000đ",
    img: item8,
    discout: "-19%",
  },
];

export const getProductById = (id) => {
  const data = products.find((data) => data.id === id.id);
  return data;
};

export default products;
