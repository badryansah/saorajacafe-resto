import React, { useState } from "react";
import { menuItems } from "../../asset/SaorajaMenu/data";
import Image from "next/image";
import Link from "next/link";
const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Mendapatkan kategori unik untuk digunakan dalam tab
  const categories = [
    "all",
    ...new Set(menuItems.map((item) => item.category)),
  ];

  const filteredItems =
    selectedCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#722F37] text-white py-4 px-4 shadow-md">
        <h1 className="text-xl font-bold text-center">Menu Kami</h1>
      </div>

      {/* Category Tabs - Scrollable horizontal */}
      <div className="sticky top-0 z-10 bg-white shadow-md">
        <div className="overflow-x-auto py-3 flex items-center">
          <div className="flex space-x-2 px-4"></div>
        </div>
      </div>

      {/* Menu Grid - Only showing images and names */}
      <div className="px-4 py-6">
        <div className="grid grid-cols-2 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-3 text-center">
                <h3 className="text-sm font-medium text-gray-800">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
