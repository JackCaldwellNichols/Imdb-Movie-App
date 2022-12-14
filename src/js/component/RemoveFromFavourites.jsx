import React from "react";

const RemoveFromFavourites = () => {
    return (
        <>
        <span className="me-2">Remove from Favourites</span>
            <svg    xmlns="http://www.w3.org/2000/svg" 
                    width="14" 
                    height="14" 
                    fill="red" 
                    className="bi bi-x-square-fill" 
                    viewBox="0 0 16 16">
                    <path 
                        fill-rule="evenodd"
                        d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
                    
            </svg>
        </>
    )
};

export default RemoveFromFavourites; 