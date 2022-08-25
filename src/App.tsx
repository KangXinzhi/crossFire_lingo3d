import { useRef } from 'react'
import {
  Model,
  OrbitCamera,
  Skybox,
  World,
} from "lingo3d-react"

const App = () => {
  const mapRef = useRef(null)

  return (
    <World>
      <Model
        src="map.glb"
        scale={20}
        physics="map"
        ref={mapRef}
      />
      <OrbitCamera active />
      <Skybox texture="skybox.jpg" />
    </World>
  )
}

export default App
