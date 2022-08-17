import { Button, Input, Radio } from "tdesign-react";

export const Control = ({ store }: any) => {
  return (
    <div className="w-full p-2 flex flex-col gap-2" style={{}}>
      <div>
        <Radio.Group
          key={store.state.mode}
          value={store.state.mode}
          onChange={(value: any) => store.toggleMode(value)}
          variant="default-filled"
        >
          <Radio.Button value="timer">定时</Radio.Button>
          <Radio.Button value="manual">手动</Radio.Button>
          <Radio.Button value="CMM">蝉妈妈</Radio.Button>
        </Radio.Group>
      </div>
      {store.state.mode === "timer" && (
        <>
          <div>
            <Input
              label="时间"
              value={store.state.timer}
              onChange={(e: any) => store.setTimer(e)}
              placeholder="请输入内容"
            />
          </div>
          <Button onClick={store.startTimer}>开始计时⌛️抓取</Button>
          <div className="flex-grow flex flex-wrap gap-2 bg-gray-100 p-4">
            <div className="w-1/3">
              总记录条数: {store.state.logs.length}
            </div>
            <div className="w-2/3">
              最近一次上报时间: {[...store.state.logs]?.pop()?.记录时间 || '未知上报时间'}
            </div>
            {/* {store.state.logs.map((log: any, index: number) => {
              const [fold, toggleFold] = useState(false)
              return <div key={index} className="p-1 rounded bg-gray-50 flex gap-2 flex-wrap">
                <div className="text-gray-400">{log.记录时间 || '未知上报时间'}</div>
                {fold && Object.entries(log).map(([key, value]) => {
                  return <div key={key}>{key}: {value}</div>
                })}
                {!fold && <div onClick={() => toggleFold(!fold)} className="text-gray-400 cursor-pointer hover:text-blue-700 text-center">...</div>}
              </div>
            })} */}
          </div>
          <Button block theme="danger" onClick={store.removeLogs}>清空记录</Button>
          <Button block theme="primary" onClick={store.ExportCSV}>下载Excel</Button>
        </>
      )}
      {store.state.mode === "manual" && (
        <>
          <div className=" flex w-full justify-center items-center">
            <div className=" w-28 h-28 flex items-center justify-center rounded-full bg-blue-700 border-4 border-blue-400 shadow-lg text-center text-white text-lg font-bold cursor-pointer" onClick={store.addLog}>
              <div>记录一次</div>
            </div>
          </div>
          <div className="flex-grow flex flex-wrap gap-2 bg-gray-100 p-4">
            <div className="w-1/3">
              总记录条数: {store.state.logs.length}
            </div>
            <div className="w-2/3">
              最近一次上报时间: {[...store.state.logs]?.pop()?.记录时间 || '未知上报时间'}
            </div>
            {/* {store.state.logs.map((log: any, index: number) => {
              const [fold, toggleFold] = useState(false)
              return <div key={index} className="p-1 rounded bg-gray-50 flex gap-2 flex-wrap">
                <div className="text-gray-400">{log.记录时间 || '未知上报时间'}</div>
                {fold && Object.entries(log).map(([key, value]) => {
                  return <div key={key}>{key}: {value}</div>
                })}
                {!fold && <div onClick={() => toggleFold(!fold)} className="text-gray-400 cursor-pointer hover:text-blue-700 text-center">...</div>}
              </div>
            })} */}
          </div>
          <Button block theme="danger" onClick={store.removeLogs}>清空记录</Button>
          <Button block theme="primary" onClick={store.ExportCSV}>下载Excel</Button>
        </>
      )}
      {store.state.mode === "CMM" && <>
          <Button block theme="primary" onClick={() => store.getCMMData()}>下载Excel</Button>
          <Button block theme="primary" onClick={() => store.getCMMData('CMM2')}>下载Word(测试)</Button>
      </>}
    </div>
  );
};
