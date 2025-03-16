import { Card, CardContent, Typography, List, ListItem, ListItemText, Divider } from '@mui/material'
import watchlistsData from '../../store/watchlist.json'

const WatchlistsOverview = () => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Watch Lists
        </Typography>
        <Divider />
        <List>
          {watchlistsData.map((watchlist) => (
            <ListItem key={watchlist.id}>
              <ListItemText
                primary={watchlist.name}
                secondary={`Stocks: ${watchlist.stocks.length} | Updated: ${new Date(watchlist.updatedAt).toLocaleDateString()}`}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  )
}

export default WatchlistsOverview
