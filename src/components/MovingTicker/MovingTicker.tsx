import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import { fetchCompanies } from '../../api/fetchCompanies'
import { Company } from '../../types/type'
import { ERROR_COLOR, SUCCESS_COLOR } from '../../constants/color'

const MovingTicker: React.FC = () => {
  const [companies, setCompanies] = useState<Company[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCompanies('') // Fetch all companies
      if (data) {
        setCompanies(data)
      }
    }
    fetchData()
  }, [])

  return (
    <Box
      sx={{
        height: '40px',
        display: 'flex',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        backgroundColor: 'background.paper',
        width: '100%',
        padding: '8px 0',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          animation: 'marquee 20s linear infinite',
          '@keyframes marquee': {
            '0%': { transform: 'translateX(0%)' },
            '100%': { transform: 'translateX(-50%)' },
          },
        }}
      >
        {/* Duplicate the companies array to create a seamless effect */}
        {[...companies, ...companies].map((company, index) => (
          <Box key={index} sx={{ display: 'flex', marginRight: 3 }}>
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
              {company.id}
            </Typography>
            <Typography variant="body1" sx={{ ml: 1 }}>
              {company.currentPrice.toFixed(2)}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                ml: 1,
                color: company.changePercent >= 0 ? SUCCESS_COLOR : ERROR_COLOR,
              }}
            >
              {company.changePercent.toFixed(2)}%
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default MovingTicker
