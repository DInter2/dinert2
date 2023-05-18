
import { LatLngBoundsExpression, LatLngExpression } from 'leaflet'

import { MapContainer, LayersControl, TileLayer, Marker, Popup, LayerGroup, Circle, FeatureGroup, Rectangle } from 'react-leaflet'


const PoligonController = () => {
  const center: LatLngExpression = [-8.322055, -38.055547]
  const rectangle: LatLngBoundsExpression = [
    [-8.322055, -38.055547],
    [-8.321055, -38.054547],
  ]
  return (
   <>
    <LayersControl position="topright">
      <LayersControl.Overlay name="Marker with popup">
        <Marker position={center}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </LayersControl.Overlay>
      <LayersControl.Overlay checked name="Layer group with circles">
        <LayerGroup>
          <Circle
            center={center}
            pathOptions={{ fillColor: 'blue' }}
            radius={200}
          />
          <Circle
            center={center}
            pathOptions={{ fillColor: 'red' }}
            radius={100}
            stroke={false}
          />
          <LayerGroup>
            <Circle
              center={[-8.321055, -38.054547]}
              pathOptions={{ color: 'green', fillColor: 'green' }}
              radius={100}
            />
          </LayerGroup>
        </LayerGroup>
      </LayersControl.Overlay>
      <LayersControl.Overlay name="Feature group">
        <FeatureGroup pathOptions={{ color: 'purple' }}>
          <Popup>Popup in FeatureGroup</Popup>
          <Circle center={[-8.320055, -38.054547]} radius={200} />
          <Rectangle bounds={rectangle} />
        </FeatureGroup>
      </LayersControl.Overlay>
    </LayersControl>
   </>
  )
}

export default PoligonController
