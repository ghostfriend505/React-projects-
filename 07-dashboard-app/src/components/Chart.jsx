import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"
import { salesData } from "../data/mockData.js"

export default function Chart() {
  return (
    <div className="chart">
      <h3>Sales Overview</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={salesData}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="sales" stroke="#38bdf8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
