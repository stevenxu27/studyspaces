import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import NavBar from '../components/NavBar.tsx';
import SideBar from '../components/SideBar.tsx';
import MainSection from '../components/MainSection.tsx';
import ChatBar from '../components/ChatBar.tsx';

export default function Main() {
    return (
        <>
            <NavBar/>
            <div id="background">
                <SideBar/>
                <MainSection/>
                <MapContainer
                    id="map"
                    center={[49.2674, -123.2499,13]}
                    zoom={13}
                    style={{ height: '100%', width: '100%' }}
                >
                    <TileLayer
                        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                        maxZoom="19"
                        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    />
                    <Marker position={[49.2674, -123.2499]} />
                </MapContainer>
            </div>
        </>
    );
}
