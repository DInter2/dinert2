'use client'
import * as leaflet from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, ImageOverlay, Circle, Polygon } from 'react-leaflet'

import "leaflet/dist/leaflet.css"
import "leaflet/dist/images/marker-shadow.png"

import Box from '@mui/material/Box'
import { useState } from 'react'
import { Paper, Typography } from '@mui/material'
import MyMap from './markers/MyMap'
type LatLng = leaflet.LatLng | null

function LocationMarker() {
  const [position, setPosition] = useState<LatLng>(null)
  const map = useMapEvents({
    click() {
      map.locate()
    },
    locationfound(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, 16)
    },
  })

  return position === null ? null : (
    <Circle center={position} radius={100}>

      <Popup>You are here</Popup>
    </Circle>
  )
}
const Mapper = () => {

  var myIcon = leaflet.icon({
    iconUrl: '/images/drawer.jpg',
    iconSize: [50, 50],
    iconAnchor: [10, 50],
    popupAnchor: [-3, -76],
});
  const bounds = new leaflet.LatLngBounds([40.712216, -74.22655], [40.773941, -74.12544])
  return (
    <Box sx={{bgcolor:"transparent", minWidth: "100%"}}>
      <Typography sx={{bgcolor:"transparent", pb: 1}} color="text.secondary">Mapa</Typography>
      <Paper >
        <MyMap />
      </Paper>
    </Box>
  )
}

export default Mapper
