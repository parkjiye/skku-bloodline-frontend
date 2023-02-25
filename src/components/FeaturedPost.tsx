import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

interface FeaturedPostProps {
  concert: {
    title: string;
    date: string;
    place: string;
    image: string;
  };
}

export default function FeaturedPost(props: FeaturedPostProps) {
  const { concert } = props;

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: "flex" }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {concert.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {concert.date}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {concert.place}
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            image={concert.image}
            sx={{
              width: 160,
              display: { xs: "none", sm: "block" },
              objectFit: "contain",
            }}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}
