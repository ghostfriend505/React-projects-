import StatCard from "../components/StatCard"
import Chart from "../components/Chart"
import Table from "../components/Table"

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="stats">
        <StatCard title="Users" value="1,240" />
        <StatCard title="Orders" value="320" />
        <StatCard title="Revenue" value="$12,400" />
        <StatCard title="Growth" value="+12%" />
      </div>

      <Chart />
      <Table />
    </div>
  )
}
