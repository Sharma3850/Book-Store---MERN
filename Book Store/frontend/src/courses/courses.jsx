import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import data from "../../public/list.json"
import Cards from "../components/cards";

function AllCourses() {
    return (
        <>
            <div>
                <Navbar />
                <br />

                <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-12 items-center justify-center text-center">
                    <h1 className="mt-16 font-semibold text-2xl md:text-4xl ">We're delight to have you <span className="text-pink-500">here! :)</span></h1>
                    <p className="mt-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quibusdam aspernatur error reiciendis aperiam, neque aut nulla tenetur. Necessitatibus natus rerum iusto nulla exercitationem voluptate provident velit. Voluptatem, quis voluptatum.</p>

                    <div className="mt-12 rounded-md grid grid-cols-1 md:grid-cols-3">

                        {data.map((item) => (
                            <Cards item={item} key={item.id} />
                        ))}

                    </div>
                </div>

                <Footer />
            </div>
        </>
    )
}

export default AllCourses;