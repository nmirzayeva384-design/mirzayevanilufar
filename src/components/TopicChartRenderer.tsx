import React from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { Language, TopicChart } from '../types';
import { tText, UI_TEXT } from '../i18n/ui';

interface TopicChartRendererProps {
  chart: TopicChart;
  lang: Language;
  isDark: boolean;
}

const PIE_COLORS = ['#10B981', '#0EA5E9', '#F59E0B', '#6366F1', '#14B8A6'];

export const TopicChartRenderer: React.FC<TopicChartRendererProps> = ({
  chart,
  lang,
  isDark,
}) => {
  const t = UI_TEXT[lang];

  const formattedData = chart.data.map((d) => ({
    name: typeof d.name === 'string' ? d.name : tText(d.name, lang),
    value: d.value,
    secondaryValue: d.secondaryValue,
  }));

  const axisColor = isDark ? '#94A3B8' : '#475569';
  const gridColor = isDark ? '#1E293B' : '#E2E8F0';
  const tooltipBg = isDark ? '#0F172A' : '#FFFFFF';
  const tooltipBorder = isDark ? '#334155' : '#CBD5E1';
  const tooltipText = isDark ? '#F8FAFC' : '#0F172A';

  const primarySeries = tText(chart.seriesName, lang);
  const secondarySeries = chart.secondarySeriesName
    ? tText(chart.secondarySeriesName, lang)
    : undefined;

  return (
    <div className="rounded-2xl bg-slate-50/80 dark:bg-[#0B1220]/70 border border-slate-200/90 dark:border-slate-800 p-5 sm:p-6 print-break-avoid">
      <div className="mb-4">
        <h4 className="text-base font-semibold text-slate-900 dark:text-white">
          {tText(chart.title, lang)}
        </h4>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
          {tText(chart.subtitle, lang)}
        </p>
      </div>

      <div className="h-64 sm:h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          {chart.type === 'area' ? (
            <AreaChart data={formattedData} margin={{ top: 10, right: 16, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id={`grad-${chart.id}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.35} />
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0.02} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
              <XAxis dataKey="name" tick={{ fill: axisColor, fontSize: 12 }} stroke={gridColor} />
              <YAxis tick={{ fill: axisColor, fontSize: 12 }} stroke={gridColor} />
              <Tooltip
                contentStyle={{
                  backgroundColor: tooltipBg,
                  borderColor: tooltipBorder,
                  borderRadius: '0.75rem',
                  color: tooltipText,
                  fontSize: '12px',
                }}
              />
              <Legend wrapperStyle={{ fontSize: '12px' }} />
              <Area
                type="monotone"
                dataKey="value"
                name={primarySeries}
                stroke="#10B981"
                strokeWidth={2.5}
                fill={`url(#grad-${chart.id})`}
              />
            </AreaChart>
          ) : chart.type === 'line' ? (
            <LineChart data={formattedData} margin={{ top: 10, right: 16, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
              <XAxis dataKey="name" tick={{ fill: axisColor, fontSize: 12 }} stroke={gridColor} />
              <YAxis tick={{ fill: axisColor, fontSize: 12 }} stroke={gridColor} />
              <Tooltip
                contentStyle={{
                  backgroundColor: tooltipBg,
                  borderColor: tooltipBorder,
                  borderRadius: '0.75rem',
                  color: tooltipText,
                  fontSize: '12px',
                }}
              />
              <Legend wrapperStyle={{ fontSize: '12px' }} />
              <Line
                type="monotone"
                dataKey="value"
                name={primarySeries}
                stroke="#10B981"
                strokeWidth={2.5}
                dot={{ r: 4, fill: '#10B981' }}
                activeDot={{ r: 6 }}
              />
              {secondarySeries && (
                <Line
                  type="monotone"
                  dataKey="secondaryValue"
                  name={secondarySeries}
                  stroke="#0EA5E9"
                  strokeWidth={2.5}
                  dot={{ r: 4, fill: '#0EA5E9' }}
                  activeDot={{ r: 6 }}
                />
              )}
            </LineChart>
          ) : chart.type === 'pie' ? (
            <PieChart>
              <Pie
                data={formattedData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={52}
                outerRadius={88}
                paddingAngle={3}
              >
                {formattedData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: tooltipBg,
                  borderColor: tooltipBorder,
                  borderRadius: '0.75rem',
                  color: tooltipText,
                  fontSize: '12px',
                }}
              />
              <Legend wrapperStyle={{ fontSize: '12px' }} />
            </PieChart>
          ) : (
            <BarChart data={formattedData} margin={{ top: 10, right: 16, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
              <XAxis dataKey="name" tick={{ fill: axisColor, fontSize: 11 }} stroke={gridColor} />
              <YAxis tick={{ fill: axisColor, fontSize: 12 }} stroke={gridColor} />
              <Tooltip
                contentStyle={{
                  backgroundColor: tooltipBg,
                  borderColor: tooltipBorder,
                  borderRadius: '0.75rem',
                  color: tooltipText,
                  fontSize: '12px',
                }}
              />
              <Legend wrapperStyle={{ fontSize: '12px' }} />
              <Bar dataKey="value" name={primarySeries} fill="#10B981" radius={[6, 6, 0, 0]} />
              {secondarySeries && (
                <Bar
                  dataKey="secondaryValue"
                  name={secondarySeries}
                  fill="#0EA5E9"
                  radius={[6, 6, 0, 0]}
                />
              )}
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>

      <div className="mt-3 pt-3 border-t border-slate-200/70 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
        <span>
          {t.sourceLabel}: {tText(chart.source, lang)}
        </span>
        <span className="font-mono-num">{chart.unit}</span>
      </div>
    </div>
  );
};
