import historicalData from '../store/historical_data.json'
import { HistoricalDataByCompany } from '../types/type'

/**
 * Fetches historical data for a given company ID.
 *
 * @param {string} id - The ID of the company to fetch historical data for.
 * @returns {Promise<HistoricalDataByCompany | null>} A promise that resolves to the historical data of the company, or null if no data is found.
 *
 * @example
 * const data = await fetchHistoricalData('AAPL');
 * if (data) {
 *   console.log('Historical data:', data);
 * } else {
 *   console.log('No data found for the given ID.');
 * }
 */
export const fetchHistoricalData = async (id: string): Promise<HistoricalDataByCompany | null> => {
  await new Promise((resolve) => setTimeout(resolve, 3000)) // Simulating network delay

  const stockData = historicalData[id as keyof typeof historicalData]
  if (!stockData) {
    console.error(`No historical data found for ID: ${id}`)
    return null
  }

  return stockData as HistoricalDataByCompany
}
