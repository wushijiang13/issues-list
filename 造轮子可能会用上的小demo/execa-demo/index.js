/**
 * execa 执行自动下载依赖
 */
let execa=require('execa');
let ProgressBar = require('progress');
require('colors');


/***
 * node 进度条
 * @type {ProgressBar}
 */
function updateProgressBar(){
    let bar = new ProgressBar('当前下载进度: :bar :percent', { total: 40 , complete: "█",incomplete:"░"});
    let timer = setInterval(function () {
        bar.tick();
        if (bar.complete) {
            console.log('\n完成\n');
            clearInterval(timer);
        }
    }, 100);
}

// updateProgressBar();

/***
 * node 有颜色的进度条
 * 依赖于colors
 * @type {ProgressBar}
 */
function colorProgressBar(){
    let bar = new ProgressBar('当前下载进度: :bar '+':percent'.green, {
        total: 40 ,
        complete: "█".green,
        incomplete:"░".red});
    let timer = setInterval(function () {
        bar.tick();
        if (bar.complete) {
            console.log('\n完成\n');
            clearInterval(timer);
        }
    }, 100);
}
colorProgressBar();



/***
 * 子线程 执行 npm i 并显示下载进度
 *
 * @returns {Promise<void>}
 */
async function init() {
    execa('npm',['i'], { stdio: 'inherit' })
    // let execaInfo= await execa('npm',['i']);
    // console.log(execaInfo.stderr.split('\n'));
}

// init();
