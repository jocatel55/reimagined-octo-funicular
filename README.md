# Sporty Hero Drop Dashboard

A full-featured sports release tracking dashboard with to-do list management and upcoming drop visibility.

## Features

✨ **Core Functionality**
- **To-do List**: Add, complete, and delete tasks with persistent browser storage (localStorage)
- **Sports Drops**: View upcoming product releases across multiple sports
- **Smart Filtering**: Filter by sport, status, or search keyword
- **Statistics**: Real-time stats showing total drops, pre-orders, and imminent releases
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile

📋 **Sports Categories**
- Football ⚽
- Basketball 🏀
- Cricket 🏏
- Running 🏃
- Tennis 🎾
- Swimming 🏊
- Cycling 🚴
- Golf ⛳

📊 **Drop Statuses**
- Dropping soon
- Pre-order
- New arrival
- Exclusive

## Getting Started

### Quick Start
1. Clone or download this repository
2. Open `index.html` directly in your browser

### Run with a Local Server
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (http-server)
npx http-server
```

Then visit: `http://localhost:8000`

## How to Use

### To-Do List (Left Panel)
1. **Add a task**: Type a reminder in the input field and click "Add"
2. **Mark complete**: Check the checkbox next to a task
3. **Delete a task**: Click the × button on the right
4. **Clear all**: Click the "Clear all" button at the top

Tasks are automatically saved in your browser's local storage — they persist even after closing the page.

### Sports Drops (Main Panel)
1. **Search**: Use the search box to find drops by title, sport, or description
2. **Filter by Sport**: Select a specific sport from the dropdown
3. **Filter by Status**: Choose which drop types you want to see
4. **View Stats**: Check the stats row for quick totals
5. **Sort Drops**: Currently displays all matching drops in the grid

## Files

- **index.html** – The app shell and page structure
- **script.js** – All functionality: tasks, filtering, rendering
- **style.css** – Responsive dashboard styling
- **README.md** – This file

## Tech Stack

- **HTML5** – Semantic structure
- **CSS3** – Grid, flexbox, gradients, animations
- **Vanilla JavaScript** – No frameworks or dependencies
- **localStorage API** – Client-side data persistence

## Local Storage

Tasks are saved in the browser's `localStorage` under the key `sportyHeroTodos`. To clear all data:
1. Open DevTools (F12)
2. Go to Application → Storage → Local Storage
3. Find and delete the `sportyHeroTodos` key

Or simply clear the storage through the app using the "Clear all" button.

## Browser Support

Works on all modern browsers:
- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Future Enhancements

- [ ] Real sports API integration (ESPN, Sportradar, etc.)
- [ ] User authentication & cloud sync
- [ ] Calendar view for drop timeline
- [ ] Email reminders for upcoming drops
- [ ] Admin panel to add/edit drops
- [ ] Dark/light theme toggle
- [ ] Export tasks as CSV

## License

Open source — use and modify freely.

---

**Built with ❤️ for Sports Hero fans**
