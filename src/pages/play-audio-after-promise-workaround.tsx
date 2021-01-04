import { useState } from 'react';

const App = () => {
  const [audioError, setAudioError] = useState<Error>();
  const [audio, setAudio] = useState<HTMLAudioElement>();

  const handleLoad = () => {
    const _audio = new Audio(
      'https://www.videomaker.com/sites/videomaker.com/files/downloads/free-sound-effects/Free_ExplosionSharp_6048_97_1.wav'
    );
    _audio.load();
    _audio.addEventListener('canplaythrough', () => {
      console.log('Preloaded audio');
      setAudio(_audio);
    });
  };

  const handleClick = async () => {
    setAudioError(undefined);
    await new Promise((r) => setTimeout(r, 2000));
    audio &&
      audio.play().catch((e) => {
        setAudioError(e);
      });
  };

  return (
    <div className="flex flex-col space-y-4">
      <p className="mb-4">
        The work around is to load the audio after a user interaction. Now you can play audio after
        async operations on iOS.
      </p>
      <button
        className="border-2 border-blue-700 bg-blue-500 text-white rounded-md px-4 py-2 text-center"
        onClick={handleLoad}
        disabled={audio !== undefined}
      >
        {audio ? '▼ Click the button below to play the audio' : 'Load Audio!'}
      </button>

      <button
        className={`border-2 border-green-700 bg-green-500 ${
          audio ? '' : 'cursor-not-allowed'
        } text-white rounded-md px-4 py-2 mt-4 text-center`}
        onClick={handleClick}
        disabled={audio === undefined}
      >
        {audio ? 'Play after resolving a promise ▶' : '▲ Click the button above to load audio'}
      </button>
      {audioError && <div className="mt-4 text-red-600">AUDIO ERROR: {audioError.message}</div>}
    </div>
  );
};

export default App;
