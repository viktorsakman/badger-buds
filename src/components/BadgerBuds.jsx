import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"

import BadgerBudsNavbar from "./nav/BadgerBudsNavbar"
import BadgerBudsDataContext from "../contexts/BadgerBudsDataContext"
import alternateCatData from "./alternateCatData.json"

export default function BadgerBuds() {

    const [buds, setBuds] = useState([]);
    
    useEffect(() => {
        fetch('https://cs571.org/api/f23/hw5/buds')
        .then(res => res.json())
        .then(cats => {
            setBuds(cats)
        })
        .catch(err => {
            // Fallback to hardcoded data if the API is not fetching. Ensures that functionality still exists
            // and can be demonstrated.
            console.log('API fetch failed, using alternative hardcoded data:', err)
            setBuds(alternateCatData);  
        });
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