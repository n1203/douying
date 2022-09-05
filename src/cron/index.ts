export class DataManager {
  constructor(options?: any) {
    this.initChrome = this.initChrome.bind(this)
    this.data = this.data.bind(this)
    this.initChrome()
  }

  initChrome() {
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      this.data({
        url: request.data.request.url,
        content: request.data.content
      })
    })
  }

  data({url, content}: any) {
    // 趋势数据
    if (url.includes('trends_v2')) {
      // this.DashBoardDataSet(JSON.parse(content).data)

    }
    // 指标
    if (url.includes('dashboard_v2')) {
      this.DashBoardDataSet(JSON.parse(content).data)
      window.location.reload()
    }

  }

  DashBoardDataSet(data: any) {
    const localDataKey = 'DashBoardData'
    const localData = JSON.parse(localStorage.getItem(localDataKey) || "{}")

    let result = [
      Object.keys(data),
      [],
      []
    ]

    Object.values(data).forEach((indexes: any) => {
        indexes.forEach((index: any) => {
            result[1].push(index.index_display)
            result[2].push(index.value.value)
        })
    })

    result[1].push('数据记录时间')
    result[2].push(new Date().toLocaleString())

    if (localData?.data?.length) {
      localStorage.setItem(localDataKey, JSON.stringify({data: [
        ...localData.data,
        result[2]
      ]}))
    } else {
      localStorage.setItem(localDataKey, JSON.stringify({data: result}))
    }
  }

  clear() {
    localStorage.setItem('DashBoardData', JSON.stringify({data: []}))
  }
}
