import { Outlet } from "react-router-dom"
export default function Layout(){
    return (
        <>
            <main className="bg-secondary w-screen min-h-screen">
                <Outlet />
            </main>
        </>
    )
}