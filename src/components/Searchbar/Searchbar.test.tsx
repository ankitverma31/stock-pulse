import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { vi, describe, it, beforeEach } from 'vitest'
import { BrowserRouter } from 'react-router-dom'
import Searchbar from './Searchbar'
import { fetchCompanies } from '../../api/fetchCompanies'
import { Company } from '../../types/type'

vi.mock('../../api/fetchCompanies')

vi.mock('react-router-dom', async () => {
  const actual = await import('react-router-dom')
  return {
    ...actual,
    useNavigate: vi.fn(),
  }
})

describe('Searchbar', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders the Searchbar component', () => {
    render(
      <BrowserRouter>
        <Searchbar />
      </BrowserRouter>,
    )
    expect(screen.getByPlaceholderText('Search for a company')).toBeInTheDocument()
  })

  it('fetches and displays companies based on input', async () => {
    const companies: Company[] = [
      {
        id: '1',
        name: 'Company One',
        sector: '',
        industry: '',
        currentPrice: 0,
        change: 0,
        changePercent: 0,
        marketCap: 0,
        volume: 0,
        avgVolume: 0,
        pe: 0,
        eps: 0,
        dividend: 0,
        dividendYield: 0,
        beta: 0,
        yearHigh: 0,
        yearLow: 0,
      },
      {
        id: '2',
        name: 'Company Two',
        sector: '',
        industry: '',
        currentPrice: 0,
        change: 0,
        changePercent: 0,
        marketCap: 0,
        volume: 0,
        avgVolume: 0,
        pe: 0,
        eps: 0,
        dividend: 0,
        dividendYield: 0,
        beta: 0,
        yearHigh: 0,
        yearLow: 0,
      },
    ]

    vi.mocked(fetchCompanies).mockResolvedValueOnce(companies)

    render(
      <BrowserRouter>
        <Searchbar />
      </BrowserRouter>,
    )

    await fireEvent.change(screen.getByPlaceholderText('Search for a company'), {
      target: { value: 'Company' },
    })

    await waitFor(() => {
      expect(fetchCompanies).toHaveBeenCalledWith('Company')
      expect(screen.getByText('Company One')).toBeInTheDocument()
      expect(screen.getByText('Company Two')).toBeInTheDocument()
    })
  })

  it('displays no options text when no companies are found', async () => {
    vi.mocked(fetchCompanies).mockResolvedValueOnce(null)

    render(
      <BrowserRouter>
        <Searchbar />
      </BrowserRouter>,
    )

    await fireEvent.change(screen.getByPlaceholderText('Search for a company'), {
      target: { value: 'Unknown' },
    })

    await waitFor(() => {
      expect(fetchCompanies).toHaveBeenCalledWith('Unknown')
      expect(screen.getByText('No companies found')).toBeInTheDocument()
    })
  })
})
