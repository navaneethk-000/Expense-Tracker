import { PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Food', value: 37 },
  { name: 'Bills', value: 50 },
  { name: 'Travel', value: 7 },
  { name: 'Entertainment', value: 7 },
];

const COLORS = ['#007bff', '#20c997', '#ffc107', '#fd7e14'];

const Chart = () => {
  return (
    <PieChart width={450} height={300}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={100}
        dataKey="value"
        label={({ name, value }) => `${name} ${value}%`}
      >
        {data.map((_, index) => (
          <Cell key={index} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default Chart;
