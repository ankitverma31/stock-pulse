import { ButtonGroup, Card, CardContent, Skeleton } from '@mui/material'

const PriceChartLoader: React.FC = () => {
  return (
    <Card sx={{ margin: 'auto', padding: 2 }}>
      <CardContent>
        <Skeleton variant="text" width={200} height={30} />
        <ButtonGroup fullWidth sx={{ justifyContent: 'space-between' }}>
          {['1D', '1M', '1Y', '5Y'].map((time, index) => (
            <Skeleton
              key={time}
              variant="rectangular"
              width="100%"
              height={36}
              sx={{
                flex: 1,
                marginLeft: index === 0 ? 0 : '4px',
                marginRight: index === 3 ? 0 : '4px',
              }}
            />
          ))}
        </ButtonGroup>
        <Skeleton variant="rectangular" width="100%" height={400} sx={{ marginTop: 2 }} />
      </CardContent>
    </Card>
  )
}

export default PriceChartLoader
