import stocks from '../store/stocks.json'
import { Company } from '../types/type'

const data = JSON.stringify(stocks)

/**
 * Fetches a list of companies based on the provided query.
 *
 * This function simulates an asynchronous fetch operation by introducing a delay of 1 second.
 * It then filters the list of companies based on whether the company's ID or name includes the query string (case-insensitive).
 *
 * @param {string} query - The search query to filter companies by ID or name.
 * @returns {Promise<Company[] | null>} - A promise that resolves to an array of filtered companies if any match the query, or null if no matches are found.
 */
export const fetchCompanies = async (query: string): Promise<Company[] | null> => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const companies: Company[] = JSON.parse(data)
  const filteredCompanies = companies.filter(
    (company) => company.id.toLowerCase().includes(query.toLowerCase()) || company.name.toLowerCase().includes(query.toLowerCase()),
  )
  return filteredCompanies.length > 0 ? filteredCompanies : null
}
