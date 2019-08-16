import { Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh } from 'three'
import React from 'react'

class First extends React.Component {
    scene = null
    camera = null
    renderer = null

    constructor() {
        super()
    }

    componentDidMount() {
        this.scene = new Scene()
        this.camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        this.renderer = new WebGLRenderer()

        this.renderer.setSize(window.innerWidth, window.innerHeight)
        this.mount.appendChild(this.renderer.domElement)

        this.geometry = new BoxGeometry( 1, 1, 1 )
        this.material = new MeshBasicMaterial( { color: 0x00ff00 } )
        this.cube = new Mesh( this.geometry, this.material )
        this.scene.add( this.cube )

        this.camera.position.z = 5

        const this_ = this
        let animation = () => {
            requestAnimationFrame(animation)
            this_.cube.rotation.x += 0.01
            this_.cube.rotation.y += 0.01

            this_.renderer.render(this_.scene, this_.camera)
        }

        animation()
    }

    render() {
        return (
            <div ref={(mount) => { this.mount = mount }}></div>
        )
    }
}

export default First