import { Control } from "./Control";
import { Header } from "./Header";
import { Data } from './data'

export const App = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      <div className="flex flex-grow">
        <div className="flex-grow h-full">
          <Control  />
          <Data />
        </div>
      </div>
    </div>
  );
};
