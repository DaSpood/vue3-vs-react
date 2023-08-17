import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomeView from "./views/HomeView";
import TableView from "./views/TableView";
import PopupView from "./views/PopupView";
import FormView from "./views/FormView";
import BrokenView from "./views/BrokenView";
import NoView from "./views/NoView";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomeView />} />
                    <Route path="table" element={<TableView />} />
                    <Route path="popup" element={<PopupView />} />
                    <Route path="form" element={<FormView />} />
                    <Route path="broken" element={<BrokenView />} />
                    <Route path="*" element={<NoView />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
