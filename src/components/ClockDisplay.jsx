function ClockDisplay({ currentTime }) {
  return (
    <div className="clock-display">
      <p>{currentTime.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' })}</p>
      <div>
      <p>{currentTime.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</p>
      </div>
      <p>{currentTime.toLocaleDateString('en-US', { day: '2-digit', month: 'long', weekday: 'long' })}</p>
    </div>
  );
}

export default ClockDisplay;
