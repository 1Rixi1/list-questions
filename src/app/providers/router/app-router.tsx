import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { config } from "./config.tsx";

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Загрузка страницы ...</div>}>
      <Routes>
        {config.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  );
};
