import { sendMessageToContentScript } from "@/utils/send";
import { useState } from "react";

export const StorageKey = "base";

interface ILogs {
  记录时间: string;
  直播间成交金额: number;
  千次观看成交金额: number;
  成交人数: number;
  "观看-成交率(人数)": string;
  "商品点击-成交率(人数)": string;
  实时在线人数: number;
  "曝光-观看率": string;
  人均观看时长: string;
  "观看-互动率(人数)": string;
  新增粉丝数: number;
  近5分钟成交金额: number;
  近5分钟商品点击次数: number;
  累计成交金额: number;
  未支付订单数: number;
  老师: string;
}

export type IMode = "timer" | "manual";

interface IState {
  logs?: Array<ILogs>;
  mode?: IMode;
  timer?: number;
}

export const useRootState = () => {
  const [state, _setState] = useState(
    Object.assign(
      {
        mode: "timer",
        timer: 0,
        logs: [],
      } as IState,
      JSON.parse(window.localStorage.getItem(StorageKey) || "{}")
    )
  );

  const setState = (s: IState) => {
    const newState = {
      ...state,
      ...s,
    };
    window.localStorage.setItem(StorageKey, JSON.stringify({ ...newState }));
    _setState(newState);
  };

  /**
   * 按分钟设置
   * @param timer
   */
  const setTimer = (timer: number) => {
    setState({
      timer,
    });
  };

  const addLog = () => {
    sendMessageToContentScript(
      { type: "state", data: { ...state } },
      (response: any) => {
        const logs = [
          ...(state.logs || []),
          {
            ...response,
            记录时间: new Date().toLocaleString(),
          },
        ];
        setState({
          logs,
        });
      }
    );
  };

  const getCMMData = (type = "CMM") => {
    sendMessageToContentScript(
      { type, data: { ...state } },
      (response: any) => {}
    );
  };

  const startTimer = () => {
    let T = setTimeout(() => {
      addLog();
      clearTimeout(T);
      startTimer();
    }, state.timer * 60000);
  };

  const toggleMode = (mode: IMode) => {
    setState({
      mode,
    });
    if (mode === "timer") {
      // startTimer();
    }
  };

  const ExportCSV = () => {
    const csv = (state.logs || []).map((log: any) => {
      return Object.values(log).join(",");
    }).join(`
`);
    const header =
      Object.keys((state.logs || [])[0] || {}).join(",") +
      `
`;
    const blob = new Blob([header + csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute(
      "download",
      `抖音节点数据-${
        (state.logs || [])[0].老师
      }-${new Date().toLocaleDateString()}.csv`
    );
    link.click();
  };

  const removeLogs = () => {
    setState({
      logs: [],
    });
  };

  return {
    state,
    setState,
    setTimer,
    addLog,
    startTimer,
    toggleMode,
    ExportCSV,
    removeLogs,
    getCMMData,
  };
};
