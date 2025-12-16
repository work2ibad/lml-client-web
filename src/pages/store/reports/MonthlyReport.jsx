import React from "react";
import { Card, Box, Typography, MenuItem, Select } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const MonthlyReport = ({ data }) => {
    return (
        <Card
            sx={{
                p: 3,
                borderRadius: 3,
                border: "1px solid #E5E7EB",
            }}
            elevation={0}
        >
            {/* Header */}
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={3}
            >
                <Typography fontWeight={600} fontSize={18}>
                    Monthly Earnings Report
                </Typography>

                <Select size="small" value="months">
                    <MenuItem value="months">Show by months</MenuItem>
                </Select>
            </Box>

            {/* Chart */}
            <Box height={300}>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Bar
                            dataKey="Earning"
                            fill="#7C3AED"
                            barSize={10}
                            radius={[8, 8, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </Box>
        </Card>
    );
};

export default MonthlyReport;