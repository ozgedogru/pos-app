import { Button, Carousel, Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const { username, email, password } = values;
      const res = await axios.post(
        process.env.REACT_APP_SERVER_URL + "/api/auth/register",
        {
          username,
          email,
          password,
        }
      );
      console.log(res.data);
      if (res.status === 200) {
        message.success("Registration successful! Please log in.");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-screen flex">
      <div className="flex flex-col justify-center w-full md:w-1/3 min-h-1/2 px-10 xl:px-20 bg-beige">
        <h1 className="text-center text-5xl font-bold mb-10">LOGO</h1>
        <Form
          name="registration"
          layout="vertical"
          onFinish={onFinish}
          initialValues={{ remember: true }}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please enter your username" }]}
          >
            <Input
              className="bg-beige border-none shadow-lg"
              placeholder="Enter your username"
            />
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
            <Input
              className="bg-beige border-none shadow-lg"
              placeholder="Enter your email"
            />
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
            <Input.Password
              className="bg-beige border-none shadow-lg"
              placeholder="Enter your password"
            />
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
            <Input.Password
              className="bg-beige border-none shadow-lg"
              placeholder="Confirm your password"
            />
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
              src="https://cdn.pixabay.com/photo/2017/07/31/19/27/coffee-2560260_1280.jpg"
              alt="Carousel 1"
            />
            <div className="absolute top-20 left-20 w-8/12 text-beige font-semibold rounded-3xl p-4">
              <p className="md:text-base">
                Manage your business effortlessly, whether on mobile or desktop!
                Log in to oversee your orders and performance, and stay focused
                on growth with accessible, real-time statistics.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              className="h-full w-full object-cover min-h-screen"
              src="https://cdn.pixabay.com/photo/2017/08/11/15/13/coffee-2631739_1280.jpg"
              alt="Carousel 2"
            />
            <div className="absolute bottom-16 left-20 w-3/4 text-beige font-semibold rounded-3xl p-4">
              <p className="text-sm md:text-base">
                Enhance your business with data-driven insights! Register today
                to manage orders seamlessly on all devices, while tracking your
                performance with detailed statistics.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              className="h-full w-full object-cover min-h-screen object-left"
              src="https://cdn.pixabay.com/photo/2017/08/11/14/03/coffee-beans-2631130_1280.jpg"
              alt="Carousel 3"
            />
            <div className="absolute top-10 left-[4rem] text-navy font-semibold rounded-3xl p-4">
              <p className="text-sm md:text-base text-right w-5/6">
                Create an account in just a few step and keep track of your
                business performance anytime, anywhere. With a responsive design
                and comprehensive order statistics, elevate your coffee house
                management!
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default RegisterPage;
