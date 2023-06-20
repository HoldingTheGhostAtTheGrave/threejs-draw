export class Threejs {
    scene = null;
    camera = null;
    renderer = null;
    controls = null;
    isAxesHelper = null;
    controls = null;
    el = null;
    cameraPosition = null;
    orbitControls = false;
    constructor({ el, isAxesHelper = false , orbitControls = false , cameraPosition }) {
        this.isAxesHelper = isAxesHelper;
        this.el = document.getElementById(el);
        this.orbitControls = orbitControls ;
        this.cameraPosition = cameraPosition || [2, 2, 6];
        this._init();
        window.addEventListener('resize',() =>  this.resize());
    }
    _init() {
        this.createScene();
        this.createCamera();
        this.createRenderer();
    }
    // 创建场景
    createScene() {
        this.scene = new THREE.Scene();
        if (this.isAxesHelper) {
            // 添加坐标
            const axesHelper = new THREE.AxesHelper(10);
            this.scene.add(axesHelper);
        }
    }
    // 创建相机
    createCamera() {
        this.camera = new THREE.PerspectiveCamera(
            75,
            this.el.offsetWidth / this.el.offsetHeight,
            0.1,
            1000
        );
        this.camera.position.set(...this.cameraPosition);
    }
    resize(){
        this.renderer.setSize(this.el.offsetWidth, this.el.offsetHeight);
        this.renderer.render(this.scene, this.camera);
    }
    // 创建渲染器
    createRenderer() {
        this.renderer = new THREE.WebGLRenderer({
            antialias: false,
        });
        this.renderer.setSize(this.el.offsetWidth, this.el.offsetHeight);
        this.renderer.render(this.scene, this.camera);
        this.renderer.outputEncoding = THREE.sRGBEncoding;
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.el.appendChild(this.renderer.domElement);
        this.orbitControls && this.creacteOrbitControls();
    }
    // 添加控制器
    creacteOrbitControls(){
        this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
        this.controls.autoRotate  = true
        this.controls.enableDamping = true;
        this.controls.maxDistance = 9;
        this.controls.target.set(0, 0.5, 0);
        this.controls.update();
    }
}

 