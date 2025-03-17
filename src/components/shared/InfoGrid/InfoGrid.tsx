import React from 'react'
import Typography from '@mui/material/Typography'
import { Grid2 } from '@mui/material'

type DataItem = {
  label: string
  value: string | number
}
type InfoGridProps = {
  data: DataItem[]
}
const InfoGrid: React.FC<InfoGridProps> = ({ data }) => {
  return (
    <Grid2 container spacing={2}>
      {data.map((item, index) => (
        <Grid2 key={index} size={{ xs: 6, md: 4 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
            {item.label}
          </Typography>
          <Typography variant="body1">{item.value}</Typography>
        </Grid2>
      ))}
    </Grid2>
  )
}
export default InfoGrid
