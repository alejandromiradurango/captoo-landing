import { Outlet } from 'react-router-dom'
import { Footer, Header } from "../../components"
import { Toaster } from 'react-hot-toast'

const Layout = () => {
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
            {/* <Contact /> */}
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <Footer />
        </div>
    )
}

export default Layout