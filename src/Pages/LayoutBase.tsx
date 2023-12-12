import { Outlet } from "react-router-dom";


export function LayoutBase() {
  return (
    <>
      <header>Header</header>

      <div>
        <Outlet />
      </div>
      
      <footer>Footer</footer>
     
    </>
  );
}