import { Company } from '../types/type'
import stocks from '../store/stocks.json'

const data = JSON.stringify(stocks)

/**
 * Fetches a company by its ID.
 *
 * This function simulates an asynchronous fetch operation by introducing a delay of 1 second.
 * It then parses a JSON string containing an array of companies and searches for a company
 * with the specified ID. If the company is found, it is returned; otherwise, an error is thrown.
 *
 * @param companyId - The ID of the company to fetch.
 * @returns A promise that resolves to the company with the specified ID.
 * @throws An error if the company with the specified ID is not found.
 */

export const fetchCompanyById = async (companyId: string): Promise<Company> => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const companies: Company[] = JSON.parse(data)
  const company = companies.find((company) => company.id === companyId)
  if (!company) {
    throw new Error(`Failed to fetch company with id ${companyId}`)
  }
  return company
}
