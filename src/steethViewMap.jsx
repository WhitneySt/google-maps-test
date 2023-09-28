import React from 'react';
import Streetview from "react-google-streetview";

function StreetViewMap() {
    const googleMapsKey = "AIzaSyAMd047JkkjhxDswT9CsIGo27NNn7_nTWo";

    const StreetMapOptions = {
        position: {
            lat: 28.625485,
            lng: 79.821091
        },
        pov: { heading: 100, pitch: 0 },
        zoom: 1,
    };

    return (
        <div>
            <div
                style={{
                    width: "850px",
                    height: "550px",
                    backgroundColor: "#cccccc",
                }}
            >
                <Streetview
                    apiKey={googleMapsKey}
                    streetViewPanoramaOptions={StreetMapOptions}
                />
            </div>
        </div>
    )
}
export default StreetViewMap