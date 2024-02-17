import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { Autocomplete } from '@react-google-maps/api';
import { useState, useEffect, useCallback } from "react";

const containerStyle = {
    width: '360px',
    height: '360px'
};

const markers = [{
    lat: 22.9448082,
    lng: 88.7377942
},
{
    lat: 22.5448082,
    lng: 88.3377942
},
{
    lat: 22.1448082,
    lng: 88.9377942
}]


const Map = ({ positions = markers, zoom=10 }) => {

    console.log("positions: ", positions);

    const [marker, setmarker] = useState(positions);

    useEffect(() => {
        setmarker(positions)
    }, [positions])

    var center = { lat: 0, lng: 0 }
    positions.forEach((item, index) => {
        center = { lat: center["lat"]+item["lat"], lng: center["lng"]+item["lng"]  }
    })
    center = { lat: center["lat"]/positions.length, lng: center["lng"]/positions.length }


    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBLnhXQjitfuEHMz3dQKLlquraQ8Yzk03Q"
    })

    const [map, setMap] = useState(null)

    const onLoad = useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(marker);
        map.fitBounds(bounds);

        setMap(map)
    }, [])

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])

    return (

        <div className="h-[12rem] bg-slate-200 my-[1rem]">
            {
                isLoaded ? (
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={zoom}
                        // onLoad={onLoad}
                        onUnmount={onUnmount}
                    >

                        {marker.map((item, index) => {
                            return (
                                <Marker
                                    // key="marker_1"
                                    position={item}

                                />
                            )
                        })}
                        <></>
                    </GoogleMap>
                ) : <></>
            }
        </div>
    )
}

export default Map