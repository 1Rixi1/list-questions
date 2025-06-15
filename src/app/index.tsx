import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "@/app/providers/router/app-router.tsx";

export const App = () => {
  return (
    <div>
      <h1>App</h1>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
};
