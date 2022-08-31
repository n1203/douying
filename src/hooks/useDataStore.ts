import { useState } from "react"

export const useDataStore = () => {
  const DashBoardDataKey = 'DashBoardData'
  const dashBoardData = JSON.parse(localStorage.getItem(DashBoardDataKey) || "{}")

  const [config, setConfig] = useState({
    data: dashBoardData.data || [],
  })

  return {
    data: config.data,
  }
}