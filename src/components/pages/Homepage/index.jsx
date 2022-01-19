import "./styles.css";
import { useEffect, useState } from "react";

// Custome components
import { Post } from "../../Post";

export const HomePage = () => {

    // Loading state
    const [loading, setLoading] = useState([]);

    // Pictures from API
    const [pictures, setPictures] = useState([]);

    // fetch data from the API from a use effect hook
    useEffect(
        () => {
            getPictures();
        }, []
    );

    // fetches pictures from the API and formats the data
    const getPictures = async () => {

        try {
            const response = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=NAVCAM&api_key=AcoPa9GB74KhJziYcQk0rI9gJ1xRVSCr1zjCVoaM');
            const data = await response.json();

            let APIdata = data.photos;

            // Sort data by date descending, so that newer photos are always at the top
            APIdata.sort(function(a, b) {
                return new Date(b.earth_date) - new Date(a.earth_date);
            });

            console.log(APIdata);

            // Update local state with pictures
            setPictures(APIdata);

            // Update loading state
            setLoading(false);

        } catch (err) {
            console.log(err);

            // Update loading state
            setLoading(false);
        }

        
    }

    return (
        <div className="homepage">
            <div className="title">
                <h1>Spacetagram</h1>
                <h2>Image sharing from the final frontier</h2>
            </div>
            <div className="picturesContainer">
              {
                loading && <p>Loading data...</p>
              }
              {
                pictures.map((item) => (
                    <Post key={item.id} img_src={item.img_src} date={item.earth_date} camera={item.camera.full_name} rover={item.rover.name}></Post>
                ))
              }
            </div>
        </div>
    )

}