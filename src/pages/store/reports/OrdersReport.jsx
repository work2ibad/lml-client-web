import {
    Pie,
    PieChart,
    Sector,
    ResponsiveContainer,
    Cell,
} from 'recharts';

const COLORS = {
    Completed: '#7C3AED',  // purple
    Pending: '#F59E0B',    // amber
    Cancelled: '#EF4444',  // red
    Returned: '#3B82F6',   // blue
};

const renderActiveShape = ({
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
}) => {
    return (
        <g>
            {/* Main active sector */}
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />

            {/* Outer highlight ring */}
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={fill}
            />

            {/* Center label */}
            <text
                x={cx}
                y={cy - 6}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#333"
                fontSize={14}
                fontWeight={500}
            >
                {payload.name}
            </text>

            <text
                x={cx}
                y={cy + 14}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#333"
                fontSize={13}
            >
                {value} ({(percent * 100).toFixed(2)}%)
            </text>
        </g>
    );
};

export default function CustomerReport( {data=[]} ) {
    return (
        <ResponsiveContainer width={280} height={280}>
            <PieChart margin={{ top: 20, right: 80, left: 80, bottom: 60 }}>
                <Pie
                    data={data}
                    cx="60%"
                    cy="60%"
                    innerRadius={65}
                    outerRadius={90}
                    activeShape={renderActiveShape}
                    dataKey="value"
                >
                    {data.map((entry) => (
                        <Cell
                            key={entry.name}
                            fill={COLORS[entry.name]}
                        />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
}