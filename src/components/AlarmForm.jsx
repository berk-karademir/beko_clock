function AlarmForm({
  alarmHour,
  alarmMinute,
  setAlarmHour,
  setAlarmMinute,
  handleSetAlarm,
}) {
  const increment = (val, max) => (parseInt(val, 10) + 1) % (max + 1);
  const decrement = (val, max) =>
    (parseInt(val, 10) - 1 + (max + 1)) % (max + 1);

  const handleHourChange = (e) => {
    const val = e.target.value;
    if (val.length <= 2 && /^\d{0,2}$/.test(val)) {
      setAlarmHour(val);
    }
  };
  
  const handleMinuteChange = (e) => {
    const val = e.target.value;
    if (val.length <= 2 && /^\d{0,2}$/.test(val)) {
      setAlarmMinute(val);
    }
  };
  
  const normalizeHour = () => {
    const num = Math.min(parseInt(alarmHour || "0", 10), 23);
    setAlarmHour(num.toString().padStart(2, "0"));
  };
  
  const normalizeMinute = () => {
    const num = Math.min(parseInt(alarmMinute || "0", 10), 59);
    setAlarmMinute(num.toString().padStart(2, "0"));
  };
  

  return (
    <div className="alarm-form-container">
      <form className="alarm-form" onSubmit={handleSetAlarm}>
        <label className="alarm-label">
          I want to <br />
          wake up at
        </label>

        {/* Hour input */}
        <div className="input-wrapper">
          <input
            className="alarm-input"
            type="number"
            min="0"
            max="23"
            step="1"
            value={alarmHour}
            onChange={handleHourChange}
            onBlur={normalizeHour}
            onWheel={(e) => {
              e.preventDefault();
              const value = parseInt(alarmHour, 10);
              const newValue = (value + (e.deltaY < 0 ? 1 : -1) + 24) % 24;
              setAlarmHour(newValue.toString().padStart(2, "0"));
            }}
          />
          <div className="custom-spin-buttons">
            <button
              type="button"
              onClick={() =>
                setAlarmHour(
                  increment(alarmHour, 23).toString().padStart(2, "0")
                )
              }
            >
              ▲
            </button>
            <button
              type="button"
              onClick={() =>
                setAlarmHour(
                  decrement(alarmHour, 23).toString().padStart(2, "0")
                )
              }
            >
              ▼
            </button>
          </div>
        </div>

        {/* Minute input */}
        <div className="input-wrapper">
          <input
            className="alarm-input"
            type="number"
            min="0"
            max="59"
            step="1"
            value={alarmMinute}
            onChange={handleMinuteChange}
            onBlur={normalizeMinute}
            onWheel={(e) => {
              e.preventDefault();
              const value = parseInt(alarmMinute, 10);
              const newValue = (value + (e.deltaY < 0 ? 1 : -1) + 60) % 60;
              setAlarmMinute(newValue.toString().padStart(2, "0"));
            }}
          />
          <div className="custom-spin-buttons">
            <button
              type="button"
              onClick={() =>
                setAlarmMinute(
                  increment(alarmMinute, 59).toString().padStart(2, "0")
                )
              }
            >
              ▲
            </button>
            <button
              type="button"
              onClick={() =>
                setAlarmMinute(
                  decrement(alarmMinute, 59).toString().padStart(2, "0")
                )
              }
            >
              ▼
            </button>
          </div>
        </div>

        <button className="alarm-btn" type="submit">
          Set
        </button>
      </form>
    </div>
  );
}

export default AlarmForm;
