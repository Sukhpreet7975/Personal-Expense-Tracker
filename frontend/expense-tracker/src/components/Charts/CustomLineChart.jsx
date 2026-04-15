import React from 'react'
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Area,
  AreaChart
} from 'recharts'

const CustomTooltip = ({ active, payload }) => {
  if (active && payload?.length) {
    const { category, amount } = payload[0].payload;

    return (
      <div className="bg-white shadow-md rounded-lg border p-2">
        <p className="text-xs font-semibold text-purple-800 mb-1">
          {category}
        </p>
        <p className="text-sm text-gray-600">
          Amount: <b>${amount}</b>
        </p>
      </div>
    );
  }
  return null;
};

const CustomLineChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#875cf5" stopOpacity={0.4} />
            <stop offset="95%" stopColor="#875cf5" stopOpacity={0} />
          </linearGradient>
        </defs>

        <CartesianGrid stroke="none" />
        <XAxis dataKey="x" tickFormatter={(value, index) => data[index]?.dateLabel } tick={{ fontSize: 12, fill: '#555' }} stroke="none" />
        <YAxis tick={{ fontSize: 12, fill: '#555' }} stroke="none" />
        <Tooltip content={CustomTooltip} />

        <Area
          type="monotone"
          dataKey="amount"
          stroke="#875cf5"
          fill="url(#incomeGradient)"
          strokeWidth={3}
          dot={{ r: 3, fill: '#ab8df8' }}
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default CustomLineChart
