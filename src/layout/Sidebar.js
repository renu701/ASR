import SidebarAudioBody from "./SidebarAudioBody";
import SidebarStreamingBody from "./SidebarStreamingBody";
import SidebarCTIBody from "./SidebarCTIBody";

const Sidebar = ({ setActiveBtn, activeBtn }) => {
  const handleClick = (e) => {
    setActiveBtn(e.target.value);
  };
  return (
    <div className="relative">
      <div className="flex w-full p-2 rounded-md bg-gray-300">
        <button
          className={`p-2 w-1/3 rounded-md ${activeBtn === "audio" ? "bg-white" : "bg-gray-300"}`}
          onClick={(event) => handleClick(event)}
          value={"audio"}
        >
          Audio File
        </button>
        <button
          className={`p-2 w-1/3 rounded-md ${activeBtn === "streaming" ? "bg-white" : "bg-gray-300"}`}
          onClick={(event) => handleClick(event)}
          value={"streaming"}
        >
          Streaming STT
        </button>
        <button
          className={`p-2 w-1/3 rounded-md ${activeBtn === "CTI" ? "bg-white" : "bg-gray-300"}`}
          onClick={(event) => handleClick(event)}
          value={"CTI"}
        >
          CTI
        </button>
      </div>
      <div className="flex w-full p-3 mt-4 bg-white rounded-md">
        {(() => {
          switch (activeBtn) {
            case "audio":
              return <SidebarAudioBody />;
            case "streaming":
              return <SidebarStreamingBody />;
            default:
              return <SidebarCTIBody />;
          }
        })()}
      </div>
    </div>
  );
};
export default Sidebar;
