import { useState } from "react";

const SidebarAudioBody = () => {
  const [audio, setAudio] = useState(null);
  const addFile = (e) => {
    if (e.target.files[0].name) {
      setAudio(e.target.files[0].name);
    }
  };
  return (
    <div className="w-full">
      <div>
        <p className="text-sm text-blue-600 pb-3">
          Start transcribing by uploading an audio file:
        </p>
        <div>
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col items-center justify-center w-full h-36 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Upload your file</span>
                </p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                accept="audio/x-m4a,audio/mp4,audio/mp3,audio/wav,audio/ogg,audio/*,video/*"
                className="hidden"
                onChange={(event) => addFile(event)}
              />
            </label>
          </div>
        </div>
      </div>
      <div>
        <button className="w-full p-3 mt-4 bg-gray-600 text-white rounded-md">
          Transcribe file
        </button>
      </div>
    </div>
  );
};
export default SidebarAudioBody;
