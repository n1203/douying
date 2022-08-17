import { useEffect } from "react";
import { Control } from "./Control";
import { Header } from "./Header";
import { StorageKey, useRootState } from "./store/base";

export const App = () => {
  const store = useRootState();
  // chrome.runtime.onMessage.addListener(function (
  //   request,
  //   sender,
  //   sendResponse
  // ) {
  //   console.log("收到来自content-script的消息：");
  //   console.log(request, sender, sendResponse);
  //   sendResponse("我是后台，我已收到你的消息：" + JSON.stringify(request));
  // });
  return (
    <div className="w-96" style={{height: '600px'}}>
      <Header />
      <Control store={store} />
    </div>
  );
};
