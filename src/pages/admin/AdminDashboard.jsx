import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Stack,
  Button,
  LinearProgress,
} from "@mui/material";
import AdminLayout from "../../layouts/AdminLayout";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PeopleIcon from "@mui/icons-material/People";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";

const KpiCard = ({ title, value, trend, color }) => (
  <Card sx={{ borderRadius: 0, height: "100%" }}>
    <CardContent>
      <Typography fontSize={13} color="text.secondary">
        {title}
      </Typography>

      <Typography variant="h5" fontWeight={700} mt={1}>
        {value}
      </Typography>

      <Stack direction="row" spacing={1} alignItems="center" mt={1}>
        <TrendingUpIcon fontSize="small" color={color} />
        <Typography fontSize={13} color={`${color}.main`}>
          {trend}
        </Typography>
      </Stack>

      <Button size="small" sx={{ mt: 2 }}>
        Details
      </Button>
    </CardContent>
  </Card>
);

const ActionCard = ({ icon, title, description, buttonText, color, link }) => (
  <Card sx={{ height: "100%" }}>
    <CardContent>
      <Stack direction="row" spacing={2} alignItems="center" mb={2}>
        <Box
          sx={{
            width: 48,
            height: 48,
            bgcolor: `${color}.light`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {icon}
        </Box>
        <Typography fontWeight={600}>{title}</Typography>
      </Stack>

      <Typography color="text.secondary" mb={3}>
        {description}
      </Typography>

      <Button
        variant="contained"
        color={color}
        fullWidth
        href={link}
      >
        {buttonText}
      </Button>
    </CardContent>
  </Card>
);

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <Box sx={{ p: 3 }}>
        {/* HEADER */}
        <Typography variant="h4" fontWeight={700} mb={3} color="primary.main">
          Dashboard
        </Typography>

        {/* KPI ROW */}
        <Grid container spacing={3} mb={4}>
          <Grid item xs={12} md={4}>
            <KpiCard
              title="Total Sales"
              value="$350K"
              trend="+10.4%"
              color="success"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <KpiCard
              title="Total Orders"
              value="10.7K"
              trend="+14.4%"
              color="success"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <KpiCard
              title="Pending & Canceled"
              value="603"
              trend="-14.4%"
              color="error"
            />
          </Grid>
        </Grid>

        {/* MAIN CONTENT */}
        <Grid container spacing={4}>
          {/* WEEKLY REPORT */}
          <Grid item xs={12} md={8}>
            <Card>
              <CardContent>
                <Typography fontWeight={600} mb={2}>
                  Report for this week
                </Typography>

                <Grid container spacing={3} mb={3}>
                  <Grid item xs={4}>
                    <Typography fontWeight={700}>52k</Typography>
                    <Typography fontSize={13} color="text.secondary">
                      Customers
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography fontWeight={700}>3.5k</Typography>
                    <Typography fontSize={13} color="text.secondary">
                      Products
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography fontWeight={700}>250k</Typography>
                    <Typography fontSize={13} color="text.secondary">
                      Revenue
                    </Typography>
                  </Grid>
                </Grid>

                <Box
                  sx={{
                    height: 220,
                    bgcolor: "grey.100",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Weekly Sales Chart
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* RIGHT PANEL */}
          <Grid item xs={12} md={4}>
            <Card sx={{ mb: 4 }}>
              <CardContent>
                <Typography fontWeight={600}>
                  Users in last 30 minutes
                </Typography>
                <Typography variant="h5" fontWeight={700} mt={1}>
                  21.5K
                </Typography>

                <Box mt={3}>
                  <LinearProgress
                    variant="determinate"
                    value={70}
                    sx={{ height: 8 }}
                  />
                </Box>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography fontWeight={600} mb={2}>
                  Sales by Country
                </Typography>

                {[
                  { country: "United States", value: "30k", percent: 80 },
                  { country: "Brazil", value: "30k", percent: 65 },
                  { country: "Australia", value: "25k", percent: 55 },
                ].map((item) => (
                  <Box key={item.country} mb={2}>
                    <Stack direction="row" justifyContent="space-between">
                      <Typography fontSize={14}>{item.country}</Typography>
                      <Typography fontSize={14} fontWeight={600}>
                        {item.value}
                      </Typography>
                    </Stack>
                    <LinearProgress
                      variant="determinate"
                      value={item.percent}
                      sx={{ height: 6 }}
                    />
                  </Box>
                ))}

                <Button fullWidth sx={{ mt: 2 }}>
                  View Insight
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* MANAGEMENT SECTION */}
        <Grid container spacing={4} mt={4}>
          <Grid item xs={12} md={6}>
            <ActionCard
              title="User Management"
              description="View, block or manage platform users."
              buttonText="Manage Users"
              icon={<PeopleIcon color="primary" />}
              color="primary"
              link="/admin/users"
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <ActionCard
              title="Complaint Management"
              description="Review and resolve reported complaints."
              buttonText="View Complaints"
              icon={<ReportProblemIcon color="error" />}
              color="error"
              link="/admin/complaints"
            />
          </Grid>
        </Grid>
      </Box>
    </AdminLayout>
  );
}
