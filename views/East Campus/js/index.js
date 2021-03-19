const card = document.querySelectorAll('.card')
const iframe = document.getElementById('iframe')
const loadingImg = document.getElementById('loadingImg')
const svg = document.getElementById('button')

const url = [
    "https://blog.deepdesigner.top/vr/pages/East Campus/2, 4 and 10 dorms",
    "https://blog.deepdesigner.top/vr/pages/East Campus/4, 8, 9, 10 dormitories",
    "https://blog.deepdesigner.top/vr/pages/East Campus/canteen",
    "https://blog.deepdesigner.top/vr/pages/East Campus/Library, engineering training center and community",
    "https://blog.deepdesigner.top/vr/pages/East Campus/Library and Building No. 3",
    "https://blog.deepdesigner.top/vr/pages/East Campus/No. 1 Teaching Building",
    "https://blog.deepdesigner.top/vr/pages/East Campus/No. 2 Teaching Building",
    "https://blog.deepdesigner.top/vr/pages/East Campus/No. 4 Dormitory and Red Building",
    "https://blog.deepdesigner.top/vr/pages/East Campus/East school playground",
    "https://blog.deepdesigner.top/vr/pages/East Campus/Teaching, library and community",
]

card.forEach((e) => {
    e.addEventListener('click', (res) => {

        let id = res.path[2].dataset.id
        loadingImg.style.opacity = 0.5
        iframe.src = url[id]
    })
})

function iframLoad(e) {
    loadingImg.style.opacity = 0
}


function slideDown(e) {
    console.log(123);
}