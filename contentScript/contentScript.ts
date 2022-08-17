"use strict";

function getData() {
  let data: any = {
    直播间成交金额: 0,
    千次观看成交金额: 0,
    成交人数: 0,
    '观看-成交率(人数)': '0.00%',
    '商品点击-成交率(人数)': '0%',
    '实时在线人数': 0,
    '曝光-观看率': '0.00%',
    '人均观看时长': '0秒',
    '观看-互动率(人数)': '0.00%',
    '新增粉丝数': 0,
    '近5分钟成交金额': 0,
    '近5分钟商品点击次数': 0,
    '累计成交金额': 0,
    '未支付订单数': 0,
    '老师': '未命名老师',
  }

  const odometer: any = document.querySelector('div.odometer.odometer-auto-theme')
  if (odometer) {
    data.直播间成交金额 = +(odometer?.innerText?.replaceAll('\n', '') || '0')
  }

  const accountName = document.querySelectorAll('span.accountName--C55ms.fc16')
  if (accountName) {
    data.老师 = accountName[0]?.innerText || '未命名老师'
  }

  const upper = document.querySelectorAll('div[class=upper--M80Al]')
  if (upper) {
    const uppers = Array.from(upper).map(o => o?.innerText?.split('\n') || []).filter(o => o.length === 2)
    uppers.forEach(([k, v]) => {
      switch (k) {
        case '千次观看成交金额':
          data[k] = +v.replaceAll('¥', '')
          break;
        case '观看-成交率(人数)':
        case '商品点击-成交率(人数)':
        case '曝光-观看率':
        case '人均观看时长':
        case '观看-互动率(人数)':
          data[k] = v
          break;
        default:
          data[k] = +v
          break;
      }
    })
  }

  return data
}




