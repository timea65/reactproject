import React from "react";
import useFetchFavourite from "../../../hooks/useFetchFavourite.jsx";
import Favorites from "./Favorites";
import { Spinner } from "react-bootstrap";


function User () {
    const { destinations, loading, error, setError } = useFetchFavourite();

  const handleFavouriteChange = (id, favourite) => {
    fetch(`http://localhost:3002/destinations/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ favourite: !favourite }),
    })
      .then((response) => response.json())
      .then((updatedDestination) => console.log(updatedDestination));
  };


    return (
        <>
        {loading && (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
        {destinations && destinations.length > 0 ? (
          <Favorites
            destinations={destinations}
            onFavoriteDestination={handleFavouriteChange}
          ></Favorites>
        ):(
          <div> You have not selected any favourite packages</div>
        )}
      </>
    );
}

export default User;