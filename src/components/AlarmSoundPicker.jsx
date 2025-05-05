import { useRef, useMemo, useEffect, useState } from 'react';

// public/media/alarm-audios klasöründeki dosyaların isimleriyle aynı olacak şekilde array
const SOUND_LIST = [
  'Alert.mp3',
  'Birds.mp3',
  'Classic Clock.mp3',
  'Danger.mp3',
  'Digital.mp3',
  'Digital v2.mp3',
  'Extreme.mp3',
  'Extreme v2.mp3',
  'Guitar.mp3',
  'Guitar v2.mp3',
  'Guitar v3.mp3',
  'Guitar v4.mp3',
  'Guitar v5.mp3',
  'Magusa.mp3',
  'Rooster.mp3',
  'Siren.mp3',
  'Trumpet.mp3',
  'Trumpet v2.mp3',
  'Wake Up.mp3',
];

function AlarmSoundPicker({ selectedSound, setSelectedSound }) {
  const testAudioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // İlk render'da selectedSound boşsa, ilk sesi seçili yap
  useEffect(() => {
    if (!selectedSound && SOUND_LIST.length > 0) {
      setSelectedSound(SOUND_LIST[0]);
    }
  }, [selectedSound, setSelectedSound]);

  const selectedSoundUrl = useMemo(() => {
    return selectedSound ? `/assets/alarm-sounds/${selectedSound}` : '';
  }, [selectedSound]);

  // Play/Pause toggle
  const handlePlayPause = () => {
    if (!testAudioRef.current) return;
    if (isPlaying) {
      testAudioRef.current.pause();
      testAudioRef.current.currentTime = 0;
      setIsPlaying(false);
    } else {
      testAudioRef.current.currentTime = 0;
      testAudioRef.current.play();
      setIsPlaying(true);
    }
  };

  // Ses bittiğinde veya kullanıcı başka bir ses seçtiğinde çalmayı durdur
  useEffect(() => {
    const audio = testAudioRef.current;
    if (!audio) return;
    const handleEnded = () => setIsPlaying(false);
    audio.addEventListener('ended', handleEnded);
    return () => {
      audio.removeEventListener('ended', handleEnded);
    };
  }, [selectedSoundUrl]);

  // Seçim değişince sesi otomatik durdur
  useEffect(() => {
    if (testAudioRef.current) {
      testAudioRef.current.pause();
      testAudioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  }, [selectedSoundUrl]);

  return (
    <div className="alarm-sound-picker">
      <label htmlFor="alarm-sound-select" className="alarm-sound-label">Alarm Sound:</label>
      <select
        id="alarm-sound-select"
        className="alarm-sound-select"
        value={selectedSound}
        onChange={e => setSelectedSound(e.target.value)}
      >
        {SOUND_LIST.map(sound => (
          <option key={sound} value={sound}>{sound.replace('.mp3', '')}</option>
        ))}
      </select>
      <button type="button" className="alarm-test-btn" onClick={handlePlayPause}>
        {isPlaying ? 'Stop' : 'Test'}
      </button>
      {selectedSoundUrl && (
        <audio ref={testAudioRef} src={selectedSoundUrl} preload="auto" />
      )}
    </div>
  );
}

export default AlarmSoundPicker;
