const SidebarCTIBody = () => {
  return (
    <div className="w-full">
      <div>
        <p className="text-sm text-blue-600 pb-3">
          Click the button below and start speaking into your microphone to see
          your live transcription.
        </p>
      </div>
      <div>
        <button className="w-full p-3 mt-4 bg-blue-600 text-white rounded-md">
          Start
        </button>
      </div>
    </div>
  );
};
export default SidebarCTIBody;
