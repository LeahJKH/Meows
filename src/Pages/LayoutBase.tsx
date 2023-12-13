import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";

export function LayoutBase() {
  return (
    <>
      <NavBar />

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
