import Footer from "./footer";
import Header from "./header";

function Layout({ children }) {
    return (
        <div className="mainBanner">
            {/* <div className="layer flex min-h-screen flex-col items-center justify-between min-w-full bg-gray-100 text-gray-50"> */}
            <div className="layer flex min-h-screen flex-col items-center min-w-full bg-gray-100 text-gray-50">
                <Header />
                {children}
                {/* <Footer /> */}
            </div>
        </div>
    );
}
export default Layout;