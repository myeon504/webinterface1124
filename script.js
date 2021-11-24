const LOADER = document.getElementById('js-loader');

var cakeModel;

var MODEL_PATH = "cake_modeling.glb";

var loaded = false;

document.getElementById("palettecolor1").style.display="none";
document.getElementById("palettecolor2").style.display="none";
document.getElementById("gardencolor1").style.display="none";
document.getElementById("gardencolor2").style.display="none";
document.getElementById("gardencolor3").style.display="none";
document.getElementById("gardenDesign").style.display="none";

function checkedSolid(){
  document.getElementById("palettecolor1").style.display="none";
  document.getElementById("palettecolor2").style.display="none";
  document.getElementById("gardencolor1").style.display="none";
  document.getElementById("gardencolor2").style.display="none";
  document.getElementById("gardencolor3").style.display="none";
  document.getElementById("gardenDesign").style.display="none";
  document.getElementById("cBase").value="#f1f1f1";
  document.getElementById("cTop").value="#f1f1f1";
  document.getElementById("cSide").value="#f1f1f1";
  document.getElementById("cBottom").value="#f1f1f1";
  MTL_1.color.set(0xf1f1f1);
  MTL_2.color.set(0xf1f1f1);
  MTL_3.color.set(0xf1f1f1);
  MTL_4.color.set(0xf1f1f1);
  cakeModel.traverse(function(child){
    if(child instanceof THREE.Mesh){
      if(child.name.includes("palette")||child.name.includes("garden")){
        child.visible = false;
      } else {
        child.visible = true;
      }
    }
  });
}

function checkedPalette(){
  document.getElementById("palettecolor1").style.display="flex";
  document.getElementById("palettecolor2").style.display="flex";
  document.getElementById("gardencolor1").style.display="none";
  document.getElementById("gardencolor2").style.display="none";
  document.getElementById("gardencolor3").style.display="none";
  document.getElementById("gardenDesign").style.display="none";
  document.getElementById("cBase").value="#f1f1f1";
  document.getElementById("cTop").value="#f1f1f1";
  document.getElementById("cSide").value="#f1f1f1";
  document.getElementById("cBottom").value="#f1f1f1";
  document.getElementById("cPalette1").value="#f1f1f1";
  document.getElementById("cPalette2").value="#f1f1f1";
  MTL_1.color.set(0xf1f1f1);
  MTL_2.color.set(0xf1f1f1);
  MTL_3.color.set(0xf1f1f1);
  MTL_4.color.set(0xf1f1f1);
  MTL_5.color.set(0xf1f1f1);
  MTL_6.color.set(0xf1f1f1);
  cakeModel.traverse(function(child){
    if(child instanceof THREE.Mesh){
      if(child.name.includes("palette")){
        child.visible = true;
      }
      else if(child.name.includes("garden")){
        child.visible = false;
      }
    }
  })
}

function checkedGarden(){
  document.getElementById("palettecolor1").style.display="none";
  document.getElementById("palettecolor2").style.display="none";
  document.getElementById("gardencolor1").style.display="flex";
  document.getElementById("gardencolor2").style.display="flex";
  document.getElementById("gardencolor3").style.display="flex";
  document.getElementById("gardenDesign").style.display="block";
  document.getElementById("cBase").value="#f1f1f1";
  document.getElementById("cTop").value="#f1f1f1";
  document.getElementById("cSide").value="#f1f1f1";
  document.getElementById("cBottom").value="#f1f1f1";
  document.getElementById("cGarden1").value="#f1f1f1";
  document.getElementById("cGarden2").value="#f1f1f1";
  document.getElementById("cGarden3").value="#f1f1f1";
  MTL_1.color.set(0xf1f1f1);
  MTL_2.color.set(0xf1f1f1);
  MTL_3.color.set(0xf1f1f1);
  MTL_4.color.set(0xf1f1f1);
  MTL_7.color.set(0xf1f1f1);
  MTL_8.color.set(0xf1f1f1);
  MTL_9.color.set(0xf1f1f1);
  cakeModel.traverse(function(child){
    if(child instanceof THREE.Mesh){
      if(child.name.includes("garden")){
        child.visible = true;
      }
      else if(child.name.includes("palette")){
        child.visible = false;
      }
    }
  })
}

const scene = new THREE.Scene();
const canvas = document.querySelector('#c');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha : true });
renderer.setClearColor(0x000000, 0);
renderer.shadowMap.enabled = true;
renderer.setPixelRatio(window.devicePixelRatio);


var cameraFar = 5;

document.body.appendChild(renderer.domElement);

var camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = cameraFar;
camera.position.y = 55;

let MTL_1 = new THREE.MeshLambertMaterial({color: 0xf1f1f1});
let MTL_2 = new THREE.MeshLambertMaterial({color: 0xf1f1f1});
let MTL_3 = new THREE.MeshLambertMaterial({color: 0xf1f1f1});
let MTL_4 = new THREE.MeshLambertMaterial({color: 0xf1f1f1});
let MTL_5 = new THREE.MeshLambertMaterial({color: 0xf1f1f1});
let MTL_6 = new THREE.MeshLambertMaterial({color: 0xf1f1f1});
let MTL_7 = new THREE.MeshLambertMaterial({color: 0xf1f1f1});
let MTL_8 = new THREE.MeshLambertMaterial({color: 0xf1f1f1});
let MTL_9 = new THREE.MeshLambertMaterial({color: 0xf1f1f1});

function selectBaseColor(a){
  MTL_1.color.set(a);
}
function selectTopColor(b){
  MTL_2.color.set(b);
}
function selectSideColor(c){
  MTL_3.color.set(c);
}
function selectBottomColor(d){
  MTL_4.color.set(d);
}
function selectColor1Color(e){
  MTL_5.color.set(e);
}
function selectColor2Color(f){
  MTL_6.color.set(f);
}
function selectGarden1Color(g){
  MTL_7.color.set(g);
}
function selectGarden2Color(h){
  MTL_8.color.set(h);
}
function selectGarden3Color(i){
  MTL_9.color.set(i);
}

let INITIAL_MAP = [
{ childID: "base", mtl: MTL_1},
{ childID: "cream_t", mtl: MTL_2},
{ childID: "cream_s", mtl: MTL_3},
{ childID: "cream_b", mtl: MTL_4},
{ childID: "palette_1", mtl: MTL_5},
{ childID: "palette_2", mtl: MTL_6},
{ childID: "garden_1", mtl: MTL_7},
{ childID: "garden_2", mtl: MTL_8},
{ childID: "garden_3", mtl: MTL_9}];

var loader = new THREE.GLTFLoader();

loader.load(MODEL_PATH, function (gltf) {
  cakeModel = gltf.scene;

  cakeModel.traverse(o => {
    if (o.isMesh) {
      o.castShadow = true;
      o.receiveShadow = true;
    }
  });

  cakeModel.traverse(function(child){
    if(child instanceof THREE.Mesh){
      if(child.name.includes("palette")||child.name.includes("garden")){
        child.visible = false;
      }
    }
  })
  
  cakeModel.scale.set(0.1, 0.1, 0.1);
  cakeModel.rotation.y = Math.PI;
  cakeModel.position.y = 3.5;
  

  for (let object of INITIAL_MAP) {
    initColor(cakeModel, object.childID, object.mtl);
  }

  function initColor(parent, type, mtl) {
  parent.traverse(o => {
    if (o.isMesh) {
      if (o.name.includes(type)) {
        o.material = mtl;
        o.nameID = type;
      }
    }
  });
}


  scene.add(cakeModel);

  LOADER.remove();

}, undefined, function (error) {
  console.error(error);
});

var hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.6);
hemiLight.position.set(0, 50, 0);  
scene.add(hemiLight);

var dirLight = new THREE.DirectionalLight(0xffffff, 0.5);
dirLight.position.set(-20, 30, 20);
dirLight.castShadow = true;
dirLight.shadow.mapSize = new THREE.Vector2(1920, 1920); 
dirLight.shadow.radius = 2;
scene.add(dirLight);

var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.maxPolarAngle = Math.PI / 2.5;
controls.minPolarAngle = Math.PI / 4.5;
controls.minDistance = 38;
controls.maxDistance = 48;
controls.enableDamping = true;
controls.enablePan = false;
controls.dampingFactor = 0.1;
controls.autoRotate = true;
controls.autoRotateSpeed = 3;

function animate() {

  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);

  if (resizeRendererToDisplaySize(renderer)) {
    const canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
  }
}

animate();

function resizeRendererToDisplaySize(renderer) {
  const canvas = renderer.domElement;
  var width = window.innerWidth;
  var height = window.innerHeight;
  var canvasPixelWidth = canvas.width / window.devicePixelRatio;
  var canvasPixelHeight = canvas.height / window.devicePixelRatio;

  const needResize = canvasPixelWidth !== width || canvasPixelHeight !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
  }
  return needResize;
}

const prevBtn = document.querySelector(".prev-button");
const nextBtn = document.querySelector(".next-button");
const container = document.querySelector(".page-container");
(function addEvent(){
  prevBtn.addEventListener('click', translateContainer.bind(this, 1));
  nextBtn.addEventListener('click', translateContainer.bind(this, -1));
})();

function translateContainer(direction){
  const selectedBtn = (direction === 1) ? 'prev' : 'next';
  container.style.transitionDuration = '400ms';
  container.style.transform = `translateX(${direction * (219 / 2)}%)`;
  container.ontransitionend = () => reorganizeEl(selectedBtn);
}

function reorganizeEl(selectedBtn) {
  container.removeAttribute('style');
  (selectedBtn === 'prev') ? 
  container.insertBefore(container.lastElementChild, container.firstElementChild)
  : container.appendChild(container.firstElementChild);
}

var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
if (!isChrome){
    $('#iframeAudio').remove()
}
else {
    $('#playAudio').remove()}