export function setFont(text = "My Text",position , scene) {
    const loader = new THREE.FontLoader();
    loader.load('https://cdn.jsdelivr.net/gh/mrdoob/three.js/examples/fonts/helvetiker_regular.typeface.json', function (font) {
        const textGeo = new THREE.TextGeometry(text , {
            font: font,
            size: 0.5,
            height: 0.1,
            curveSegments: 12
        });
        const textMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff });

        const mesh = new THREE.Mesh(textGeo, textMaterial);
        mesh.position.set(...position);
        scene.add(mesh);
    });
}