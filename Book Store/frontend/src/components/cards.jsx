import React from "react";

function Cards({item}) {
    // console.log(item);
    
    return (
        <>
            <div className="mt-0">
                <div className="card bg-base-100 w-45 shadow-xl scale-90 hover:scale-95 duration-200 dark:bg-slate-900 dark:text-white dark:border">
                    <figure>
                        <img
                            src={item.image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge badge-secondary">{item.category}</div>
                        </h2>
                        <p>Author : {item.author}</p>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline">${item.price}</div>
                            <div className="cursor-pointer badge badge-outline p-3 hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards;