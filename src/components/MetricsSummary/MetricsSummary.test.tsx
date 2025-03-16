import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { vi } from 'vitest'
import MetricsSummary from './MetricsSummary'

vi.mock('../../store/sectors.json', () => ({
  default: [
    { marketCap: 1000000000000, peRatio: 15, dividendYield: 2 },
    { marketCap: 2000000000000, peRatio: 20, dividendYield: 3 },
  ],
}))

describe('MetricsSummary', () => {
  it('renders Market Overview title', () => {
    render(<MetricsSummary />)
    expect(screen.getByText('Market Overview')).toBeInTheDocument()
  })

  it('calculates and displays total market cap correctly', () => {
    render(<MetricsSummary />)
    expect(screen.getByText('$3.00T')).toBeInTheDocument()
  })

  it('calculates and displays average P/E ratio correctly', () => {
    render(<MetricsSummary />)
    expect(screen.getByText('17.50')).toBeInTheDocument()
  })

  it('calculates and displays average dividend yield correctly', () => {
    render(<MetricsSummary />)
    expect(screen.getByText('2.50%')).toBeInTheDocument()
  })
})
