import sectorsData from '../store/sectors.json'
import { Sector } from '../types/type'

export const fetchSectorPerformanceData = async (): Promise<Sector[]> => {
  return sectorsData
}
