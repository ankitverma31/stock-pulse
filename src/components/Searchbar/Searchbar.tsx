import { Autocomplete, Box, Chip, debounce, Stack, TextField, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { Company } from '../../types/type'
import { fetchCompanies } from '../../api/fetchCompanies'
import { memo, useCallback, useState } from 'react'
import { ROUTES } from '../../constants/route'
import { ERROR_COLOR, SUCCESS_COLOR } from '../../constants/color'

const Searchbar: React.FC = () => {
  const navigate = useNavigate()
  const [options, setOptions] = useState<Company[] | null>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>('')

  const onCompanyClick = useCallback(
    (id: string) => {
      setInputValue('')
      setOptions([])
      navigate(`${ROUTES.COMPANY_DETAIL}/${id}`)
    },
    [navigate],
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
      blurOnSelect
      size="small"
      disableClearable
      openOnFocus={false}
      open={loading || options === null || options.length > 0}
      clearOnBlur={true}
      sx={{ width: { xs: '100%', md: 500 }, borderRadius: 1 }}
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
          <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ width: '100%' }}>
            <Stack alignItems="start">
              <Typography variant="body1" sx={{ mb: 0.5 }}>
                {option.name}
              </Typography>
              <Chip label={option.id} size="small" />
            </Stack>
            <Box>
              <Typography variant="body1" color="text.secondary">
                ${option.currentPrice}
              </Typography>
              <Typography variant="body2" color={option.changePercent >= 0 ? SUCCESS_COLOR : ERROR_COLOR}>
                {option.changePercent}%
              </Typography>
            </Box>
          </Stack>
        </li>
      )}
    />
  )
}

export default memo(Searchbar)
