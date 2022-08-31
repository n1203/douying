"use strict";

import { getCMMData, getCMMDataWord } from "./cmm";

console.log('content');


function getData() {
  let data: any = {
    直播间成交金额: 0,
    千次观看成交金额: 0,
    成交人数: 0,
    "观看-成交率(人数)": "0.00%",
    "商品点击-成交率(人数)": "0%",
    实时在线人数: 0,
    "曝光-观看率": "0.00%",
    人均观看时长: "0秒",
    "观看-互动率(人数)": "0.00%",
    新增粉丝数: 0,
    近5分钟成交金额: 0,
    近5分钟商品点击次数: 0,
    累计成交金额: 0,
    未支付订单数: 0,
  };

  const odometer: any = document.querySelector(
    "div.odometer.odometer-auto-theme"
  );

  if (odometer) {
    data.直播间成交金额 = +(odometer?.innerText?.replaceAll("\n", "") || "0");

  }

  const upper = document.querySelectorAll("div[class^=upper--]");
  if (upper) {
    const uppers: any = Array.from(upper)
      .map((o: any) => o?.innerText?.split("\n") || [])
      .filter((o) => o.length === 2);
    uppers.forEach(([k, v]) => {
      switch (k) {
        case "千次观看成交金额":
          data[k] = +v.replaceAll("¥", "");
          break;
        case "观看-成交率(人数)":
        case "商品点击-成交率(人数)":
        case "曝光-观看率":
        case "人均观看时长":
        case "观看-互动率(人数)":
          data[k] = v;
          break;
        default:
          data[k] = +v;
          break;
      }
    });
  }

  return data;
}


function getData2() {
  const data: any = {
  }
  if (!location.href.includes("https://compass.jinritemai.com/talent/live-statement-old?live_room_id=")) return
  // 判断是否展开
  const expend: any = Array.from(document.querySelectorAll('div[class^="expand--"]'))[0]
  if (expend && expend.innerText === '展开全部') {
    expend.click()
  }

  const boardItems = Array.from(document.querySelectorAll('div[class^="boardItem--"]'))
  if (boardItems) {
    boardItems.forEach((boardItem: any) => {
      // const 分类: any = boardItem.querySelector('div[class^=title--]')?.innerText || '未知类型'
      const infoItem = Array.from(boardItem.querySelectorAll('div[class^=infoItem--]'))
      infoItem.forEach((item: any) => {
        const [k, v, v2] = (item?.innerText || '').split('\n')
        data[k] = `${(v.replaceAll(',', '') || 0)}${v2 ? `(${(v2.replaceAll(',', '') || 0)})` : ''}`
      })
    })
  }

  const 老师 = document.querySelectorAll('div[class^="name--"]')
  if (老师) {
    data.老师 = 老师[0]?.innerText || '未知老师'
  }

  const bottomArea = Array.from(document.querySelectorAll('div[class^="bottomArea--"]'))
  if (bottomArea) {
    bottomArea.map(o => Array.from(o.children).forEach((item: any) => {
      const [k, v] = (item?.innerText || '').split('\n')
      data[k] = v
    }))
  }

  return data
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  // console.log('%cMyProject%cline:101%crequest', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(229, 187, 129);padding:3px;border-radius:2px', request)
  // switch (request.type) {
  //   case 'CMM':
  //     sendResponse(getCMMData());
  //     break;
  //   case 'CMM2':
  //     sendResponse(getCMMDataWord());
  //     break;
  //   default:
  //     sendResponse(getData2());
  //     break;
  // }
});
