// import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

// const COLORS = [
//   "#007bff",
//   "#20c997",
//   "#ffc107",
//   "#fd7e14",
//   "#6f42c1",
//   "#e83e8c",
//   "#17a2b8",
//   "#343a40",
// ];

// const RADIAN = Math.PI / 180;
// const renderCustomizedLabel = ({
//   cx,
//   cy,
//   midAngle,
//   innerRadius,
//   outerRadius,
//   percent,
//   name,
// }) => {
//   if (percent === 0) return null;

//   const radius = innerRadius + (outerRadius - innerRadius) * 1.2;
//   const x = cx + radius * Math.cos(-midAngle * RADIAN);
//   const y = cy + radius * Math.sin(-midAngle * RADIAN);

//   return (
//     <text
//       x={x}
//       y={y}
//       fill="#fff"
//       textAnchor={x > cx ? "start" : "end"}
//       dominantBaseline="central"
//       style={{ fontSize: "12px", fontWeight: "bold" }}
//     >
//       {`${name}`}
//     </text>
  
//   );
// };

// const Chart = ({ data }) => {
//   // Optional: remove 0% items for cleaner chart
//   const filteredData = data.filter((d) => d.value > 0);

//   return (
//     <ResponsiveContainer width="100%" height={300}>
//       <PieChart>
//         <Pie
//           data={filteredData}
//           cx="50%"
//           cy="50%"
//           outerRadius={100}
//           dataKey="value"
//           labelLine={false}
//           label={renderCustomizedLabel}
//         >
//           {filteredData.map((_, index) => (
//             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            
//           ))}
//         </Pie>
        
//         <Tooltip formatter={(value) => `${value}%`} />
//       </PieChart>
//     </ResponsiveContainer>
//   );
// };

// export default Chart;


import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#20c997", "#00bfff", "#8a2be2", "#ffa500"]; // Food, Bills, Travel, Entertainment

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  if (percent === 0) return null;

  const radius = innerRadius + (outerRadius - innerRadius) * 1.2;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill={COLORS[index]}
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      style={{ fontWeight: "bold", fontSize: "13px" }}
    >
      {`${data[index].name} ${Math.round(percent * 100)}%`}
    </text>
  );
};

const data = [
  { name: "Food", value: 48 },
  { name: "Bills", value: 41 },
  { name: "Travel", value: 5 },
  { name: "Entertainment", value: 5 },
];

const Chart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={100}
          dataKey="value"
          labelLine={false}
          label={renderCustomizedLabel}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => `${value}%`} />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default Chart;
