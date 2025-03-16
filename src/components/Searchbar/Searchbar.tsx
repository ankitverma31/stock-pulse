import { Autocomplete, Chip, debounce, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { Company } from '../../types/type'
import { fetchCompanies } from '../../api/fetchCompanies'
import { memo, useCallback, useState } from 'react'
import { ROUTES } from '../../constants/route'

const Searchbar: React.FC = () => {
  const navigate = useNavigate()
  const [options, setOptions] = useState<Company[] | null>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>('')

  const onCompanyClick = useCallback(
    (id: string) => {
      const company = options?.find((option) => option.id === id)
      setInputValue(company?.name || inputValue)
      setOptions([])
      navigate(`${ROUTES.COMPANY_DETAIL}/${id}`)
    },
    [inputValue, navigate, options],
  )

  const handleSearch = useCallback(
    debounce(async (value: string) => {
      if (value.trim().length > 0) {
        try {
          setLoading(true)
          const response = await fetchCompanies(value)
          setOptions(response)
        } catch (error) {
          console.error('Error fetching company data:', error)
          setOptions([])
        } finally {
          setLoading(false)
        }
      } else {
        setOptions([])
      }
    }, 300),
    [],
  )

  return (
    <Autocomplete
      size="small"
      openOnFocus={false}
      open={loading || options === null || options.length > 0}
      clearOnBlur={false}
      sx={{ width: 300, borderRadius: 1 }}
      noOptionsText="No companies found"
      filterOptions={(x) => x}
      autoComplete
      loading={loading}
      getOptionLabel={(option) => option.name}
      options={options || []}
      inputValue={inputValue}
      autoHighlight
      onInputChange={(_, value) => {
        setInputValue(value)
        handleSearch(value)
      }}
      renderInput={(params) => <TextField {...params} placeholder="Search for a company" />}
      renderOption={(props, option) => (
        <li {...props} key={option.id} onClick={() => onCompanyClick(option.id)}>
          <Chip label={option.id} size="small" sx={{ mr: 1 }} /> {option.name}
        </li>
      )}
    />
  )
}

export default memo(Searchbar)
