let rotationAngle = 0;

export const _updateUI = function (element, content, topPart, bottomPart) {
    rotationAngle += 180;
    topPart.style.transform = `rotateX(${rotationAngle}deg)`;
    bottomPart.style.transform = `rotateX(${rotationAngle}deg)`;
    if(content < 10) {
        element.innerHTML = "0" + content;
    } else {
        element.innerHTML = content;
    }
}