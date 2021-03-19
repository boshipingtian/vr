const card = document.querySelectorAll('.card')
const iframe = document.getElementById('iframe')
const loadingImg = document.getElementById('loadingImg')

const url = [
    "https://blog.deepdesigner.top/vr/pages/West Campus/library/index.html",
]

card.forEach((e) => {
    e.addEventListener('click', (res) => {
        console.log(res.path[2].dataset.id)
        let id = res.path[2].dataset.id
        console.log(iframe.src);
        loadingImg.style.opacity = 0.5
        iframe.src = url[id]
    })
})

function iframLoad(e) {
    console.log(e)
    loadingImg.style.opacity = 0
}