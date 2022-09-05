import { useDataStore } from "./hooks/useDataStore";
import * as dataManager from './data'

export const Data = () => {
  const dataStore = useDataStore()

  const ExportCSV = () => {
    const blob = new Blob([dataStore.data.slice(1, 999999).map((o: any) => o.join(',')).join(`
`)], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `巨量百应-${new Date().toLocaleDateString()}.csv`);
    link.click();
  };

  return (
    <div className="relative w-full overflow-x-scroll overflow-hidden">
      <p className="font-black text-gray-900 dark:text-white p-2 border-t bg-gray-100 border-b">当前抓取数据</p>
      <table className="text-sm text-left text-gray-500 dark:text-gray-400 max-w-max">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {dataStore.data[1].map(th => {
              return <th scope="col" className="py-3 px-6 whitespace-nowrap">
              {th}
            </th>
            })}
          </tr>
        </thead>
        <tbody>
          {dataStore.data.slice(2, 999999).map((row: any) => {
            return <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              {row.map((td: any) => {
                return <td className="py-4 px-6  whitespace-nowrap">{td}</td>
              })}
            </tr>
          })}
        </tbody>
      </table>

      <div className="p-2 w-full fixed bottom-4 left-4">
        <button onClick={() => {
          dataManager.Data.clear()
          window.location.reload()
        }} type="button" className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">清空当前抓取数据({dataStore.data.length-2}条)</button>

        <button
            type="button"
            className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            onClick={ExportCSV}
          >
          导出数据到Excel
        </button>
      </div>

    </div>
  );
};
