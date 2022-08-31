import { useState } from "react"

export const useConfigStore = () => {
  const localConfigKey = 'localConfig'
  const localConfig = JSON.parse(localStorage.getItem(localConfigKey) || "{}")
  const [config, setConfig] = useState({
    mode: 'auto', // 自动 auto ｜ 手动 manual
    duration: 180, // 抓取时间间隔
    ...localConfig,
  })

  return {
    config,
    setConfig: (_config: any) => {
      const newConfig = {
        ...config,
        ..._config,
      }
      localStorage.setItem(localConfigKey, JSON.stringify(newConfig))
      setConfig(newConfig)
    },
    onStart: () => {
      // setTimeout(() => {
      //   window.toastSuccess.remove()
      // }, 1500);
    }
  }
}