import * as leaflet from 'leaflet'
import { Polygon, Tooltip } from 'react-leaflet'
type Points = leaflet.LatLngExpression[] | leaflet.LatLngExpression[][] | leaflet.LatLngExpression[][][]
const PoligonMarker = () => {
  const multiPolygon: Points = [
    [
      [51.53, -0.15],
      [51.55, -0.12],
      [51.51, -0.10],
      [51.53, -0.15],
    ],
    [
      [51.544, -0.07],
      [51.544, -0.025],
      [51.508, -0.025],
      [51.508, -0.07],
    ],
  ]
  const purpleOptions = { color: 'purple' }
  return (
    <Polygon pathOptions={{ color: 'purple' }} positions={multiPolygon}>
      <Tooltip sticky>sticky Tooltip for Polygon</Tooltip>
    </Polygon>
  )
}

export default PoligonMarker
