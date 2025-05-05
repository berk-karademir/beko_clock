function ModeToggle({ mode, handleToggleMode }) {
  return (
    <button className="mode-toggle-btn" onClick={handleToggleMode} aria-label="Modu değiştir">
      {mode === 'night' ? '🌞 Day Theme' : '🌙 Night Theme'}
    </button>
  );
}

export default ModeToggle;
