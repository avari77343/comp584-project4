# COMP-584 Project 4: Calculator

A responsive four-function calculator built with HTML, CSS Grid, and vanilla JavaScript.

## Features
- Addition, subtraction, multiplication, and division
- Clear (`C`) and backspace (`←`)
- Decimal results and division-by-zero error handling
- Keyboard support: number keys, `+`, `-`, `*`, `/`, Enter, Backspace, and Escape
- Button hover, active, and keyboard-focus states
- Calculator screen and keypad separated into their own HTML sections
- Calculator logic written from scratch without `eval()`

## Run locally
Open `index.html` in a browser. No build tools or dependencies are required.

## GitHub Pages deployment
1. Create a new GitHub repository, for example `comp584-project4-av`.
2. Upload `index.html`, `style.css`, `script.js`, and the `images` folder (if retained).
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Choose the `main` branch and `/ (root)`, then save.
6. Wait for GitHub Pages to publish the site.
7. Copy the published website URL and add it here:

**GitHub Pages URL:** `PASTE-YOUR-PUBLISHED-URL-HERE`

Submit your GitHub repository URL in Canvas, as instructed.

## Implementation notes
- The supplied 400px `.wrapper` width is preserved.
- CSS Grid arranges the calculator buttons.
- JavaScript stores the current input, previous operand, and selected operator in variables.
- A `switch` statement performs the arithmetic directly; `eval()` is not used.
