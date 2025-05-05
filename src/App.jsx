import { useState, useEffect, useRef } from "react";
import "./App.css";
import AlarmForm from "./components/AlarmForm";
import ClockDisplay from "./components/ClockDisplay";
import ModeToggle from "./components/ModeToggle";
import AlarmSoundPicker from "./components/AlarmSoundPicker";
import useCurrentTime from "./hooks/useCurrentTime";
import useAlarm from "./hooks/useAlarm";
import AlarmCountdown from "./components/AlarmCountdown";

function App() {
  const currentTime = useCurrentTime();

  const [alarmHour, setAlarmHour] = useState("07");
  const [alarmMinute, setAlarmMinute] = useState("00");
  const [alarmSet, setAlarmSet] = useState(false);
  const [mode, setMode] = useState("night"); // 'day' veya 'night'
  // İlk alarm sesi başlangıç değeri olarak atanır
  const [selectedSound, setSelectedSound] = useState("Alert.mp3");
  const [alarmTriggered, setAlarmTriggered] = useAlarm(
    currentTime,
    alarmHour,
    alarmMinute,
    alarmSet
  );

  // Alarm sesi için referans
  const alarmAudioRef = useRef(null);

  useEffect(() => {
    if (alarmTriggered && alarmAudioRef.current) {
      alarmAudioRef.current.currentTime = 0;
      alarmAudioRef.current.play();
    } else if (!alarmTriggered && alarmAudioRef.current) {
      alarmAudioRef.current.pause();
      alarmAudioRef.current.currentTime = 0;
    }
  }, [alarmTriggered, selectedSound]);

  const handleSetAlarm = (e) => {
    e.preventDefault();
    setAlarmSet(true);
    setAlarmTriggered(false);

    // Animation states
      
    
   
  };

  const handleToggleMode = () => {
    setMode((prev) => (prev === "night" ? "day" : "night"));
  };

  return (
    <div className={`main-div ${mode}-mode`}>
      <h1 className="main-title">Beko'clock</h1>
      <img src="/assets/images/moon.png" alt="moon" className="moon" />
      <main className="alarm-main">
        <ModeToggle mode={mode} handleToggleMode={handleToggleMode} />
        <ClockDisplay currentTime={currentTime} />
        <AlarmSoundPicker
          selectedSound={selectedSound}
          setSelectedSound={setSelectedSound}
        />
        <AlarmForm
          alarmHour={alarmHour}
          alarmMinute={alarmMinute}
          setAlarmHour={setAlarmHour}
          setAlarmMinute={setAlarmMinute}
          handleSetAlarm={handleSetAlarm}
        />
        {alarmSet && (
          <AlarmCountdown
            alarmHour={alarmHour}
            alarmMinute={alarmMinute}
            currentTime={currentTime}
            alarmTriggered={alarmTriggered}
          />
        )}
        {alarmTriggered && <div className="alarm-triggered show">Wake Up !</div>}
        {/* Alarm sesi için audio elementi */}
        <audio
          ref={alarmAudioRef}
          src={`/assets/alarm-sounds/${selectedSound}`}
          preload="auto"
          autoPlay
          loop
        />
      </main>
    </div>
  );
}

export default App;
