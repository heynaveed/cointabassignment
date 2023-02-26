import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import UserDetails from "./UserDetailsPage";

export default function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/details" element={<UserDetails />} />
        </Routes>
    )
}