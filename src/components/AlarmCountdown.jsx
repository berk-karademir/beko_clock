import React, { useMemo } from 'react';

function pad(num) {
  return num.toString().padStart(2, '0');
}

function AlarmCountdown({ alarmHour, alarmMinute, currentTime, alarmTriggered}) {
  // alarmHour ve alarmMinute string, currentTime Date objesi
  const remaining = useMemo(() => {
    if (alarmTriggered) return null;
    if (!alarmHour || !alarmMinute || !currentTime) return null;
    const now = new Date(currentTime);
    const alarm = new Date(now);
    alarm.setHours(parseInt(alarmHour, 10));
    alarm.setMinutes(parseInt(alarmMinute, 10));
    alarm.setSeconds(0);
    if (alarm <= now) {
      // alarm zamanı geçtiyse, ertesi gün için hesapla
      alarm.setDate(alarm.getDate() + 1);
    }
    const diffMs = alarm - now;
    const totalSeconds = Math.floor(diffMs / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return { hours, minutes, seconds };
  }, [alarmHour, alarmMinute, currentTime, alarmTriggered]);

  if (!remaining) return null;

  return (
    <div className="alarm-countdown-container">
      <p>Alarm is set for {alarmHour}:{alarmMinute}</p>
      <p>You will be <b>-we hope-</b> woken up in</p>
      <p>{pad(remaining.hours)}:{pad(remaining.minutes)}:{pad(remaining.seconds)}</p>
    </div>
  );
}

export default AlarmCountdown;
