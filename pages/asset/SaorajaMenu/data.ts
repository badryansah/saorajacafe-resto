import Cemilan from "./Cemilan.jpg";
import DrinkIce from "./Drink ice.jpg";
import Makanan from "./Makanan.jpg";
import Minuman from "./minuman.jpg";

export interface MenuItem {
  id: number;
  name: string;

  price: number;
  image: StaticImageData;
}

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Makanan",

    price: 25000,
    image: Makanan,
  },
  {
    id: 2,
    name: "Aneka Minuman Segar",

    price: 15000,
    image: Minuman,
  },
  {
    id: 3,
    name: "Aneka Moctail Segar",

    price: 18000,
    image: DrinkIce,
  },
  {
    id: 4,
    name: "Cemilan",

    price: 12000,
    image: Cemilan,
  },
];
