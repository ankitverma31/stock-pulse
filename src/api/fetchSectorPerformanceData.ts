import sectorsData from '../store/sectors.json'
import { Sector } from '../types/type'

/**
 * Fetches the performance data for various sectors.
 *
 * @returns {Promise<Sector[]>} A promise that resolves to an array of Sector objects.
 */
export const fetchSectorPerformanceData = async (): Promise<Sector[]> => {
  return sectorsData
}
