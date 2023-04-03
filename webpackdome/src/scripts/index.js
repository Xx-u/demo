require('../css/index.css');
function setRem() {
    let baseSize = 100
    let basePc = baseSize / 750
    let vW = window.innerWidth
    let vH = window.innerHeight
    let dueH = (vW * 1311) / 750
    if (vH < dueH) {
        vW = (vH * 750) / 1311
    }
    let rem = vW * basePc
    if (rem <= 50) {
        document.documentElement.style.fontSize = '50px'
    } else {
        document.documentElement.style.fontSize = rem + 'px'
    }
}
setRem()
window.onresize = function () {
    setRem()
}