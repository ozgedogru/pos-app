import { Button, Carousel, Form, Input } from "antd";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="h-screen flex">
      <div className="flex flex-col justify-center w-full md:w-1/3 min-h-1/2 px-10 xl:px-20">
        <h1 className="text-center text-5xl font-bold mb-10">LOGO</h1>
        <Form
          name="registration"
          layout="vertical"
          initialValues={{ remember: true }}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please enter your username" }]}
          >
            <Input placeholder="Enter your username" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter your email" },
              {
                type: "email",
                message: "Please enter a valid email address",
              },
            ]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Please enter your password" },
              { min: 6, message: "Password must be at least 6 characters" },
            ]}
            hasFeedback
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>
          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Please confirm your password" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Passwords do not match"));
                },
              }),
            ]}
            hasFeedback
          >
            <Input.Password placeholder="Confirm your password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              Register
            </Button>
          </Form.Item>
        </Form>
        <div>
          <p className="text-blue text-sm">
            Already have an account?{" "}
            <Link to="/login" className="hover:underline">
              Log in here.
            </Link>
          </p>
        </div>
      </div>

      <div className="hidden md:block w-2/3 bg-white">
        <Carousel autoplay>
          <div className="relative">
            <img
              className="h-full w-full object-cover min-h-screen"
              src="https://cdn.pixabay.com/photo/2021/04/21/02/52/baker-6195297_1280.png"
              alt="Carousel 1"
            />
            <div className="absolute bottom-20 left-20 text-beige rounded-3xl p-4">
              <p className="text-sm md:text-base w-56">
                Sweeten Your Day:
                <br /> Discover our delicious cakes, cookies, and desserts
                perfect for any occasion.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              className="h-full w-full object-cover min-h-screen"
              src="https://cdn.pixabay.com/photo/2021/10/20/01/02/grocery-6724884_1280.png"
              alt="Carousel 2"
            />
            <div className="absolute top-8 left-44 text-navy rounded-3xl p-4">
              <p className="text-sm md:text-base">
                Discover Fresh Produce: Quality ingredients sourced from local
                farmers for your daily meals.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              className="h-full w-full object-cover min-h-screen object-left"
              src="https://cdn.pixabay.com/photo/2022/03/25/01/57/online-shop-7090124_1280.png"
              alt="Carousel 3"
            />
            <div className="absolute top-20 left-[40rem] text-beige rounded-3xl p-4">
              <p className="text-sm md:text-base text-right w-56">
                Transform Your Kitchen:
                <br /> Find everything you need to create delightful meals and
                unforgettable moments.
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default RegisterPage;
