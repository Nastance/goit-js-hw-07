const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryRef = document.querySelector('#gallery');

const makeImgEl = imgEl => {
  
  return `<li>
  <img src='${imgEl.url}'
  alt='${imgEl.alt}'>
  </li>`
};

const makeImges = images.map(makeImgEl).join("");
galleryRef.insertAdjacentHTML('afterbegin', makeImges);

console.log(makeImges);







// const imagesArr = images.map(el => {
//   const elemLi = document.createElement('li');
//   const elemImg = document.createElement('img');
//   elemImg.setAttribute('url', el.url);
//   elemImg.setAttribute('alt', el.alt);
//   elemLi.append(elemImg);
//   console.log(elemLi);
//   return elemLi
// });
