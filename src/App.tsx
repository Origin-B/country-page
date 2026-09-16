// component
import { Route, Routes } from "react-router-dom";
import Layout from "./component/layout/Layout";
import MainPage from "./component/main-page/MainPage";
import Country from "./component/country-page/Country";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />

          <Route path="country/:id" element={<Country />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
