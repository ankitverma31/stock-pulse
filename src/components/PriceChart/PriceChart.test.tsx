import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { fetchHistoricalData } from '../../api/fetchHistoricalDataById'
import { vi, describe, it, beforeEach } from 'vitest'
import PriceChart from './PriceChart'
import { TEXT_CONSTANTS } from '../../constants/text'

const { PRICE_CHART } = TEXT_CONSTANTS

vi.mock('../../api/fetchHistoricalDataById', () => ({
  fetchHistoricalData: vi.fn(),
}))

vi.mock('../loaders/PriceChartLoader', () => ({
  default: () => <div>Loading...</div>,
}))

const mockData = {
  daily: [{ date: '2023-01-01', open: 145, high: 155, low: 140, close: 150, volume: 1000 }],
  weekly: [{ date: '2023-01-01', open: 145, high: 155, low: 140, close: 150, volume: 1000 }],
  monthly: [{ date: '2023-01-01', open: 145, high: 155, low: 140, close: 150, volume: 1000 }],
  yearly: [{ date: '2023-01-01', open: 145, high: 155, low: 140, close: 150, volume: 1000 }],
}

beforeAll(() => {
  global.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
})

describe('PriceChart', () => {
  beforeEach(() => {
    vi.mocked(fetchHistoricalData).mockImplementation(async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000)) // Simulating network delay
      return mockData
    })
  })

  it('renders no data message when no stock data is available', async () => {
    vi.mocked(fetchHistoricalData).mockResolvedValueOnce(null)
    render(<PriceChart id="AAPL" />)
    await waitFor(() => expect(screen.getByText(PRICE_CHART.NO_DATA)).toBeInTheDocument())
  })

  it('renders the chart with data', async () => {
    render(<PriceChart id="AAPL" />)
    await waitFor(() => expect(screen.getByText('AAPL Price Chart (1D)')).toBeInTheDocument(), { timeout: 5000 })
  })

  it('changes time frame when button is clicked', async () => {
    render(<PriceChart id="AAPL" />)
    await waitFor(() => expect(screen.getByText('AAPL Price Chart (1D)')).toBeInTheDocument(), { timeout: 10000 })
    fireEvent.click(screen.getByText('1M'))
    expect(screen.getByText('AAPL Price Chart (1M)')).toBeInTheDocument()
  })
})
