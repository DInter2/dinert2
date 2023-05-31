// import { Box, Paper, Typography } from '@mui/material'
// import { LatLngExpression, Map } from 'leaflet'
// import React, { useCallback, useEffect, useMemo, useState } from 'react'
// import { MapContainer, TileLayer, useMap } from 'react-leaflet'
// import Mapper from '../Map'

// const LatLogMarke = ({map}: {map: Map}) => {
//   const center: LatLngExpression = [51.505, -0.09]
//   const zoom = 13
//   const [position, setPosition] = useState(() => map.getCenter())
//   const onClick = useCallback(() => {
//     map.setView(center, zoom)
//   }, [map, center, zoom])

//   const onMove = useCallback(() => {
//     setPosition(map.getCenter())
//   }, [map])

//   useEffect(() => {
//     map.on('move', onMove)
//     return () => {
//       map.off('move', onMove)
//     }
//   }, [map, onMove])
//   return (
//     <p>
//       latitude: {position.lat.toFixed(4)}, longitude: {position.lng.toFixed(4)}{' '}
//       <button onClick={onClick}>reset</button>
//     </p>
//   )
// }
// export function ExternalStateExample() {
//   const center: LatLngExpression = [51.505, -0.09]
//   const zoom = 13
//   const [map, setMap] = useState<Map>()

//   const displayMap = useMemo(
//     () => (
//       <Box sx={{bgcolor:"transparent"}}>
//       <Typography sx={{bgcolor:"transparent", pb: 1}} color="text.secondary">Mapa</Typography>
//       <Paper>
//       <MapContainer
//        center={center}
//        scrollWheelZoom={false}
//        style={{ height: '70vh', width: '100wh' }}
//         zoom={zoom}
//         ref={()=>setMap}>
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//       </MapContainer>
//       </Paper>
//     </Box>
//     ),
//     [zoom, center],
//   )

//   return (
//     <div>
//       {map ? <LatLogMarke map={map} /> : null}
//      { <Mapper />}
//     </div>
//   )
// }
