import { render, screen } from '@testing-library/react'
import { vi, describe, it, beforeEach } from 'vitest'
import { BrowserRouter } from 'react-router-dom'
import Searchbar from './Searchbar'
import { TEXT_CONSTANTS } from '../../constants/text'

const { SEARCHBAR } = TEXT_CONSTANTS

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
    expect(screen.getByPlaceholderText(SEARCHBAR.SEARCH_PLACEHOLDER)).toBeInTheDocument()
  })
})
