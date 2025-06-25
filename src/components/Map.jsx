import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
const defaultPosition = [27.7103145, 85.3221634]; // Default position if no location is provided

function SetViewOnLocation({ location }) {
  const map = useMap();
  useEffect(() => {
    if (!location) return;
    map.setView(location || defaultPosition, 15, {
      animate: true,
      duration: 0.5,
    });
  }, [location, map]);
}

function Map({ location }) {
  const position = [location?.lat, location?.lng];
  return (
    <MapContainer
      center={location ? position : defaultPosition}
      className="w-full h-[30rem]"
      zoom={15}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <SetViewOnLocation location={location} />
      {location && (
        <Marker position={position || defaultPosition}>
          <Popup>
            Location: {location.lat}, {location.lng}
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
}

export default Map;
