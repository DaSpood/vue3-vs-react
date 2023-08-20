import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomeView from "./views/HomeView";
import TableView from "./views/TableView";
import FormView from "./views/FormView";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomeView />} />
                    <Route path="table" element={<TableView />} />
                    <Route path="form" element={<FormView />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
