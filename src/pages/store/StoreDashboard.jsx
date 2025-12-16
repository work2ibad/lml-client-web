import { useState } from "react";

import { Box, Grid } from "@mui/material";
import StoreLayout from "../../layouts/UserLayout";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

import ReportCard from "./reports/ReportCard";
import MonthlyReport from "./reports/MonthlyReport";

export default function StoreDashboard() {

  const [data, setData] = useState({
    soldItems: "3,2423",
    totalCustomer: "1,202",
    totalEarning: "12000",
    itemAvailable: "45"
  })

  const [monthlyData, setMonthlyData] = useState([
    { month: "Oct 2024", Earning: 1200 },
    { month: "Nov 2024", Earning: 1800 },
    { month: "Dec 2024", Earning: 2500 },
    { month: "Jan 2025", Earning: 2100 },
    { month: "Feb 2025", Earning: 2300 },
    { month: "Mar 2025", Earning: 2800 },
  ]);

  return (
    <StoreLayout>
      <h2>Store Dashboard</h2>
      <p>View items, orders and statistics.</p>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <ReportCard
            value={data.soldItems}
            label="Total Items Sold"
            icon={ShoppingCartIcon}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <ReportCard
            value={data.totalCustomer}
            label="Total Customers"
            icon={PeopleIcon}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <ReportCard
            value={`$${data.totalEarning.toLocaleString()}`}
            label="Total Earning"
            icon={AttachMoneyIcon}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <ReportCard
            value={data.itemAvailable}
            label="Items Available"
            icon={Inventory2Icon}
          />
        </Grid>

        <Box mt={8} width="60%">
          <MonthlyReport data={monthlyData} />
        </Box>
      </Grid>
    </StoreLayout>
  );
}
