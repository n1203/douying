import { useConfigStore } from "./hooks/useConfigStore";

const Tips = () => {
  return (
    <div
      id="alert-additional-content-5"
      className="p-4 border border-gray-300 rounded-lg bg-gray-50 dark:border-gray-600 dark:bg-gray-700"
      role="alert"
    >
      <div className="flex items-center">
        <svg
          aria-hidden="true"
          className="w-5 h-5 mr-2 text-gray-700 dark:text-gray-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span className="sr-only">Info</span>
        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">
          这是来自俊平的温馨提示
        </h3>
      </div>
      <div className="mt-2 mb-4 text-sm text-gray-700 dark:text-gray-300">
        1. 使用时候注意 <b className=" text-pink-700">别关闭浏览器</b> 和{" "}
        <b className=" text-pink-700">这个窗口</b> <br />
        2. 当前数据展示没储存到服务器，注意本地做好保存！
      </div>
      <div className="flex">
        <button
          type="button"
          className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-600"
        >
          <svg
            aria-hidden="true"
            className="-ml-0.5 mr-2 h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
            <path
              fill-rule="evenodd"
              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          真贴心,给俊平点个赞
        </button>
        <button
          type="button"
          className="text-gray-700 bg-transparent border border-gray-700 hover:bg-gray-800 hover:text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:border-gray-600 dark:hover:bg-gray-600 focus:ring-gray-600 dark:text-gray-300 dark:hover:text-white"
          data-dismiss-target="#alert-additional-content-5"
          aria-label="Close"
        >
          太好啦,给俊平点个赞
        </button>
      </div>
    </div>
  );
};

const Field = () => {
  return (
    <form>
      <div>
        <label className="block text-sm font-medium text-gray-900 dark:text-gray-300">
          Your email
        </label>
        <input
          type="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@flowbite.com"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-900 dark:text-gray-300">
          Your password
        </label>
        <input
          type="password"
          id="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
          <input
            id="remember"
            type="checkbox"
            value=""
            className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
            required
          />
        </div>
        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Remember me
        </label>
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
};

const Mode = ({ configStore }: any) => {
  return (
    <div className="inline-flex rounded-md shadow-sm" role="group">
      <button
        type="button"
        className={
          "inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white " +
          (configStore.config.mode === "auto" &&
            "text-blue-700 ring-blue-700 border-blue-700")
        }
        onClick={() => configStore.setConfig({ mode: "auto" })}
      >
        <svg
          aria-hidden="true"
          className="mr-2 w-4 h-4 fill-current"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
            clip-rule="evenodd"
          ></path>
        </svg>
        定时
      </button>
      <button
        type="button"
        className={
          "inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white " +
          (configStore.config.mode === "manual" &&
            "text-blue-700 ring-blue-700 border-blue-700")
        }
        onClick={() => configStore.setConfig({ mode: "manual" })}
      >
        <svg
          aria-hidden="true"
          className="mr-2 w-4 h-4 fill-current"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z"
            clip-rule="evenodd"
          ></path>
        </svg>
        手动
      </button>
    </div>
  );
};

export const Control = () => {
  const configStore = useConfigStore();
  return (
    <div className="w-full flex flex-col gap-2 mb-2" style={{}}>
      <div className="p-2 pb-0">
        <Tips />
      </div>

      <div className="font-black text-gray-900 dark:text-white p-2 border-t bg-gray-100 border-b flex gap-2">
        <div>配置</div>
      </div>

      <div className="p-2 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div>抓取方式：</div>
          <div className="flex gap-2">
            <Mode configStore={configStore} />
          </div>
        </div>

        {configStore.config.mode === "auto" && (
          <div className="flex items-center gap-2">
            <div>抓取时间间隔：</div>
            <div className="flex gap-2">
              <input
                type="number"
                id="number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="输入数字(秒)"
                required
              />
            </div>
          </div>
        )}

        <button
          type="button"
          className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-48"
          onClick={() => configStore.onStart()}
        >
          开始抓取
        </button>
      </div>

      <div
        id="toastSuccess"
        className="flex items-center p-4 mb-4 w-full max-w-xs text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 fixed top-8 left-8"
        role="alert"
      >
        <div className="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Check icon</span>
        </div>
        <div className="ml-3 text-sm font-normal">Item moved successfully.</div>
        <button
          type="button"
          className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          data-dismiss-target="#toastSuccess"
          aria-label="Close"
        >
          <span className="sr-only">Close</span>
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};
