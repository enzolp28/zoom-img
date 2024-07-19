const zoomContainer = document.querySelector('.img-container');
const zoomImg = document.querySelector('.img-container__img');

zoomContainer.addEventListener('mousemove', imgZoomer);

function imgZoomer(e) {
    const zoomContainerInfo = zoomContainer.getBoundingClientRect();

    const x = e.clientX - zoomContainerInfo.left;
    const y = e.clientY - zoomContainerInfo.top;

    const percentageXcontainer = x / zoomContainerInfo.width * 100;
    const percentageYcontainer = y / zoomContainerInfo.height * 100;

    zoomImg.style.transformOrigin = `${percentageXcontainer}% ${percentageYcontainer}%`;

}