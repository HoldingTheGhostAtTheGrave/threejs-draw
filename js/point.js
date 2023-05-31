// 定义Point类
class Point {
    constructor() {
        this.range = 3000; // 分布半径
        this.center = { // 分布中心
            x: 0,
            y: 0,
            z: 0,
        }
        this.position = { // 粒子位置
            x: Math.random() * 2 * this.range + this.center.x - this.range,
            y: Math.random() * 2 * this.range + this.center.y - this.range,
            z: Math.random() * 2 * this.range + this.center.z - this.range
        };
        this.speed = { // 粒子移动速度
            x: Math.random() * 10 - 5,
            y: Math.random() * 10 - 5,
            z: Math.random() * 10 - 5,
        }
        this.color = '#aaa';// 粒子颜色
        this.createTime = Date.now(); // 粒子创建时间
        this.updateTime = Date.now(); // 上次更新时间
    }
    // 更新粒子位置
    updatePosition() {
        const time = Date.now() - this.updateTime
        this.updateTime = Date.now()
        this.position.x += this.speed.x * time / 1000
        this.position.y += this.speed.y * time / 1000
        this.position.z += this.speed.z * time / 1000
    }
}


export function point(scene) {
    // 批量创建粒子
    const vertices = []
    for (let i = 0; i < (window.innerWidth > 1200 ? 10000 : 2000); i++) {
        vertices.push(new Point())
    }

    // 先创建一个空的缓冲几何体
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array([]), 3)); // 一个顶点由3个坐标构成


    const texture = new THREE.TextureLoader().load(`img/images/${parseInt(Math.random() * 9) + 1}.jpg`)
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.encoding = THREE.sRGBEncoding;
	texture.flipY = false;
    // uv两个方向纹理重复数量
    texture.repeat.set(1, 1);
    // 创建材质
    const material = new THREE.PointsMaterial({
        color: '',
        size: 15,
        map: texture, // 纹理图
        transparent: true,// 开启透明度
        depthWrite: false,
        side: THREE.DoubleSide
    });

    // 创建点，并添加进场景
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // 不间断更新粒子位置
    const render = () => {
        const list = []
        vertices.forEach(point => {
            point.updatePosition()
            const { x, y, z } = point.position
            list.push(x, y, z)
        })

        // 粒子位置更新入几何体
        geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(list), 3));
        requestAnimationFrame(render);
    };
    render();
}