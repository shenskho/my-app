import StatCard from "../components/StatCard";
import TaskCounter from "../components/TaskCounter";
function DashboardPage() {
  const stats = [
     {
    id: 1,
    title: "Projects",
    value: 12,
    description: "Active projects",
  },
  {
    id: 2,
    title: "Tasks",
    value: 48,
    description: "Total tasks",
  },
  {
    id: 3,
    title: "Users",
    value: 8,
    description: "Team members",
  },
  ];
  return (
    <div className="main-content">
      <h1>داشبورد مدیریت پروژه</h1>
      <p>این متن یک تست برای صفحه اصلی می باشد</p>
      <div className="stats-grid">
        {stats.map((stat) => {
         return(
           <StatCard
            key={stat.id}
            title={stat.title}
            value={stat.value}
            description={stat.description}
          />
         )
        })}
      </div>
       <TaskCounter />
    </div>
  );
}
export default DashboardPage;
