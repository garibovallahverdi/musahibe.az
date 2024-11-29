import { Outlet, ScrollRestoration } from "react-router-dom"
import Header from "../shared/Header"
import Section from "../app/section"
import Footer from "../shared/Footer"

function MainLayout() {
    return (
        <>
            <Header />
            <Section>
            <Outlet />
            </Section>
            <Footer/>
            <ScrollRestoration/>
        </>
    )
}

export default MainLayout