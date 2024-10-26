const Categories = () => {
  return (
    <div>
      <ul className="flex flex-col items-center font-semibold gap-2">
        <li className="bg-orange-700 text-white text-center w-full px-4 py-10 rounded-lg cursor-pointer hover:bg-orange-950 transition-all">
          <span>All Products</span>
        </li>
        <li className="bg-orange-700 text-white text-center w-full px-4 py-10 rounded-lg cursor-pointer hover:bg-orange-950 transition-all">
          <span>Fruits</span>
        </li>
        <li className="bg-orange-700 text-white text-center w-full px-4 py-10 rounded-lg cursor-pointer hover:bg-orange-950 transition-all">
          <span>Vegetables</span>
        </li>
        <li className="bg-orange-700 text-white text-center w-full px-4 py-10 rounded-lg cursor-pointer hover:bg-orange-950 transition-all">
          <span>Dairy Products</span>
        </li>
        <li className="bg-orange-700 text-white text-center w-full px-4 py-10 rounded-lg cursor-pointer hover:bg-orange-950 transition-all">
          <span>Meats</span>
        </li>
        <li className="bg-orange-700 text-white text-center w-full px-4 py-10 rounded-lg cursor-pointer hover:bg-orange-950 transition-all">
          <span>Desserts</span>
        </li>
        <li className="bg-orange-700 text-white text-center w-full px-4 py-10 rounded-lg cursor-pointer hover:bg-orange-950 transition-all">
          <span>Non-Alcoholic Drinks</span>
        </li>
        <li className="bg-orange-700 text-white text-center w-full px-4 py-10 rounded-lg cursor-pointer hover:bg-orange-950 transition-all">
          <span>Alcoholic Drinks</span>
        </li>
      </ul>
    </div>
  );
};

export default Categories;
