import { Outlet } from "react-router-dom";

export function LayoutBase() {
  return (
    <>
      <header>Header</header>

      <div>
        <Outlet />
      </div>

      <footer>
        <h3>🐾 Welcome to Meows! 🐾</h3>
        <p>
          Purr-fectly connecting the feline community! 🐱✨ Share your
          whisker-worthy moments, exchange meow-tastic thoughts, and let the
          purr-sonalities shine! 🌟 #MeowLife #PurrfectionInEveryTweet 🐾
        </p>
      </footer>
    </>
  );
}
