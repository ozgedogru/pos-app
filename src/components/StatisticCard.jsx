import {
  AppstoreOutlined,
  MoneyCollectOutlined,
  ShoppingCartOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";

const statisticsData = [
  {
    title: "Total Customers",
    value: 150,
    icon: (
      <UserSwitchOutlined className="text-5xl md:text-6xl text-orange-700" />
    ),
  },
  {
    title: "Total Revenue",
    value: "2,500,000 HUF",
    icon: (
      <MoneyCollectOutlined className="text-5xl md:text-6xl text-orange-700" />
    ),
  },
  {
    title: "Total Sales",
    value: 300,
    icon: (
      <ShoppingCartOutlined className="text-5xl md:text-6xl text-orange-700" />
    ),
  },
  {
    title: "Total Products",
    value: 120,
    icon: <AppstoreOutlined className="text-5xl md:text-6xl text-orange-700" />,
  },
];

const StatisticCard = () => {
  return (
    <div className="statistic-cards grid grid-cols-2 md:grid-cols-4 my-6 gap-4">
      {statisticsData.map((stat, index) => (
        <div
          key={index}
          className="card-item bg-navy text-white p-4 md:px-6 md:py-8 rounded-md flex md:justify-evenly flex-wrap md:items-center justify-center"
        >
          <div>{stat.icon}</div>
          <div className="flex flex-col justify-center md:items-center text-center min-w-36">
            <p className="text-slate-400 text-sm md:text-lg">{stat.title}</p>
            <p className="md:text-xl font-bold">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatisticCard;
