# Beko Clock 🕒

Beko Clock is a sleek and functional digital clock and alarm application built with React and Vite. Users can view the time and date through a modern interface, easily set alarms, select from different alarm sounds, and switch between day/night modes. 🎯

## Features

- **Real-time Clock and Date:** The time and date are updated and displayed live. ⏰
- **Alarm Setting:** Alarms can be easily set by selecting hours and minutes. 🕒
- **Rich Alarm Sounds:** Choose from over 15 different alarm sounds. 🔊
- **Alarm Countdown:** The remaining time until the alarm is displayed live. ⏳
- **Animated UI:** The interface is animated to provide a smooth user experience and it eye-catching .
- **12/24 Hour Format:** Users can switch between 12-hour and 24-hour time formats. 🕐
- **Day/Night Mode:** Users can switch the interface to day or night mode. 🌞🌙
- **Modern and Responsive Design:** Stylish appearance on mobile and desktop devices. 📱💻



## Usage

- The clock and date are displayed automatically. ⏰
- To set an alarm, enter the hours and minutes and press the "Set" button. 🕒
- To select an alarm sound, choose one from the list and test it. 🔊
- Use the theme toggling button to switch between Day/Night mode. 🌞🌙
- The selected sound will play automatically when the alarm goes off. 🔔

## Project Structure


beko_clock/
├── public/
│   ├── alarm-audios/      # Alarm audio files (.mp3)
│   ├── images/            # Background images and icons
│   └── fonts/             # Digital clock font
├── src/
│   ├── components/        # React components (AlarmForm, ClockDisplay, etc.)
│   ├── hooks/             # Custom React hooks (useAlarm, useCurrentTime)
│   ├── App.jsx            # Main application component
│   ├── App.css            # Application styles
│   └── main.jsx           # Entry point
├── index.html
├── package.json
└── README.md



## Technical Details

- **Frontend:** React 19, Vite
- **Styling:** CSS (responsive, mobile-friendly, yes espacially without Tailwind CSS)
- **Custom Hooks:**
  - `useCurrentTime`: For real-time clock.
  - `useAlarm`: Alarm triggering logic.
- **Components:**
  - `AlarmForm`, `ClockDisplay`, `ModeToggle`, `AlarmSoundPicker`, `AlarmCountdown`
- **Alarm Sounds:** Stored in the `public/assets/alarm-sounds` folder.
- **Images:** Backgrounds and icons in the `public/assets/images` folder.

## License
MIT License 📄

## Contact Me

LinkedIn: [Berk Karademir](https://www.linkedin.com/in/berk-karademir/)



