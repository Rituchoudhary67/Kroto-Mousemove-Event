
const example = document.getElementById("another-id");

document.addEventListener("mousemove" , (event) => {
    const { screenX } = event;
    example.style.width = `${screenX}px`
})