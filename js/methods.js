// 加载模型
export function createObjects(scene) {
    const loader = new THREE.GLTFLoader();
    loader.load(
        'model/gallery.glb',
        gltf => {
            gltf.scene.traverse(child => {
            switch(child.name) {
                case 'walls': // 模型物体
                    initWalls(child)
                    break
                case 'stairs': // 模型
                    initStairs(child)
                    break
            }
            //设置展画边框贴图
            if(child.name.includes('paint')) {
                initFrames(child)
            }
            //设置展画图片贴图
            if(child.name.includes('draw')) {
                initDraws(child)
            }
        })
            scene.add(gltf.scene)
        }
    )
}
// 加载可点地板的模型
export function createColliders(scene,colliders) {
    const loader = new THREE.GLTFLoader()
    loader.load(
        'model/collider.glb',
        gltf => {
            gltf.scene.traverse(child => {
                if(child.name.includes('collider')) {
                    colliders.push(child);
                }
            })
            colliders.forEach(item=> {
                item.visible = false
                scene.add(item)
            });
            console.log(colliders);
        }
    )
}

// 边框
function initFrames(child) {
    child.material = new THREE.MeshBasicMaterial({
        color: 0x7f5816
    })
}
function initStairs(child) {
    // 设置楼梯材质
    child.material = new THREE.MeshStandardMaterial({
        color: 0x7f5816
    })
    // 设置金属性
    child.material.roughness = 0.5
    child.material.metalness = 0.6
}
function initWalls(child) {
    // 设置模型材质颜色
    child.material = new THREE.MeshStandardMaterial({
        color: 0xffffff
    })
    // 设置金属性
    child.material.roughness = 0.5
    child.material.metalness = 0.6
}

// 切换展示图
function initDraws(child) {
    const index = child.name.split('draw')[1];
    const texture =  new THREE.TextureLoader().load(`img/${index}.jpg`);
    texture.encoding = THREE.sRGBEncoding;
    texture.flipY = false;
    const material = new THREE.MeshPhongMaterial({
        map: texture
    });
    child.material = material;
}


