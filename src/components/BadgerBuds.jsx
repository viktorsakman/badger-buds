import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import BadgerBudsNavbar from "./nav/BadgerBudsNavbar";
import BadgerBudsDataContext from "../contexts/BadgerBudsDataContext";

export default function BadgerBuds() {

    const [buds, setBuds] = useState([]);

    useEffect(() => {
        fetch('https://cs571.org/api/f23/hw5/buds', {
            headers: {
                "X-CS571-ID": "bid_608592443fea3ffac959c6020754a63b147a6c9eea3c58de71bf7d09318397bf"
            }
        })
            .then(res => res.json())
            .then(cats => {
                setBuds(cats)
            })
    }, []);

    console.log(buds)

    return <div>
        <BadgerBudsNavbar />
        <div style={{ margin: "1rem" }}>
            <BadgerBudsDataContext.Provider value={buds}>
                <Outlet />
            </BadgerBudsDataContext.Provider>
        </div>
    </div>
}