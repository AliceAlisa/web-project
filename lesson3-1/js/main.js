import '../css/style.scss'
import src1 from '../img/1.jpg'
import src2 from '../img/2.jpg'
import src3 from '../img/3.jpg'
import sound2 from '../sounds/2.mp3'
import sound3 from '../sounds/3.mp3'
import video1 from '../videos/1.mp4'
import video2 from '../videos/2.mp4'

let items = [
    {
        type: "img",
        title: 'Autumn forest',
        srcItem: src1
    },
    {
        type: "img",
        title: 'Mountains',
        srcItem: src2
    },
    {
        type: "img",
        title: 'Village',
        srcItem: src3
    },
    {
        type: "sound",
        title: 'River sounds',
        srcItem: sound2
    },
    {
        type: "sound",
        title: 'Evening sounds',
        srcItem: sound3
    },
    {
        type: "video",
        title: 'Pickle Rick',
        srcItem: video1
    },
    {
        type: "video",
        title: 'Get Schwifty',
        srcItem: video2
    },

];

let box = document.getElementById('gallery');

function makeGallery(items) {
    items.forEach(el => {
        if (el.type == "img") {
            let inner = `<div class="item">
        <img src=${el.srcItem} alt="photo">
        <h4 class="item-titel">${el.title}</h4>
        </div>`;
            box.innerHTML += inner;
        } else if (el.type == "sound") {
            let inner = `<div class="item">
            <audio controls class="audio">
            <source src=${el.srcItem} type="audio/mpeg">
          Your browser does not support the audio element.
          </audio>
          <h4 class="item-titel">${el.title}</h4>
          </div>`;
            box.innerHTML += inner;
        } else if (el.type == "video") {
            let inner = `<div class="item">
            <video width="300" height="200" controls>
            <source src=${el.srcItem} type="video/mp4">
          Your browser does not support the video tag.
          </video>
          <h4 class="item-titel">${el.title}</h4>
          </div>`;
            box.innerHTML += inner;
        } else {
            let inner = `<div class="item">
          <h4 class="item-titel">Неизвестный формат</h4>
          </div>`;
            box.innerHTML += inner;
        }
    })
}
makeGallery(items);
