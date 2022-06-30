const BASE_URL = 'https://thatcopy.pw/catapi/rest/'
const changeCat = document.getElementById('change-cat');

const changeImg = async () => {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();
        return json.webpurl;
    } catch (e) {
        console.log(e);
    }
}

const loadImg = async () => {
    const imgCat = document.getElementById('cat');
    imgCat.src = await changeImg();
}

changeCat.addEventListener('click', loadImg);

loadImg();
