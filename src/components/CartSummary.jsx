import { Button } from "antd";
import { ClearOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";

const CartSummary = () => {
  return (
    <div className="cart h-full max-h-[calc(100vh_-_100px)] min-h-[400px] mb-20 py-4 md:pb-0 md:pt-0 flex flex-col">
      <div className="bg-navy text-gray-100 p-4">
        <h2 className="font-bold tracking-wide">Grocery Cart </h2>
      </div>
      <div className="cart-items px-4 py-2 overflow-y-auto">
        <ul className="flex flex-col gap-y-2">
          <li className="cart-item flex justify-between">
            <div className="flex items-center">
              <img
                src="https://cdn.pixabay.com/photo/2023/01/25/18/46/broccoli-7744338_1280.jpg"
                alt="product-img"
                className="w-16 h-16 object-cover rounded"
              ></img>
              <div className="flex flex-col ml-2">
                <b>Broccoli</b>
                <span>6 Ft x 2</span>
              </div>
            </div>
            <div className="flex items-center">
              <Button
                className="rounded-full"
                icon={<MinusOutlined />}
                size="small"
              ></Button>
              <span className="mx-2">2</span>
              <Button
                className="rounded-full"
                icon={<PlusOutlined />}
                size="small"
              ></Button>
            </div>
          </li>
        </ul>
      </div>
      <div className="cart-totals mt-auto px-4 flex flex-col gap-4">
        <div className="flex flex-col">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>99 HUF</span>
          </div>
          <div className="flex justify-between">
            <span>VAT %8</span>
            <span>+7.92 HUF</span>
          </div>
          <div className="flex justify-between text-xl border-t mt-2 pt-2">
            <b>Total</b>
            <span>106.92 HUF</span>
          </div>
        </div>
        <div className="buttons flex flex-col justify-center gap-1">
          <Button type="primary" className="bg-blue text-white font-semibold">
            Complete
          </Button>
          <Button
            type="danger"
            className="bg-red text-white font-semibold"
            icon={<ClearOutlined />}
          >
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
