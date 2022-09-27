// 创建粒子光
export function createLights(scene) {
    let ambientLight = new THREE.AmbientLight(0xe0ffff, 0.6)
    scene.add(ambientLight)

    let pointLight1 = new THREE.PointLight(0xe0ffff, 0.1, 20) 
    pointLight1.position.set(-2, 3, 2)

    scene.add(pointLight1)

    let pointLight2 = new THREE.PointLight(0xe0ffff, 0.1, 20) 
    pointLight2.position.set(0, 3, -6)
    scene.add(pointLight2)

    let pointLight3 = new THREE.PointLight(0xe0ffff, 0.1, 20) 
    pointLight3.position.set(-12, 3, 6)
    scene.add(pointLight3)

    let pointLight4 = new THREE.PointLight(0xe0ffff, 0.1, 20) 
    pointLight4.position.set(-12, 4, -4)
    scene.add(pointLight4)

    let pointLight5 = new THREE.PointLight(0xe0ffff, 0.1, 20) 
    pointLight5.position.set(12, 4, -8)
    scene.add(pointLight5)

    let pointLight6 = new THREE.PointLight(0xe0ffff, 0.1, 20) 
    pointLight6.position.set(12, 4, 0)
    scene.add(pointLight6)

    let pointLight7 = new THREE.PointLight(0xe0ffff, 0.1, 20) 
    pointLight7.position.set(12, 4, 8)
    scene.add(pointLight7)
}