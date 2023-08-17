import "./Layout.css";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";

export default function Layout() {
    return (
        <div className="layout">
            <header><Navbar /></header>
            <main><Outlet /></main>
        </div>
    );
}
