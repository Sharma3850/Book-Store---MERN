import React from "react";
import Navbar from "../components/navbar";
import Banner from "../components/banner";
import Freebook from "../components/freebooks";
import Footer from "../components/footer";

function Home() {
    return (
        <>
            <div>
                <Navbar />
                <br />
                <Banner />
                <br />
                <Freebook />
                <br />
                <Footer />
            </div>
        </>
    )
}

export default Home;