import '../css/index.css';//导入css 为了监听修改，后续会替换

let canvas = document.querySelector("#weatherCanvas");
let canvasInstance = canvas.getContext("2d");

const pageWidth=window.innerWidth ? window.innerWidth : 0;
const pageHeight=window.innerHeight ? window.innerHeight : 0;

/*
 * 传入宽高 绘制矩形
 */
function rectangle(color1='#545151',color2='#fff') {
    let gradient=canvasInstance.createLinearGradient(0,0,0,170);
    gradient.addColorStop(0,color1);
    gradient.addColorStop(1,color2);
    canvasInstance.fillStyle=gradient;
    canvasInstance.fillRect(0,0,pageWidth,pageHeight);
}

/**
 * 初始化canvas 自身全屏
 */
function initCanvasSize(){
    let canvas = document.querySelector("#weatherCanvas");
    canvas.style.width=pageWidth+"px";
    canvas.style.height=pageHeight+'px';
}

/**
 * 雨点
 */
function raindrops() {

    canvasInstance.beginPath();

    canvasInstance.lineWidth=1;
    canvasInstance.moveTo(10,0)

    canvasInstance.lineTo(10,10)

    canvasInstance.stroke();

}

/**
 * 整体初始化
 */
function init(){
    initCanvasSize();
    rectangle();
    raindrops();
}

init();