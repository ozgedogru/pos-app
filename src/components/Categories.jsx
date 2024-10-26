const Categories = () => {
  const categories = [
    "All Products",
    "Fruits",
    "Vegetables",
    "Dairy Products",
    "Meats",
    "Desserts",
    "Non-Alcoholic Drinks",
    "Alcoholic Drinks",
  ];

  return (
    <div>
      <ul className="flex md:flex-col items-center md:font-semibold md:text-lg text-sm gap-2">
        {categories.map((category, index) => (
          <li key={index} className="category-item">
            <span>{category}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
