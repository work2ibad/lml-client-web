import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { ENDPOINTS } from "../../api/endpoints";
import Loader from "../../components/common/Loader";
import UserLayout from "../../layouts/UserLayout";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Chip,
  Divider,
  Stack,
} from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CategoryIcon from "@mui/icons-material/Category";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";

export default function ItemDetails() {
  const { id } = useParams();
  const { data, loading } = useFetch(`${ENDPOINTS.ITEMS.ALL}/${id}`);

  if (loading) return <Loader />;

  return (
    <UserLayout>
      <Typography variant="h4" fontWeight={700} color="primary.main" mb={4}>
        {data.title}
      </Typography>

      <Grid container spacing={4}>
        {/* LEFT COLUMN: Details */}
        <Grid item xs={12} md={8}>
          <Card sx={{ mb: 4 }}>
            <CardContent>
              <Typography variant="h6" fontWeight={600} mb={2}>
                Description
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Typography color="text.secondary">{data.description}</Typography>
            </CardContent>
          </Card>

          <Card sx={{ mb: 4 }}>
            <CardContent>
              <Typography variant="h6" fontWeight={600} mb={2}>
                Pricing & Stock
              </Typography>
              <Divider sx={{ mb: 2 }} />

              <Stack direction="row" spacing={3} mb={2}>
                <Chip
                  icon={<CurrencyRupeeIcon />}
                  label={`Rental: ${data.dailyRate}`}
                  color="primary"
                  variant="outlined"
                />
                <Chip
                  icon={<CurrencyRupeeIcon />}
                  label={`Deposit: ${data.deposit}`}
                  color="secondary"
                  variant="outlined"
                />
                <Chip
                  icon={<Inventory2Icon />}
                  label={`Stock: ${data.unlimited ? "Unlimited" : data.stock}`}
                  color="success"
                  variant="outlined"
                />
              </Stack>
            </CardContent>
          </Card>

          <Card sx={{ mb: 4 }}>
            <CardContent>
              <Typography variant="h6" fontWeight={600} mb={2}>
                Category & Location
              </Typography>
              <Divider sx={{ mb: 2 }} />

              <Stack direction="row" spacing={3} mb={2}>
                <Chip
                  icon={<CategoryIcon />}
                  label={data.category || "N/A"}
                  color="info"
                  variant="outlined"
                />
                <Chip
                  icon={<LocationOnIcon />}
                  label={data.location || "N/A"}
                  color="warning"
                  variant="outlined"
                />
              </Stack>
            </CardContent>
          </Card>

          {data.videos?.length > 0 && (
            <Card sx={{ mb: 4 }}>
              <CardContent>
                <Typography variant="h6" fontWeight={600} mb={2}>
                  Videos
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Stack spacing={2}>
                  {data.videos.map((vid, i) => (
                    <video
                      key={i}
                      src={vid.url}
                      controls
                      width="100%"
                      style={{ borderRadius: 8 }}
                    />
                  ))}
                </Stack>
              </CardContent>
            </Card>
          )}
        </Grid>

        {/* RIGHT COLUMN: Images */}
        <Grid item xs={12} md={4}>
          <Card sx={{ mb: 4 }}>
            <CardContent>
              <Typography variant="h6" fontWeight={600} mb={2}>
                Images
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Stack spacing={2}>
                {data.images?.map((img, i) => (
                  <Box
                    key={i}
                    component="img"
                    src={img.url}
                    alt={`Product Image ${i + 1}`}
                    sx={{
                      width: "100%",
                      height: 250,
                      objectFit: "cover",
                      borderRadius: 2,
                    }}
                  />
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </UserLayout>
  );
}
