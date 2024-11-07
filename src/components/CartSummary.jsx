import { useDispatch, useSelector } from "react-redux";
import { Button, Modal } from "antd";
import {
  ClearOutlined,
  DeleteOutlined,
  MinusOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import {
  addItem,
  clearItem,
  removeItem,
  resetCart,
} from "../features/cartSlice";

const CartSummary = () => {
  const dispatch = useDispatch();
  const { items, subTotal, taxRate, totalAmount } = useSelector(
    (state) => state.cart
  );

  const handleResetCart = () => {
    Modal.confirm({
      title: "Are you sure you want to reset the cart?",
      content: "All items will be removed from your cart.",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk: () => {
        dispatch(resetCart());
      },
    });
  };

  return (
    <div className="cart h-full max-h-[calc(100vh_-_5.5rem)] min-h-[400px] mb-20 py-4 md:pt-0 md:pb-2 flex flex-col">
      <div className="bg-navy text-gray-100 p-4">
        <h2 className="font-bold tracking-wide">Grocery Cart </h2>
      </div>
      <div className="cart-items px-4 py-2 overflow-y-auto">
        {items.length === 0 ? (
          <div className="flex justify-center items-center h-full">
            <p className="text-lg text-gray-500 my-2">Your cart is empty</p>
          </div>
        ) : (
          <ul className="flex flex-col gap-y-2">
            {items.map((item) => (
              <li key={item._id} className="cart-item flex justify-between">
                <div className="flex items-center">
                  <div className="relative group">
                    <img
                      src={item.img}
                      alt="product-img"
                      className="w-16 h-16 object-cover rounded group-hover:opacity-50"
                    />
                    <button
                      className="absolute top-0 right-0 text-black p-1 w-16 h-16 text-2xl opacity-0 group-hover:opacity-80 transition-opacity"
                      onClick={() => dispatch(clearItem(item))}
                      aria-label="Remove item"
                    >
                      <DeleteOutlined />
                    </button>
                  </div>
                  <div className="flex flex-col ml-2">
                    <b>{item.title}</b>
                    <span>{item.price * item.quantity} Ft</span>
                    <span className="text-xs text-gray-500">
                      Price per unit: {item.price} Ft
                    </span>
                  </div>
                </div>
                <div className="flex items-center">
                  <Button
                    className="rounded-full"
                    icon={<MinusOutlined />}
                    size="small"
                    onClick={() => dispatch(removeItem(item))}
                  ></Button>
                  <span className="mx-2">{item.quantity}</span>
                  <Button
                    className="rounded-full"
                    icon={<PlusOutlined />}
                    size="small"
                    onClick={() => dispatch(addItem(item))}
                  ></Button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="cart-totals mt-auto px-4 flex flex-col gap-4">
        <div className="flex flex-col">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>
              {subTotal === 0
                ? "0 HUF"
                : new Intl.NumberFormat("hu-HU", {
                    style: "currency",
                    currency: "HUF",
                  }).format(subTotal)}
            </span>
          </div>
          <div className="flex justify-between text-red">
            <span>VAT %{taxRate * 100}</span>
            <span>
              {subTotal * taxRate === 0
                ? "0 HUF"
                : "+" +
                  new Intl.NumberFormat("hu-HU", {
                    style: "currency",
                    currency: "HUF",
                  }).format(subTotal * taxRate)}
            </span>
          </div>
          <div className="flex justify-between text-xl border-t mt-2 pt-2">
            <b>Total</b>
            <span>
              {new Intl.NumberFormat("hu-HU", {
                style: "currency",
                currency: "HUF",
              }).format(totalAmount)}
            </span>
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
            onClick={() => handleResetCart()}
          >
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
