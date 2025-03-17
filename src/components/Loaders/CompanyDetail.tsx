import { Card, CardContent, Grid2, Skeleton, Typography } from '@mui/material'

const CompanyDetailLoader: React.FC = () => {
  return (
    <>
      {/* Skeleton Loader */}
      <Typography variant="h4" gutterBottom>
        <Skeleton width="60%" />
      </Typography>
      <Typography variant="body2" color="textSecondary" gutterBottom>
        <Skeleton width="40%" />
      </Typography>
      <Typography variant="h5" color="textPrimary" gutterBottom>
        <Skeleton width="30%" />
      </Typography>

      {/* Card Section */}
      <Card sx={{ marginTop: 2, padding: 2 }}>
        <CardContent>
          <Grid2 container spacing={2}>
            {/* First Row */}
            <Grid2 size={{ xs: 6, md: 4 }}>
              <Typography variant="subtitle1">
                <Skeleton width="80%" />
              </Typography>
              <Typography variant="body1">
                <Skeleton width="60%" />
              </Typography>
            </Grid2>
            <Grid2 size={{ xs: 6, md: 4 }}>
              <Typography variant="subtitle1">
                <Skeleton width="80%" />
              </Typography>
              <Typography variant="body1">
                <Skeleton width="60%" />
              </Typography>
            </Grid2>
            <Grid2 size={{ xs: 6, md: 4 }}>
              <Typography variant="subtitle1">
                <Skeleton width="80%" />
              </Typography>
              <Typography variant="body1">
                <Skeleton width="60%" />
              </Typography>
            </Grid2>

            {/* Second Row */}
            <Grid2 size={{ xs: 6, md: 4 }}>
              <Typography variant="subtitle1">
                <Skeleton width="80%" />
              </Typography>
              <Typography variant="body1">
                <Skeleton width="60%" />
              </Typography>
            </Grid2>
            <Grid2 size={{ xs: 6, md: 4 }}>
              <Typography variant="subtitle1">
                <Skeleton width="80%" />
              </Typography>
              <Typography variant="body1">
                <Skeleton width="60%" />
              </Typography>
            </Grid2>
            <Grid2 size={{ xs: 6, md: 4 }}>
              <Typography variant="subtitle1">
                <Skeleton width="80%" />
              </Typography>
              <Typography variant="body1">
                <Skeleton width="60%" />
              </Typography>
            </Grid2>

            {/* Third Row */}
            <Grid2 size={{ xs: 6, md: 4 }}>
              <Typography variant="subtitle1">
                <Skeleton width="80%" />
              </Typography>
              <Typography variant="body1">
                <Skeleton width="60%" />
              </Typography>
            </Grid2>
            <Grid2 size={{ xs: 6, md: 4 }}>
              <Typography variant="subtitle1">
                <Skeleton width="80%" />
              </Typography>
              <Typography variant="body1">
                <Skeleton width="60%" />
              </Typography>
            </Grid2>
            <Grid2 size={{ xs: 6, md: 4 }}>
              <Typography variant="subtitle1">
                <Skeleton width="80%" />
              </Typography>
              <Typography variant="body1">
                <Skeleton width="60%" />
              </Typography>
            </Grid2>
          </Grid2>
        </CardContent>
      </Card>
    </>
  )
}

export default CompanyDetailLoader
