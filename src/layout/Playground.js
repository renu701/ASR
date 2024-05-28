import { useState } from "react";
import Sidebar from "./Sidebar";
import PlaygroundAudioBody from "./playgroundAudioBody";
import PlaygroundStreamingBody from "./PlaygroundStreamingBody";
import PlaygroundCTIBody from "./PlaygroundCTIBody";

const PlayGround = () => {
  const [activeBtn, setActiveBtn] = useState("audio");
  return (
    <div className="block sm:flex w-full h-screen">
      <div className=" w-full sm:w-1/4 p-4 bg-slate-200 sm:border-r-2 sm:border-gray-400 ">
        <Sidebar activeBtn={activeBtn} setActiveBtn={setActiveBtn} />
      </div>
      <div className="w-full sm:w-3/4 p-4 bg-gray-100">
        {(() => {
          switch (activeBtn) {
            case "audio":
              return <PlaygroundAudioBody />;
            case "streaming":
              return <PlaygroundStreamingBody />;
            default:
              return <PlaygroundCTIBody />;
          }
        })()}
      </div>
    </div>
  );
};

export default PlayGround;
