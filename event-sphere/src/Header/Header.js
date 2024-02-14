import { Outlet } from "react-router-dom";

export default function Header() {
    return(
        <>
            <p>Header</p>
            <Outlet />
        </>
    )
}