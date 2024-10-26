const Products = () => {
  const products = [
    {
      name: "Apple",
      price: 12,
      img: "https://cdn.pixabay.com/photo/2022/09/16/16/09/harvest-7458975_1280.jpg",
    },
    {
      name: "Banana",
      price: 8,
      img: "https://cdn.pixabay.com/photo/2018/09/24/20/12/bananas-3700718_1280.jpg",
    },
    {
      name: "Orange",
      price: 10,
      img: "https://cdn.pixabay.com/photo/2019/11/19/13/10/fruit-4637398_1280.jpg",
    },
    {
      name: "Grapes",
      price: 15,
      img: "https://cdn.pixabay.com/photo/2016/10/17/09/25/vines-1747224_1280.jpg",
    },
    {
      name: "Carrot",
      price: 5,
      img: "https://cdn.pixabay.com/photo/2016/11/23/00/22/carrots-1851424_1280.jpg",
    },
    {
      name: "Broccoli",
      price: 6,
      img: "https://cdn.pixabay.com/photo/2023/01/25/18/46/broccoli-7744338_1280.jpg",
    },
    {
      name: "Spinach",
      price: 4,
      img: "https://cdn.pixabay.com/photo/2016/01/07/07/57/vegetables-1125420_1280.jpg",
    },
    {
      name: "Tomato",
      price: 7,
      img: "https://cdn.pixabay.com/photo/2019/08/27/18/16/tomatoes-4434850_1280.jpg",
    },
    {
      name: "Bell pepper",
      price: 9,
      img: "https://cdn.pixabay.com/photo/2014/10/22/21/54/bell-peppers-499068_1280.jpg",
    },
    {
      name: "Milk",
      price: 3,
      img: "https://cdn.pixabay.com/photo/2017/09/22/21/35/milk-2777165_1280.jpg",
    },
    {
      name: "Cheese",
      price: 12,
      img: "https://cdn.pixabay.com/photo/2018/06/08/23/30/cheese-3463368_960_720.jpg",
    },
    {
      name: "Chicken",
      price: 15,
      img: "https://cdn.pixabay.com/photo/2020/01/12/20/21/chicken-4761000_1280.jpg",
    },
    {
      name: "Beef",
      price: 20,
      img: "https://cdn.pixabay.com/photo/2018/02/08/15/02/meat-3139641_1280.jpg",
    },
    {
      name: "Bread",
      price: 3,
      img: "https://cdn.pixabay.com/photo/2022/09/10/17/27/loaf-7445434_1280.jpg",
    },
    {
      name: "Pasta",
      price: 4,
      img: "https://cdn.pixabay.com/photo/2016/04/02/15/13/noodle-1303003_1280.jpg",
    },
    {
      name: "Quinoa",
      price: 10,
      img: "https://cdn.pixabay.com/photo/2021/06/16/14/31/quinoa-6341421_1280.jpg",
    },
    {
      name: "Nuts",
      price: 12,
      img: "https://cdn.pixabay.com/photo/2016/10/13/22/52/walnuts-1739021_1280.jpg",
    },
    {
      name: "Ice cream",
      price: 8,
      img: "https://cdn.pixabay.com/photo/2020/03/01/22/06/ice-cream-4894276_1280.jpg",
    },
    {
      name: "Pie",
      price: 14,
      img: "https://cdn.pixabay.com/photo/2020/08/11/13/58/apple-pie-5479993_1280.jpg",
    },
    {
      name: "Coffee",
      price: 4,
      img: "https://cdn.pixabay.com/photo/2014/08/22/21/25/coffee-424763_1280.jpg",
    },
    {
      name: "Beer",
      price: 5,
      img: "https://cdn.pixabay.com/photo/2018/05/06/08/49/beer-3378136_1280.jpg",
    },
    {
      name: "Wine",
      price: 20,
      img: "https://cdn.pixabay.com/photo/2017/06/16/10/32/wine-2408620_1280.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-card gap-4">
      {products.map((product, index) => (
        <div
          key={index}
          className="product-card border rounded-md shadow-md cursor-pointer select-none"
        >
          <div className="product-img">
            <img
              src={product.img}
              alt="product"
              className="h-28 object-cover w-full rounded-t-md"
            ></img>
          </div>
          <div className="product-info flex flex-col items-center py-1">
            <span>{product.name}</span>
            <span>{product.price} Ft</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
