import { BrowserRouter, Route, Routes } from "react-router-dom";

import BadgerBuds from "../BadgerBuds";
import BadgerBudsLanding from "./pages/BadgerBudsLanding"
import BadgerBudsAdoptable from "./pages/BadgerBudsAdoptable"
import BadgerBudsBasket from "./pages/BadgerBudsBasket"
import BadgerBudsNoMatch from "./pages/BadgerBudsNoMatch"

export default function BadgerBudsRouter() {
    return <BrowserRouter>
        <Routes>
            <Route path="/badger-buds/" element={<BadgerBuds />}>
                <Route index element={<BadgerBudsLanding />} />
                <Route path="/badger-buds/available-cats" element={<BadgerBudsAdoptable />} />
                <Route path="/badger-buds/basket" element={<BadgerBudsBasket />} />
                <Route path="*" element={<BadgerBudsNoMatch />} />
            </Route>
        </Routes>
    </BrowserRouter>
}