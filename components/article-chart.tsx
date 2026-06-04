'use client'

import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend,
  LineChart, Line, CartesianGrid,
} from 'recharts'

type ChartType = 'bar' | 'pie' | 'line'

interface DataPoint {
  name: string
  value: number
  color?: string
}

interface ArticleChartProps {
  type: ChartType
  data: DataPoint[]
  title?: string
}

const COLORS = ['#1a365d', '#38a169', '#2563eb', '#dc2626', '#ca8a04', '#8b5cf6']

export function ArticleChart({ type, data, title }: ArticleChartProps) {
  return (
    <div className="my-8 p-4 bg-muted/30 rounded-xl border border-border/60">
      {title && (
        <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
          {title}
        </h3>
      )}
      <ResponsiveContainer width="100%" height={300}>
        {type === 'bar' ? (
          <BarChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="#64748b" />
            <YAxis tick={{ fontSize: 12 }} stroke="#64748b" />
            <Tooltip
              formatter={(value) =>
                Number(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
              }
            />
            <Bar dataKey="value" radius={[4, 4, 0, 0]}>
              {data.map((_, i) => (
                <Cell key={i} fill={data[i].color || COLORS[i % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        ) : type === 'pie' ? (
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label={({ name, percent }) =>
                `${name} ${((percent ?? 0) * 100).toFixed(0)}%`
              }
            >
              {data.map((_, i) => (
                <Cell key={i} fill={data[i].color || COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value) =>
                Number(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
              }
            />
            <Legend />
          </PieChart>
        ) : (
          <LineChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="#64748b" />
            <YAxis tick={{ fontSize: 12 }} stroke="#64748b" />
            <Tooltip
              formatter={(value) =>
                Number(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
              }
            />
            <Line type="monotone" dataKey="value" stroke="#1a365d" strokeWidth={2} dot={{ fill: '#1a365d' }} />
          </LineChart>
        )}
      </ResponsiveContainer>
    </div>
  )
}
