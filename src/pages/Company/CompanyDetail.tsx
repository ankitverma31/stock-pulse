import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchCompanyById } from '../../api/fetchCompanyById'
import { Company } from '../../types/type'
import { Box, Card, CardContent, Typography, Link } from '@mui/material'
import CompanyDetailLoader from '../../components/Loaders/CompanyDetailLoader'
import PriceChart from '../../components/PriceChart/PriceChart'
import { ERROR_COLOR, SUCCESS_COLOR } from '../../constants/color'
import useDocumentTitle from '../../hooks/useDocumentTitle'
import { APP_NAME } from '../../constants/text'
import InfoGrid from '../../components/shared/InfoGrid/InfoGrid'

const transformCompanyData = (company: Company) => [
  { label: 'ID', value: company.id },
  { label: 'Name', value: company.name },
  { label: 'Sector', value: company.sector },
  { label: 'Industry', value: company.industry },
  { label: 'Current Price', value: `$${company.currentPrice}` },
  { label: 'Change', value: company.change },
  { label: 'Change Percent', value: `${company.changePercent}%` },
  { label: 'Market Cap', value: `$${company.marketCap}B` },
  { label: 'Volume', value: company.volume },
  { label: 'Average Volume', value: company.avgVolume },
  { label: 'P/E Ratio', value: company.pe },
  { label: 'EPS', value: `$${company.eps}` },
  { label: 'Dividend', value: `$${company.dividend}` },
  { label: 'Dividend Yield', value: `${company.dividendYield}%` },
  { label: 'Beta', value: company.beta },
  { label: '52 Week High', value: `$${company.yearHigh}` },
  { label: '52 Week Low', value: `$${company.yearLow}` },
]

const CompanyDetail: React.FC = () => {
  const { id } = useParams<{ readonly id: string }>()
  const [company, setCompany] = useState<Company | null>(null)
  useDocumentTitle({ title: company?.name ? `${company.id} | ${company.name} - ${APP_NAME}` : APP_NAME })

  useEffect(() => {
    const fetchCompany = async (id: string) => {
      try {
        const companyData = await fetchCompanyById(id)
        setCompany(companyData)
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
    <>
      {company ? (
        <>
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
            <Typography component="span" variant="body1" color={company.changePercent >= 0 ? SUCCESS_COLOR : ERROR_COLOR}>
              ({company.changePercent}%)
            </Typography>
          </Typography>

          <Card sx={{ marginTop: 2, padding: 2 }}>
            <CardContent>
              <InfoGrid data={transformCompanyData(company)} />
            </CardContent>
          </Card>
        </>
      ) : (
        <CompanyDetailLoader />
      )}
      <Box sx={{ mt: 2 }}>
        <PriceChart id={id} />
      </Box>
    </>
  )
}

export default CompanyDetail
