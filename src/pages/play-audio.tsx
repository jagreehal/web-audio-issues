import { useState } from 'react';

const App = () => {
  const [audioError, setAudioError] = useState<Error>();
  const handleClick = () => {
    setAudioError(undefined);
    new Audio(
      'https://www.videomaker.com/sites/videomaker.com/files/downloads/free-sound-effects/Free_ExplosionSharp_6048_97_1.wav'
    )
      .play()
      .catch((e) => {
        setAudioError(e);
      });
  };

  return (
    <div>
      <p className="mb-4">Clicking play works everywhere!</p>
      <button
        className="border-2 border-green-700 bg-green-500 text-white rounded-md px-4 py-2 text-center"
        onClick={handleClick}
      >
        Play ▶
      </button>
      {audioError && <div className="mt-4 text-red-600">AUDIO ERROR: {audioError.message}</div>}
    </div>
  );
};

export default App;
