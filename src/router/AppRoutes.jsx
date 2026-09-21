import { Route, Routes } from "react-router-dom";

import CustomerLayout from "../layouts/CustomerLayout"
import Home from "../features/home/pages/Home"

export default function AppRoutes() {

    return (
        <Routes >

            <Route path="/" element={<CustomerLayout />} >
                <Route index element={<Home />} />

                <Route />
            </Route>

        </Routes>

    )
}