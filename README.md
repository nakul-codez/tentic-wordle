# ⏳ TenTic Wordle
> The classic word game, now with a heart-pounding 10-minute limit.

Standard Wordle is a relaxing morning ritual. TenTic Wordle is an adrenaline-fueled race against the clock. You have 6 attempts to find the secret 5-letter word, but if the timer hits ten, the game is over—no matter how many guesses you have left.


## 🌐 Hosted Link
Tentic Wordle: https://nakul-codez.github.io/tentic-wordle/


## 🎮 How to Play
1. Guess the Word: Enter any valid 5-letter word.
2. Check the Colors:
    🟩 Green: Letter is correct and in the right spot.
    🟨 Yellow: Letter is in the word but in the wrong spot.
    ⬜ Gray: Letter is not in the word at all.
3. Watch the Clock: You have exactly 10 minutes (600 seconds) to solve the puzzle.
4. Win or Lose:
    Game Over: If you exhaust all six of your attempts provided to you to guess the word.
    Time Up: If the timer hits ten minutes before you guess the correct word.
    Congratulations: If you guess the correct word within six attempts and ten minutes.


## ✨ Key Features
- Real-Time Timer: A persistent clock that keeps the pressure on.
- Dynamic Results: A victory screen that displays your efficiency based on speed and accuracy.
- Hard-Stop Condition: Automatic "Game Over" state once the 10-minute threshold is reached.
- Responsive Design: Playable on both desktop and mobile browsers.


## 🛠️ Tech Stack
- React: UI Library
- Vite: Build Tool (optimized for speed)
- CSS3: For those sleek animations and responsive design
- GitHub Pages: Deployment and Hosting


## 📥 Installation
Want to run a local copy? Just follow these steps:
1. Clone the repository

        git clone https://github.com/nakul-codez/tentic-wordle.git
3. Enter the project folder

        cd tentic-wordle
4. Install dependencies

        npm install
5. Start the development server

        npm run dev


## 🚀 Deployment
This project is optimized for GitHub Pages. To deploy your own version:
1. Update base in vite.config.js to '/tentic-wordle/'.
2. Run npm run deploy to push the production build to the gh-pages branch.


## 📝 Author
Nakul (👻👽🤖)  
Passionate Developer & Wordle Enthusiast
