import { useState, useEffect } from 'react';

export default function useAlarm(currentTime, alarmHour, alarmMinute, alarmSet) {
  const [alarmTriggered, setAlarmTriggered] = useState(false);

  useEffect(() => {
    if (!alarmSet) return;
    const hour = currentTime.getHours().toString().padStart(2, '0');
    const minute = currentTime.getMinutes().toString().padStart(2, '0');
    if (hour === alarmHour && minute === alarmMinute) {
      setAlarmTriggered(true);
    }
  }, [currentTime, alarmSet, alarmHour, alarmMinute]);

  return [alarmTriggered, setAlarmTriggered];
}
