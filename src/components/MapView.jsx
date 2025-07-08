import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapView = () => {
  const position = [36.895, 8.443]; // Coordonnées d’El Kala

  return (
    <MapContainer
      center={position}
      zoom={11}
      style={{ height: "200px", width: "100%", borderRadius: "16px" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}>
        <Popup>
          Ville d’El Kala 🇩🇿
          <br /> Plages, nature et culture.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapView;
