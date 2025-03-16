import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchCompanyById } from '../../api/fetchCompanyById'
import { Company } from '../../types/type'
import { Box, Card, CardContent, Typography, Link, Grid2 } from '@mui/material'
import CompanyDetailLoader from '../../components/loaders/CompanyDetailLoader'
import PriceChart from '../../components/PriceChart/PriceChart'

const CompanyDetail: React.FC = () => {
  const { id } = useParams<{ readonly id: string }>()
  const [company, setCompany] = useState<Company | null>(null)

  useEffect(() => {
    const fetchCompany = async (id: string) => {
      try {
        const companyData = await fetchCompanyById(id)
        setCompany(companyData)
        console.log(companyData)
      } catch (error) {
        console.error('Error fetching company data:', error)
      }
    }

    if (id) {
      setCompany(null)
      fetchCompany(id)
    }
  }, [id])

  return (
    <Box sx={{ padding: 3 }}>
      {company ? (
        <>
          {/* Header Section */}
          <Typography variant="h4" gutterBottom>
            {company.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            <Link href={`https://${company.id.toLowerCase()}.com`} target="_blank">
              {company.id.toLowerCase()}.com
            </Link>{' '}
            | {company.id} | {company.sector}
          </Typography>
          <Typography variant="h5" color="textPrimary" gutterBottom>
            ${company.currentPrice}{' '}
            <Typography component="span" variant="body1" color={company.changePercent >= 0 ? 'green' : 'red'}>
              ({company.changePercent}%)
            </Typography>
          </Typography>

          {/* Card Section */}
          <Card sx={{ marginTop: 2, padding: 2 }}>
            <CardContent>
              <Grid2 container spacing={2}>
                {/* First Row */}
                <Grid2 size={{ xs: 6, md: 4 }}>
                  <Typography variant="subtitle1">Market Cap</Typography>
                  <Typography variant="body1">${company.marketCap} Cr</Typography>
                </Grid2>
                <Grid2 size={{ xs: 6, md: 4 }}>
                  <Typography variant="subtitle1">Current Price</Typography>
                  <Typography variant="body1">${company.currentPrice}</Typography>
                </Grid2>
                <Grid2 size={{ xs: 6, md: 4 }}>
                  <Typography variant="subtitle1">High / Low</Typography>
                  <Typography variant="body1">
                    ${company.yearHigh} / ${company.yearLow}
                  </Typography>
                </Grid2>

                {/* Second Row */}
                <Grid2 size={{ xs: 6, md: 4 }}>
                  <Typography variant="subtitle1">Stock P/E</Typography>
                  <Typography variant="body1">{company.pe}</Typography>
                </Grid2>
                <Grid2 size={{ xs: 6, md: 4 }}>
                  <Typography variant="subtitle1">Book Value</Typography>
                  <Typography variant="body1">${company.eps}</Typography>
                </Grid2>
                <Grid2 size={{ xs: 6, md: 4 }}>
                  <Typography variant="subtitle1">Dividend Yield</Typography>
                  <Typography variant="body1">{company.dividendYield}%</Typography>
                </Grid2>

                {/* Third Row */}
                <Grid2 size={{ xs: 6, md: 4 }}>
                  <Typography variant="subtitle1">ROCE</Typography>
                  <Typography variant="body1">{company.beta}%</Typography>
                </Grid2>
                <Grid2 size={{ xs: 6, md: 4 }}>
                  <Typography variant="subtitle1">ROE</Typography>
                  <Typography variant="body1">{company.dividendYield}%</Typography>
                </Grid2>
                <Grid2 size={{ xs: 6, md: 4 }}>
                  <Typography variant="subtitle1">Face Value</Typography>
                  <Typography variant="body1">${company.volume}</Typography>
                </Grid2>
              </Grid2>
            </CardContent>
          </Card>
        </>
      ) : (
        <CompanyDetailLoader />
      )}
      <Box sx={{ mt: 2 }}>
        <PriceChart id={id} />
      </Box>
    </Box>
  )
}

export default CompanyDetail
