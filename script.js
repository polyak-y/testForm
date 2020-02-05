window.onload = function () {
  const images = [
    'https://www.nastol.com.ua/pic/201203/1600x900/nastol.com.ua-18052.jpg',
    'https://avatars.mds.yandex.net/get-pdb/245485/2c4727bd-e6fd-4d9f-a71b-682bd219a9d0/s1200?webp=false',
    'https://backiee.com/static/wpdb/wallpapers/1000x563/190708.jpg',
    'https://i.pinimg.com/originals/18/e5/76/18e576a5623628b6f4975c09a2e39921.jpg'
  ]

  const timeOpen = Date.now();
  const timeLoad = localStorage.getItem('loadTime') || Date.now();

  const elapsedTime = (timeOpen - timeLoad) / 1000 / 60 / 60;

  if((!localStorage.getItem('loadTime') || !localStorage.getItem('imgSrc')) || elapsedTime > 8) {
     localStorage.setItem('loadTime', timeOpen);
     localStorage.setItem('imgSrc', images[Math.floor(Math.random() * images.length)])
  }
 
  const containerFon = this.document.querySelector('.container__fon')
  let img = new Image();
  img.src = localStorage.getItem('imgSrc')  

  img.onload = function () {   
    containerFon.style.backgroundImage = `url(${img.src})`;
    containerFon.classList.add('load');    
  }
}