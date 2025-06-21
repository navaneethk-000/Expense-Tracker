
const DashboardCard = ({
  title,
  amount,
  description,
  category,
  date,
  Icon,
  TextIcon,
  iconSize = 24,
}) => {
  return (
    <div className="bg-[var(--card-bg)] border w-full h-auto p-5 rounded-2xl flex justify-between items-start">
      <div>
        <h2>{title}</h2>
        <div className="flex items-center gap-1">
          <TextIcon size={18} />  
          <h1 className="text-2xl font-bold">{amount}</h1>
        </div>
        <p className="text-[var(--secondary-text-color)] text-sm">
          {category}
        </p>
      </div>
      <Icon size={iconSize} className="text-[var(--secondary-text-color)]"/>
    </div>
  );
};

export default DashboardCard;
