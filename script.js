document.addEventListener('DOMContentLoaded', function() {
  const controller = new ScrollMagic.Controller();

  const blurBlockWidth = document.querySelector('.blur-circle').getBoundingClientRect().width;
  const blurBlockHeight = document.querySelector('.blur-circle').getBoundingClientRect().height;
  console.log(blurBlockHeight);

  const menuButton = document.querySelector(".side-map__button");
  const sideMap = document.querySelector(".side-map");
  menuButton.addEventListener("click", function() {
    if (sideMap.className.includes("active")) {
      sideMap.classList.remove("side-map_active");
      menuButton.style.transform = 'rotate(0deg)';
    }
    else {
      sideMap.classList.add("side-map_active");
      menuButton.style.transform = 'rotate(180deg)';
    }
  })

  

  // 1 => 2 экран

  new ScrollMagic.Scene({
    triggerElement: '#section1',
    triggerHook: 0.5,
    duration: 500
  })
  .on('enter', () => {
    document.querySelector('.connect-button2').style = 'pointer-events: all';
    document.querySelector('.demo-button2').style = 'pointer-events: all';
  })
  .on('leave', (event) => {
    if (event.scrollDirection === 'FORWARD') {
      document.querySelector('.connect-button2').style = 'pointer-events: none';
      document.querySelector('.demo-button2').style = 'pointer-events: none';
    }
  })
  .addTo(controller);


  const buttonsHide = gsap.timeline()
  .to('.page-1__buttons', { duration: 0.5, opacity: '0', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section2',
    triggerHook: 1,
    duration: 500
  })
  .setTween(buttonsHide)
  .addTo(controller);

  const sideMapIMages = document.querySelectorAll('.side-map__images-circle');
  new ScrollMagic.Scene({
    triggerElement: '#section2',
    triggerHook: 0.5,
    duration: 500
  })
  .on('enter', () => {
    console.log("section 2");
    sideMapIMages.forEach((elem, index) => {
      if (index === 0) {
        elem.src = './images/side-map-circle-white.svg';
      }
    })
  })
  .on('leave', (event) => {
    if (event.scrollDirection === 'FORWARD') {

    }
    else {
      sideMapIMages.forEach((elem, index) => {
        if (index === 0) {
          elem.src = './images/side-map-circle.svg';
        }
      })
    }
  })
  .addTo(controller);

  const blurCircleTween = gsap.timeline()
    .to('#blurCircle', { duration: 0.5, opacity: '.2', left: "-193px", bottom: "-258px", ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section2',
    triggerHook: 1,
    duration: 500
  })
  .setTween(blurCircleTween)
  .addTo(controller);

  const section1Text = gsap.timeline()
    .to('#section1Text', { duration: 0.5, opacity: '0', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section2',
    triggerHook: 1,
    duration: 750
  })
  .setTween(section1Text)
  .addTo(controller);

  // 2 => 3 экран


  const section2Text = gsap.timeline()
  .to('#section2Text', { duration: 0.5, opacity: '1', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section2',
    triggerHook: 1,
    duration: 500
  })
  .setTween(section2Text)
  .addTo(controller);

  const blurCircleTween2 = gsap.timeline()
    .to('#blurCircle', { duration: 0.5, filter: 'blur(55px)', bottom: "-258px", left: `${window.innerWidth - blurBlockWidth}px`, ease: 'power1.out' });
  new ScrollMagic.Scene({
    triggerElement: '#section3',
    triggerHook: 1,
    duration: 500
  })
  .setTween(blurCircleTween2)
  .addTo(controller);

  const blurCircleTweenHelp2 = gsap.timeline()
    .to('#blurCircleHelp', { duration: 0.5,opacity: '.2' , filter: 'blur(55px)', bottom: "-258px", left: `${window.innerWidth - blurBlockWidth}px`, ease: 'power1.out' });
  new ScrollMagic.Scene({
    triggerElement: '#section3',
    triggerHook: 1,
    duration: 500
  })
  .setTween(blurCircleTweenHelp2)
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: '#section3',
  triggerHook: 1,
  duration: 500
})
.setTween(blurCircleTween2)
.addTo(controller);


new ScrollMagic.Scene({
  triggerElement: '#section3',
  triggerHook: 1,
  duration: 500
})
.setTween(blurCircleTween2)
.addTo(controller);

  const section2TextLowOpacity = gsap.timeline()
  .to('#section2Text', { duration: 0.5, opacity: '0', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section3',
    triggerHook: 1,
    duration: 500
  })
  .setTween(section2TextLowOpacity)
  .addTo(controller);

  const section3Text = gsap.timeline()
  .from('#section3Text', { duration: 0.5, opacity: '0', ease: 'power1.out' })
  .to('#section3Text', { duration: 0.5, opacity: '1', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section3',
    triggerHook: 1,
    duration: 500
  })
  .setTween(section3Text)
  .addTo(controller);


  // 3 => 4 экран


  const section3TextLowOpacity = gsap.timeline()
  .to('#section3Text', { duration: 0.5, opacity: '0', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section4',
    triggerHook: 1,
    duration: 500
  })
  .setTween(section3TextLowOpacity)
  .addTo(controller);

  const section4Text = gsap.timeline()
  .from('#section4Text', { duration: 0.5, opacity: '0', ease: 'power1.out' })
  .to('#section4Text', { duration: 0.5, opacity: '1', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section4',
    triggerHook: 1,
    duration: 500
  })
  .setTween(section4Text)
  .addTo(controller);

  const blurCircleTween3 = gsap.timeline()
    .to('#blurCircle', { duration: 0.5 , filter: 'blur(35px)' ,bottom: "-258px", left: `${window.innerWidth/2 - blurBlockWidth/2}px`, ease: 'power1.out' });
  new ScrollMagic.Scene({
    triggerElement: '#section4',
    triggerHook: 1,
    duration: 500
  })
  .setTween(blurCircleTween3)
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: '#section4',
  triggerHook: 1,
  duration: 500
})
.setTween(blurCircleTween3)
.addTo(controller);


const blurCircleTweenHelp3 = gsap.timeline()
    .to('#blurCircleHelp', { duration: 0.5 , filter: 'blur(35px)' ,bottom: "-258px", left: `${window.innerWidth/2 - blurBlockWidth/2}px`, ease: 'power1.out' });
  new ScrollMagic.Scene({
    triggerElement: '#section4',
    triggerHook: 1,
    duration: 500
  })
  .setTween(blurCircleTweenHelp3)
  .addTo(controller);

  const blurCirclePage4 = gsap.timeline()
    .from('#blurCirclePage4', { duration: 0.5, filter: 'blur(100px)' ,top: `${window.innerHeight}`, ease: 'power1.out' })
    .to('#blurCirclePage4', { duration: 0.5, filter: 'blur(20px)' ,top: `${-blurBlockHeight/2}`,  ease: 'power1.out' });
  new ScrollMagic.Scene({
    triggerElement: '#section4',
    triggerHook: 1,
    duration: 500
  })
  .setTween(blurCirclePage4)
  .addTo(controller);

  // 4 => 5 экран


  const section4TextLowOpacity = gsap.timeline()
  .to('#section4Text', { duration: 0.5, opacity: '0', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section5',
    triggerHook: 1,
    duration: 500
  })
  .setTween(section4TextLowOpacity)
  .addTo(controller);

  const section5Text = gsap.timeline()
  .from('#section5Text', { duration: 0.5, opacity: '0', ease: 'power1.out' })
  .to('#section5Text', { duration: 0.5, opacity: '1', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section5',
    triggerHook: 1,
    duration: 500
  })
  .setTween(section5Text)
  .addTo(controller);

  const blurCircleTween4 = gsap.timeline()
    .to('#blurCircle', { duration: 0.5, filter: 'blur(100px)' ,bottom: `${-blurBlockHeight}`, ease: 'power1.out' });
  new ScrollMagic.Scene({
    triggerElement: '#section5',
    triggerHook: 1,
    duration: 500
  })
  .setTween(blurCircleTween4)
  .addTo(controller);

  const blurCircleTweenHelp4 = gsap.timeline()
    .to('#blurCircleHelp', { duration: 0.5, filter: 'blur(100px)' ,bottom: `${-blurBlockHeight}`, ease: 'power1.out' });
  new ScrollMagic.Scene({
    triggerElement: '#section5',
    triggerHook: 1,
    duration: 500
  })
  .setTween(blurCircleTweenHelp4)
  .addTo(controller);

  const blurCirclePage5 = gsap.timeline()
    .to('#blurCirclePage4', { duration:0.5, filter: 'blur(30px)' ,top: `${-blurBlockHeight}`,  ease: 'power1.out' });
  new ScrollMagic.Scene({
    triggerElement: '#section5',
    triggerHook: 1,
    duration: 500
  })
  .setTween(blurCirclePage5)
  .addTo(controller);


  // 5 => 6 экран

  const section5TextLowOpacity = gsap.timeline()
  .to('#section5Text', { duration: 0.5, opacity: '0', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section6',
    triggerHook: 1,
    duration: 500
  })
  .setTween(section5TextLowOpacity)
  .addTo(controller);

  const section6Text = gsap.timeline()
  .from('#section6Text', { duration: 0.5, opacity: '0', ease: 'power1.out' })
  .to('#section6Text', { duration: 0.5, opacity: '1', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section6',
    triggerHook: 1,
    duration: 500
  })
  .setTween(section6Text)
  .addTo(controller);

  const blurCircleTween5 = gsap.timeline()
    .to('#blurCircle', { duration: 0.5, bottom: `${-blurBlockHeight / 2}`, left: '0px', ease: 'power1.out' });
  new ScrollMagic.Scene({
    triggerElement: '#section6',
    triggerHook: 1,
    duration: 500
  })
    .setTween(blurCircleTween5)
    .addTo(controller);

    const blurCircleTweenHelp5 = gsap.timeline()
    .to('#blurCircleHelp', { duration:0.5, bottom: `${-blurBlockHeight / 2}`, left: '0px', ease: 'power1.out' });
  new ScrollMagic.Scene({
    triggerElement: '#section6',
    triggerHook: 1,
    duration: 500
  })
  .setTween(blurCircleTweenHelp5)
  .addTo(controller);


  // 6 => 7 экран


  const section6TextLowOpacity = gsap.timeline()
  .to('#section6Text', { duration: 0.5, opacity: '0', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section7',
    triggerHook: 1,
    duration: 500
  })
  .setTween(section6TextLowOpacity)
  .addTo(controller);

  const section7Text = gsap.timeline()
  .from('#section7Text', { duration: 0.5, opacity: '0', ease: 'power1.out' })
  .to('#section7Text', { duration: 0.5, opacity: '1', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section7',
    triggerHook: 1,
    duration: 500
  })
  .on('leave', (event) => {
    if (event.scrollDirection === 'FORWARD') {
      document.querySelector('.common-arrow-down').src = './images/arrow-main-down-white.svg';
      sideMapIMages.forEach((elem, index) => {
        if (index === 1) {
          elem.src = './images/side-map-circle-white.svg';
        }
      })
    }
  })
  .setTween(section7Text)
  .addTo(controller);

  const blurCircleTween6 = gsap.timeline()
    .to('#blurCircle', { duration: 0.5, bottom: `${window.innerHeight - 2*blurBlockHeight/2}`, left: `${window.innerWidth - 2*blurBlockWidth/3}px`, ease: 'power1.out' });
  new ScrollMagic.Scene({
    triggerElement: '#section7',
    triggerHook: 1,
    duration: 500
  })
    .setTween(blurCircleTween6)
    .addTo(controller);
    
    const blurCircleTweenHelp6 = gsap.timeline()
    .to('#blurCircleHelp', { duration: 0.5, bottom: `${window.innerHeight - 2*blurBlockHeight/2}`, left: `${window.innerWidth - 2*blurBlockWidth/3}px`, ease: 'power1.out' });
  new ScrollMagic.Scene({
    triggerElement: '#section7',
    triggerHook: 1,
    duration: 500
  })
  .setTween(blurCircleTweenHelp6)
  .addTo(controller);

    // 7 => 8 экран
    new ScrollMagic.Scene({
      triggerElement: '#section8',
      triggerHook: 0.5,
      duration: 500
    })
    .on('enter', () => {
      document.querySelector('.common-arrow-down').src = './images/arrow-main-down-white.svg';
      sideMapIMages.forEach((elem, index) => {
        if (index === 1) {
          elem.src = './images/side-map-circle-white.svg';
        }
      })
    })
    .on('leave', (event) => {
      if (event.scrollDirection === 'FORWARD') {

      }
      else {
        document.querySelector('.common-arrow-down').src = './images/arrow-main-down.svg';
        sideMapIMages.forEach((elem, index) => {
          if (index === 0) {
            elem.src = './images/side-map-circle-white.svg';
          }
          else {
            elem.src = './images/side-map-circle.svg';
          }
        });
      }
    })
    .addTo(controller);

  const section7TextLowOpacity = gsap.timeline()
  .to('#section7Text', { duration: 0.5, opacity: '0', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section8',
    triggerHook: 1,
    duration: 500
  })
  .setTween(section7TextLowOpacity)
  .addTo(controller);

  const section8Text = gsap.timeline()
  .from('#section8Text', { duration: 0.5, opacity: '0', ease: 'power1.out' })
  .to('#section8Text', { duration: 0.5, opacity: '1', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section8',
    triggerHook: 1,
    duration: 500
  })
  .setTween(section8Text)
  .addTo(controller);

  function lerp(start, end, t) {
    return start + (end - start) * t;
  }
  
  // Вычисление промежуточных значений RGB
  const r = lerp(180, 100, 0.5);
  const g = lerp(0, 0, 0.5);
  const b = lerp(225, 227, 0.5);
  
  // Итоговое RGBA-значение
  const rgbaGradient = `rgba(${r.toFixed(0)}, ${g.toFixed(0)}, ${b.toFixed(0)}, 1)`;

const backgroundChange = gsap.timeline()
  .to('body', { duration: 750, background: rgbaGradient, ease: 'linear' });

new ScrollMagic.Scene({
  triggerElement: '#section8',
  triggerHook: 1,
  duration: '100%'
})
.setTween(backgroundChange)
.addTo(controller);


  //  8 => 9 экран

  
  const offersOpacity = gsap.timeline()
  .to('.offers-tooltip', { duration: 0.5, opacity: '1', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section9',
    triggerHook: 1,
    duration: 500
  })
  .setTween(offersOpacity)
  .addTo(controller);

  const section9TextLowOpacity = gsap.timeline()
  .to('#section8Text', { duration: 0.5, opacity: '0', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section9',
    triggerHook: 1,
    duration: 500
  })
  .setTween(section9TextLowOpacity)
  .addTo(controller);


  const section9Text = gsap.timeline()
  .from('#section9TextReal', { duration: 0.5, opacity: '0', ease: 'power1.out' })
  .to('#section9TextReal', { duration: 0.5, opacity: '1', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section9',
    triggerHook: 1,
    duration: 500
  })
  .setTween(section9Text)
  .addTo(controller);

  const blurCircleTween7 = gsap.timeline()
    .to('#blurCircle', { duration: 0.5, filter: 'blur(40px)', background: 'background: linear-gradient(261.69deg, #F9F1EA 43.79%, #FFFFFF 100%)' , bottom: `${window.innerHeight - blurBlockHeight/4}`, left: `${window.innerWidth/2 - blurBlockWidth/2}px`, ease: 'power1.out' });
  new ScrollMagic.Scene({
    triggerElement: '#section9',
    triggerHook: 1,
    duration: 500
  })
    .setTween(blurCircleTween7)
    .addTo(controller);

  const blurCircleTweenHelp7 = gsap.timeline()
    .to('#blurCircleHelp', { duration: 0.5, filter: 'blur(20px)', background: 'background: linear-gradient(261.69deg, #F9F1EA 43.79%, #FFFFFF 100%)' , bottom: `${window.innerHeight - blurBlockHeight/4}`, left: `${window.innerWidth/2 - blurBlockWidth/2}px`, ease: 'power1.out' });
  new ScrollMagic.Scene({
    triggerElement: '#section9',
    triggerHook: 1,
    duration: 500
  })
    .setTween(blurCircleTweenHelp7)
    .addTo(controller);

  //  9 => 10 экран
  const blurCircleTween8 = gsap.timeline()
    .to('#blurCircle', { duration: 0.5, filter: 'blur(40px)', background: 'background: linear-gradient(261.69deg, rgba(255, 255, 255, 0.55) 43.79%, rgba(255, 255, 255, 0) 99.99%, #FFFFFF 100%)', bottom: `0px`, left: `${-blurBlockWidth/2}px`, ease: 'power1.out' });
  new ScrollMagic.Scene({
    triggerElement: '#section10',
    triggerHook: 1,
    duration: 500
  })
    .setTween(blurCircleTween8)
    .addTo(controller);

    const blurCircleTweenHelp8 = gsap.timeline()
    .to('#blurCircleHelp', { duration: 0.5, bottom: `0px`, left: `${-blurBlockWidth/2}px`, ease: 'power1.out' });
  new ScrollMagic.Scene({
    triggerElement: '#section10',
    triggerHook: 1,
    duration: 500
  })
    .setTween(blurCircleTweenHelp8)
    .addTo(controller);
    // RELIABILITY
  const mediaQueryTextReal = window.matchMedia("(max-width: 1200px)");
  if (mediaQueryTextReal.matches) {
    // Код, который будет выполняться, если ширина экрана меньше или равна 1200px
    // const mediaQueryRealOther = window.matchMedia("(max-width: 850px)");
    // if (mediaQueryRealOther.matches) {
      const section9TextLeft = gsap.timeline()
      .to('#section9TextReal', { duration: 0.5, left: '50%', top: '50%', transform: 'translate(-50%, -50%)', ease: 'power1.out' });

    new ScrollMagic.Scene({
      triggerElement: '#section10',
      triggerHook: 1,
      duration: 500
    })
      .setTween(section9TextLeft)
      .addTo(controller);

      const section9TextLeftLowOpacity = gsap.timeline()
      .to('#section9TextReal', { duration: 0.5, opacity: '0', ease: 'power1.out' });

    new ScrollMagic.Scene({
      triggerElement: '#section10',
      triggerHook: 1,
      duration: 500
    })
      .setTween(section9TextLeftLowOpacity)
      .addTo(controller);
      // Код, который будет выполняться, если ширина экрана меньше или равна 850px
    // } else {
    //   const section9TextLeft = gsap.timeline()
    //   .to('#section9TextReal', { duration: 0.5, left: '214px', ease: 'back.in' });

    // new ScrollMagic.Scene({
    //   triggerElement: '#section10',
    //   triggerHook: 1,
    //   duration: 500
    // })
    //   .setTween(section9TextLeft)
    //   .addTo(controller);
    //   // Код, который будет выполняться, если ширина экрана больше 850px
    // }

  } else {
    // Код, который будет выполняться, если ширина экрана больше 1200px
    const section9TextLeft = gsap.timeline()
      .to('#section9TextReal', { duration: 0.5, left: '314px', ease: 'back.in' });

    new ScrollMagic.Scene({
      triggerElement: '#section10',
      triggerHook: 1,
      duration: 500
    })
      .setTween(section9TextLeft)
      .addTo(controller);

      const section9TextTop = gsap.timeline()
      .to('#section9TextReal', { duration: 0.5, left: '314px', top: '40%', transform: 'translate(-50%, -50%)', ease: 'power1.out' });

      new ScrollMagic.Scene({
        triggerElement: '#section12',
        triggerHook: 1,
        duration: 500
      })
      .setTween(section9TextTop)
      .addTo(controller);

      const section9CheckReal = gsap.timeline()
    .to('#section9CheckReal', { duration: 0.5, top: '-55px', left: '0px', ease: 'power1.out' });
  
    new ScrollMagic.Scene({
      triggerElement: '#section10',
      triggerHook: 1,
      duration: 500
    })
    .setTween(section9CheckReal)
    .addTo(controller);
  }
    

    // const section9RoundReal = gsap.timeline()
    // .to('#section9RoundReal', { duration: 0.5, opacity: '0', ease: 'power1.out' });
  
    // new ScrollMagic.Scene({
    //   triggerElement: '#section10',
    //   triggerHook: 1,
    //   duration: 500
    // })
    // .setTween(section9RoundReal)
    // .addTo(controller);

    
  // EXPRETISE
  const mediaQueryRealOther = window.matchMedia("(max-width: 1200px)");
    if (mediaQueryRealOther.matches) {
      const section9TextExp = gsap.timeline()
      .to('#section9TextExp', { duration: 0.5, opacity: '1', ease: 'power1.out' });
    
      new ScrollMagic.Scene({
        triggerElement: '#section10',
        triggerHook: 1,
        duration: 500
      })
      .setTween(section9TextExp)
      .addTo(controller);

      const section9TextLeftLowOpacity = gsap.timeline()
      .to('#section9TextExp', { duration: 0.5, opacity: '0', ease: 'power1.out' });

    new ScrollMagic.Scene({
      triggerElement: '#section11',
      triggerHook: 1,
      duration: 500
    })
      .setTween(section9TextLeftLowOpacity)
      .addTo(controller);
      // Код, который будет выполняться, если ширина экрана меньше или равна 850px
    } else {
      const section9TextExp1 = gsap.timeline()
      .to('#section9TextExp', { duration: 0.5, opacity: '1', ease: 'power1.out' });
    
      new ScrollMagic.Scene({
        triggerElement: '#section10',
        triggerHook: 1,
        duration: 500
      })
      .setTween(section9TextExp1)
      .addTo(controller);

      const section9TextTop = gsap.timeline()
      .to('#section9TextExp', { duration: 0.5, left: '50%', top: '40%', transform: 'translate(-50%, -50%)', ease: 'power1.out' });

      new ScrollMagic.Scene({
        triggerElement: '#section12',
        triggerHook: 1,
        duration: 500
      })
      .setTween(section9TextTop)
      .addTo(controller);

      const section9CheckExp = gsap.timeline()
    .to('#section9CheckExp', { duration: 0.5, top: '-55px', left: '0px', ease: 'power1.out' });
  
    new ScrollMagic.Scene({
      triggerElement: '#section11',
      triggerHook: 1,
      duration: 500
    })
    .setTween(section9CheckExp)
    .addTo(controller);
      // Код, который будет выполняться, если ширина экрана больше 850px
    }


  // const section9RoundExp = gsap.timeline()
  // .to('#section9RoundExp', { duration: 0.5, opacity: '0', ease: 'power1.out' });

  // new ScrollMagic.Scene({
  //   triggerElement: '#section12',
  //   triggerHook: 1,
  //   duration: 500
  // })
  // .setTween(section9RoundExp)
  // .addTo(controller);

  

  const section9TextExpLeft = gsap.timeline()
  .to('#section9TextExp', { duration: 0.5, left: '50%', transform: 'translate(-50%, -50%)', ease: 'back.in' });

  new ScrollMagic.Scene({
    triggerElement: '#section11',
    triggerHook: 1,
    duration: 500
  })
  .setTween(section9TextExpLeft)
  .addTo(controller);

  const blurCircleTween9 = gsap.timeline()
    .to('#blurCircle', { duration: 0.5, background: 'background: linear-gradient(261.69deg, rgba(255, 255, 255, 0.55) 43.79%, rgba(255, 255, 255, 0) 99.99%, #FFFFFF 100%)', bottom: `${window.innerHeight/2 - blurBlockHeight/2}`, left: `${window.innerWidth/2 - blurBlockWidth/2}px`, ease: 'power1.out' });
  new ScrollMagic.Scene({
    triggerElement: '#section11',
    triggerHook: 1,
    duration: 500
  })
    .setTween(blurCircleTween9)
    .addTo(controller);

    const blurCircleTweenHelp9 = gsap.timeline()
    .to('#blurCircleHelp', { duration: 0.5, bottom: `${window.innerHeight/2 - blurBlockHeight/2}`, left: `${window.innerWidth/2 - blurBlockWidth/2}px`, ease: 'power1.out'});
  new ScrollMagic.Scene({
    triggerElement: '#section11',
    triggerHook: 1,
    duration: 500
  })
    .setTween(blurCircleTweenHelp9)
    .addTo(controller);

    

  // const blurCircleTween10 = gsap.timeline()
  //   .to('#blurCircle', { duration: 0.5, filter: 'blur(100px)', ease: 'power1.out' });
  // new ScrollMagic.Scene({
  //   triggerElement: '#section12',
  //   triggerHook: 1,
  //   duration: 500
  // })
  //   .setTween(blurCircleTween10)
  //   .addTo(controller);

  //   const blurCircleTweenHelp10 = gsap.timeline()
  //   .to('#blurCircleHelp', { duration: 0.5, filter: 'blur(100px)',  ease: 'power1.out'});
  // new ScrollMagic.Scene({
  //   triggerElement: '#section12',
  //   triggerHook: 1,
  //   duration: 500
  // })
  //   .setTween(blurCircleTweenHelp10)
  //   .addTo(controller);

    const blurCircleTween11 = gsap.timeline()
    .to('#blurCircle', { duration: 0.5, left: `${window.innerWidth - blurBlockWidth}px`, filter: 'blur(40px)', ease: 'power1.out' });
  new ScrollMagic.Scene({
    triggerElement: '#section12',
    triggerHook: 1,
    duration: 500
  })
    .setTween(blurCircleTween11)
    .addTo(controller);

    const blurCircleTweenHelp11 = gsap.timeline()
    .to('#blurCircleHelp', { duration: 0.5, left: `${window.innerWidth - blurBlockWidth}px`, filter: 'blur(40px)', ease: 'power1.out' });
  new ScrollMagic.Scene({
    triggerElement: '#section12',
    triggerHook: 1,
    duration: 500
  })
    .setTween(blurCircleTweenHelp11)
    .addTo(controller);

  //   const blurCircleTween12 = gsap.timeline()
  //   .to('#blurCircle', { duration: 0.5, filter: 'blur(100px)', ease: 'power1.out' });
  // new ScrollMagic.Scene({
  //   triggerElement: '#section13',
  //   triggerHook: 1,
  //   duration: 500
  // })
  //   .setTween(blurCircleTween12)
  //   .addTo(controller);

  //   const blurCircleTweenHelp12 = gsap.timeline()
  //   .to('#blurCircleHelp', { duration: 0.5, filter: 'blur(100px)', ease: 'power1.out' });
  // new ScrollMagic.Scene({
  //   triggerElement: '#section13',
  //   triggerHook: 1,
  //   duration: 500
  // })
  //   .setTween(blurCircleTweenHelp12)
  //   .addTo(controller);

    const blurCircleTween13 = gsap.timeline()
    .to('#blurCircle', { duration: 0.5, left: `${-blurBlockWidth/4}`, bottom: `${-blurBlockHeight/4}` ,filter: 'blur(40px)', ease: 'power1.out' });
  new ScrollMagic.Scene({
    triggerElement: '#section13',
    triggerHook: 1,
    duration: 500
  })
    .setTween(blurCircleTween13)
    .addTo(controller);

    const blurCircleTweenHelp13 = gsap.timeline()
    .to('#blurCircleHelp', {duration: 0.5, left: `${-blurBlockWidth/4}`, bottom: `${-blurBlockHeight/4}` , filter: 'blur(40px)', ease: 'power1.out'});
  new ScrollMagic.Scene({
    triggerElement: '#section13',
    triggerHook: 1,
    duration: 500
  })
    .setTween(blurCircleTweenHelp13)
    .addTo(controller);

  // const blurCircleTween14 = gsap.timeline()
  //   .to('#blurCircle', { duration: 0.5, left: `${window.innerWidth / 2 - blurBlockWidth / 2}`, bottom: `${window.innerHeight / 2 - blurBlockHeight / 2}`, filter: 'blur(100px)', ease: 'power1.out' });
  // new ScrollMagic.Scene({
  //   triggerElement: '#section14',
  //   triggerHook: 1,
  //   duration: 500
  // })
  //   .setTween(blurCircleTween14)
  //   .addTo(controller);

    const blurCircleTweenHelp14 = gsap.timeline()
    .to('#blurCircleHelp', {duration: 0.5,opacity: '0', left: `${window.innerWidth / 2 - blurBlockWidth / 2}`, bottom: `${window.innerHeight / 2 - blurBlockHeight / 2}`, filter: 'blur(100px)', ease: 'power1.out'});
  new ScrollMagic.Scene({
    triggerElement: '#section14',
    triggerHook: 1,
    duration: 500
  })
    .setTween(blurCircleTweenHelp14)
    .addTo(controller);
  // TRANSPARENCY
  const mediaQueryTransOther = window.matchMedia("(max-width: 1200px)");
    if (mediaQueryTransOther.matches) {
      const section9TextTrans = gsap.timeline()
      .to('#section9TextTrans', { duration: 0.5, opacity: '1', right: '50%', top: '50%', transform: 'translate(50%, -50%)' , ease: 'power1.out' });
    
      new ScrollMagic.Scene({
        triggerElement: '#section11',
        triggerHook: 1,
        duration: 500
      })
      .setTween(section9TextTrans)
      .addTo(controller);

      const section9TextTransLowOpacity = gsap.timeline()
      .to('#section9TextTrans', { duration: 0.5, opacity: '0', ease: 'power1.out' });

    new ScrollMagic.Scene({
      triggerElement: '#section12',
      triggerHook: 1,
      duration: 500
    })
      .setTween(section9TextTransLowOpacity)
      .addTo(controller);
      // Код, который будет выполняться, если ширина экрана меньше или равна 850px
    } else {
      const section9TextTrans = gsap.timeline()
        .to('#section9TextTrans', { duration: 0.5, opacity: '1', ease: 'power1.out' });

      new ScrollMagic.Scene({
        triggerElement: '#section11',
        triggerHook: 1,
        duration: 500
      })
        .setTween(section9TextTrans)
        .addTo(controller);

        const section9TextTop = gsap.timeline()
      .to('#section9TextTrans', { duration: 0.5, right: '0', top: '40%', transform: 'translate(-50%, -50%)', ease: 'power1.out' });

      new ScrollMagic.Scene({
        triggerElement: '#section12',
        triggerHook: 1,
        duration: 500
      })
      .setTween(section9TextTop)
      .addTo(controller);

      
    const section9CheckTrans = gsap.timeline()
    .to('#section9CheckTrans', { duration: 0.5, top: '-55px', left: '0px', ease: 'power1.out' });

    new ScrollMagic.Scene({
      triggerElement: '#section12',
      triggerHook: 1,
      duration: 500
    })
    .setTween(section9CheckTrans)
    .addTo(controller);
      // Код, который будет выполняться, если ширина экрана больше 850px
    }


  // const section9RoundTrans = gsap.timeline()
  // .to('#section9RoundTrans', { duration: 0.5, opacity: '0', ease: 'power1.out' });

  // new ScrollMagic.Scene({
  //   triggerElement: '#section14',
  //   triggerHook: 1,
  //   duration: 500
  // })
  // .setTween(section9RoundTrans)
  // .addTo(controller);


  // Variability
  const mediaQueryVarOther = window.matchMedia("(max-width: 1200px)");
    if (mediaQueryVarOther.matches) {
      const section9TextVar = gsap.timeline()
      .to('#section9TextVar', { duration: 0.5, opacity: '1' , ease: 'power1.out' });
    
      new ScrollMagic.Scene({
        triggerElement: '#section12',
        triggerHook: 1,
        duration: 500
      })
      .setTween(section9TextVar)
      .addTo(controller);

      const section9TextVarLowOpacity = gsap.timeline()
      .to('#section9TextVar', { duration: 0.5, opacity: '0', ease: 'power1.out' });

    new ScrollMagic.Scene({
      triggerElement: '#section13',
      triggerHook: 1,
      duration: 500
    })
      .setTween(section9TextVarLowOpacity)
      .addTo(controller);
      // Код, который будет выполняться, если ширина экрана меньше или равна 850px
    } else {
      const section9TextVar = gsap.timeline()
      .to('#section9TextVar', { duration: 0.5, opacity: '1', ease: 'power1.out' });
    
      new ScrollMagic.Scene({
        triggerElement: '#section12',
        triggerHook: 1,
        duration: 500
      })
      .setTween(section9TextVar)
      .addTo(controller);

      const section9CheckVar = gsap.timeline()
      .to('#section9CheckVar', { duration: 0.5, top: '-55px', left: '0px', ease: 'power1.out' });
    
      new ScrollMagic.Scene({
        triggerElement: '#section13',
        triggerHook: 1,
        duration: 500
      })
      .setTween(section9CheckVar)
      .addTo(controller);
      // Код, который будет выполняться, если ширина экрана больше 850px
    }

  // const section9RoundVar = gsap.timeline()
  // .to('#section9RoundVar', { duration: 0.5, opacity: '0', ease: 'power1.out' });

  // new ScrollMagic.Scene({
  //   triggerElement: '#section16',
  //   triggerHook: 1,
  //   duration: 500
  // })
  // .setTween(section9RoundVar)
  // .addTo(controller);



    // Support
    const mediaQuerySupOther = window.matchMedia("(max-width: 1200px)");
    if (mediaQuerySupOther.matches) {
      const section9TextSup = gsap.timeline()
      .to('#section9TextSup', { duration: 0.5, opacity: '1', right: '50%', top: '50%', transform: 'translate(50%, -50%)', bottom: 'auto' , ease: 'power1.out' });
    
      new ScrollMagic.Scene({
        triggerElement: '#section13',
        triggerHook: 1,
        duration: 500
      })
      .setTween(section9TextSup)
      .addTo(controller);

    //   const section9TextSupLowOpacity = gsap.timeline()
    //   .to('#section9TextSup', { duration: 0.5, opacity: '0', ease: 'power1.out' });

    // new ScrollMagic.Scene({
    //   triggerElement: '#section14',
    //   triggerHook: 1,
    //   duration: 500
    // })
    //   .setTween(section9TextSupLowOpacity)
    //   .addTo(controller);
      // Код, который будет выполняться, если ширина экрана меньше или равна 850px
    } else {
    const section9TextSup = gsap.timeline()
    .to('#section9TextSup', { duration: 0.5, opacity: '1', ease: 'power1.out' });
  
    new ScrollMagic.Scene({
      triggerElement: '#section13',
      triggerHook: 1,
      duration: 500
    })
    .setTween(section9TextSup)
    .addTo(controller);
    const section9TextSupLowOpacity = gsap.timeline()
      .to('#section9TextSup', { duration: 0.5, opacity: '0', ease: 'power1.out' });

    new ScrollMagic.Scene({
      triggerElement: '#section15',
      triggerHook: 1,
      duration: 500
    })
      .setTween(section9TextSupLowOpacity)
      .addTo(controller);
      // Код, который будет выполняться, если ширина экрана больше 850px
    }


  // Hide all texts in white bg

  const section9TextHide = gsap.timeline()
    .to('#section9TextReal', { duration: 0.5, opacity: '0', ease: 'power1.out' });
  
    new ScrollMagic.Scene({
      triggerElement: '#section14',
      triggerHook: 1,
      duration: 500
    })
    .setTween(section9TextHide)
    .addTo(controller);

    const section9TextExpHide = gsap.timeline()
  .to('#section9TextExp', { duration: 0.5, opacity: '0', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section14',
    triggerHook: 1,
    duration: 500
  })
  .setTween(section9TextExpHide)
  .addTo(controller);

    const section9TextTransHide = gsap.timeline()
  .to('#section9TextTrans', { duration: 0.5, opacity: '0', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section14',
    triggerHook: 1,
    duration: 500
  })
  .setTween(section9TextTransHide)
  .addTo(controller);
  const section9TextSupHide = gsap.timeline()
  .to('#section9TextSup', { duration: 0.5, opacity: '0', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section14',
    triggerHook: 1,
    duration: 500
  })
  .setTween(section9TextSupHide)
  .addTo(controller);
    const section9TextVarHide = gsap.timeline()
  .to('#section9TextVar', { duration: 0.5, opacity: '0', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section14',
    triggerHook: 1,
    duration: 500
  })
  .setTween(section9TextVarHide)
  .addTo(controller);

  const offersOpacityLow = gsap.timeline()
  .to('.offers-tooltip', { duration: 0.5, opacity: '0', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section14',
    triggerHook: 1,
    duration: 500
  })
  .setTween(offersOpacityLow)
  .addTo(controller);


  

  // 13 (пустой, уже без надписей) => 14

  const bodyWhite = gsap.timeline()
  .to('body', { duration: 0.5, background: 'rgba(250, 243, 255, 1)', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section14',
    triggerHook: 1,
    duration: 500
  })
  .setTween(bodyWhite)
  .addTo(controller);

//   const backgroundChangeHTMLWhite = gsap.timeline()
//   .to('html', { 
//     duration: 1,
//     background: 'rgba(246, 235, 255, 1)', 
//     ease: 'power1.out'
//   });

// new ScrollMagic.Scene({
//   triggerElement: '#section18',
//   triggerHook: 1,
//   duration: 500
// })
// .setTween(backgroundChangeHTMLWhite)
// .addTo(controller);

  const section18Text = gsap.timeline()
    .to('#section18Text', { duration: 0.5, opacity: '1', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section14',
    triggerHook: 1,
    duration: 500
  })
  .setTween(section18Text)
  .addTo(controller);

  const blurCircleTween15 = gsap.timeline()
    .to('#blurCircle', { duration: 0.5, background: 'linear-gradient(261.69deg, #B400E1 43.79%, #6400E3 100%)' , left: `${window.innerWidth - blurBlockWidth}`, bottom: `${window.innerHeight / 2 - blurBlockHeight / 2}`, filter: 'blur(100px)', ease: 'power1.out' });
  new ScrollMagic.Scene({
    triggerElement: '#section14',
    triggerHook: 1,
    duration: 500
  })
    .setTween(blurCircleTween15)
    .addTo(controller);

    // покраска вспомогательныъ элементов в чёрный
    new ScrollMagic.Scene({
      triggerElement: '#section14',
      triggerHook: 0.5,
      duration: 500
    })
    .on('enter', () => {
      document.querySelector('.demo-button__text').style.color = '#000';
      document.querySelector('.demo-button__img').src = './images/demo-button-img-black.svg';
      document.querySelector('.common-arrow-down-mouse').src = './images/common-arrow-down-mouse-black.svg';
      document.querySelector('.common-arrow-down-mouse-wheel').src = './images/common-arrow-down-mouse-wheel-black.svg';
      document.querySelector('.side-map__button').src = './images/burger-bar-open-black.svg';
      document.querySelector(".burger-bar__logo").src = "./images/burger-bar-logo-black.svg";
      document.querySelector('.connect-button__arrow').src = './images/connect-button-black.svg';
      document.querySelector('.connect-button').style = 'border: 1px solid rgba(48, 48, 48, 1)';
      document.querySelector('.connect-button__text').style = 'color: rgba(48, 48, 48, 1)';
      document.querySelector('.common-arrow-down').src = './images/arrow-main-down-black.svg';
      menuButton.src = './images/burger-bar-open-black.svg';
      document.querySelectorAll('.side-map__link').forEach(link => {
        link.style = 'color: rgba(48, 48, 48, 1)';
      });
      sideMapIMages.forEach((circle, index) => {
        if (index === 2) {
          circle.src = './images/side-map-circle-black.svg';
        }
        if (index === 1) {
          circle.src = './images/side-map-circle-black.svg';
        }
        if (index === 0) {
          circle.src = './images/side-map-circle-black.svg';
        }
      })
    })
    .on('leave', (event) => {
      if (event.scrollDirection === 'FORWARD') {
  
      }
      else {
        document.querySelector('.demo-button__text').style.color = '#FFF';
        document.querySelector('.demo-button__img').src = './images/demo-button-img.svg';
        document.querySelector('.common-arrow-down-mouse').src = './images/common-arrow-down-mouse.svg';
        document.querySelector('.common-arrow-down-mouse-wheel').src = './images/common-arrow-down-mouse-wheel.svg';
        document.querySelector('.side-map__button').src = './images/burger-bar-open.svg';
        document.querySelector(".burger-bar__logo").src = "./images/burger-bar-logo.svg";
        document.querySelector('.connect-button__arrow').src = './images/connect-button.svg';
        document.querySelector('.connect-button').style = 'border: 1px solid rgba(255, 255, 255, 1)';
        document.querySelector('.connect-button__text').style = '#FFF';
        document.querySelector('.common-arrow-down').src = './images/arrow-main-down-white.svg';
        menuButton.src = './images/burger-bar-open.svg';
        document.querySelectorAll('.side-map__link').forEach(link => {
          link.style = 'color: #FFF';
        });
        sideMapIMages.forEach((elem, index) => {
          if (index === 0) {
            elem.src = './images/side-map-circle-white.svg';
          }
          else if (index === 1) {
            elem.src = './images/side-map-circle-white.svg';
          }
          else {
            elem.src = './images/side-map-circle.svg';
          }
        })
      }
    })
    .addTo(controller);

    // 14 => 15
  const section18TextLow = gsap.timeline()
    .to('#section18Text', { duration: 0.5, opacity: '0', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section15',
    triggerHook: 1,
    duration: 500
  })
    .setTween(section18TextLow)
    .addTo(controller);
  const section19Text = gsap.timeline()
    .to('#section19Text', { duration: 0.5, opacity: '1', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section15',
    triggerHook: 1,
    duration: 500
  })
    .setTween(section19Text)
    .addTo(controller);

  const blurCircleTween16 = gsap.timeline()
    .to('#blurCircle', { duration: 0.5, left: `0`, height: '500px', bottom: `${window.innerHeight - 2 * blurBlockHeight / 3}`, filter: 'blur(100px)', ease: 'power1.out' });
  new ScrollMagic.Scene({
    triggerElement: '#section15',
    triggerHook: 1,
    duration: 500
  })
    .setTween(blurCircleTween16)
    .addTo(controller);

  const blurCircleSecond16 = gsap.timeline()
    .to('#blurCirclePage4', { duration: 0.5, background: 'linear-gradient(261.69deg, #B400E1 43.79%, #6400E3 100%)', left: `${window.innerWidth}`, top: `${window.innerHeight}`, filter: 'blur(100px)', ease: 'power1.out' });
  new ScrollMagic.Scene({
    triggerElement: '#section15',
    triggerHook: 1,
    duration: 500
  })
    .setTween(blurCircleSecond16)
    .addTo(controller);

    // 15 => 16
    const section19TextLow = gsap.timeline()
    .to('#section19Text', { duration: 0.5, opacity: '0', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section16',
    triggerHook: 1,
    duration: 500
  })
    .setTween(section19TextLow)
    .addTo(controller);

    const section20Text = gsap.timeline()
    .to('#section20Text', { duration: 0.5, opacity: '1', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section16',
    triggerHook: 1,
    duration: 500
  })
    .setTween(section20Text)
    .addTo(controller);
  const mediaQuery = window.matchMedia("(max-width: 1280px)");
  if (mediaQuery.matches) {
    console.log('<1280')
    const mediaQuery2 = window.matchMedia("(max-width: 1000px)");
    if (mediaQuery2.matches) {
      

      const mediaQuery3 = window.matchMedia("(max-width: 600px)");
      if (mediaQuery3.matches) {
        console.log('<1000')
        // Код, который будет выполняться, если ширина экрана меньше или равна 600px
        const blurCircleTween17 = gsap.timeline()
          .to('#blurCircle', { duration: 0.5, filter: 'blur(20px)', height: '450px', bottom: `${-blurBlockHeight / 2}`, left: `${window.innerWidth - blurBlockWidth / 2}`, ease: 'power1.out' });
        new ScrollMagic.Scene({
          triggerElement: '#section16',
          triggerHook: 1,
          duration: 500
        })
          .setTween(blurCircleTween17)
          .addTo(controller);
      }
      else {
        console.log('<1000')
        // Код, который будет выполняться, если ширина экрана меньше или равна 1000px
        const blurCircleTween17 = gsap.timeline()
          .to('#blurCircle', { duration: 0.5, filter: 'blur(20px)', height: '550px', bottom: `${-blurBlockHeight / 2}`, left: `${window.innerWidth - blurBlockWidth / 2}`, ease: 'power1.out' });
        new ScrollMagic.Scene({
          triggerElement: '#section16',
          triggerHook: 1,
          duration: 500
        })
          .setTween(blurCircleTween17)
          .addTo(controller);
      }
    }
    else {
          // Код, который будет выполняться, если ширина экрана меньше или равна 1280px
    const blurCircleTween17 = gsap.timeline()
    .to('#blurCircle', { duration: 0.5, filter: 'blur(20px)', height: '650px', bottom: `${-blurBlockHeight / 2}`, left: `${window.innerWidth - blurBlockWidth / 2}`, ease: 'power1.out' });
  new ScrollMagic.Scene({
    triggerElement: '#section16',
    triggerHook: 1,
    duration: 500
  })
    .setTween(blurCircleTween17)
    .addTo(controller);
    }
  } else {
    console.log('>1280')
    // Код, который будет выполняться, если ширина экрана больше 1280px
    const blurCircleTween17 = gsap.timeline()
      .to('#blurCircle', { duration: 0.5, filter: 'blur(20px)', height: '1000px', bottom: `${-blurBlockHeight / 2}`, left: `${window.innerWidth - blurBlockWidth / 2}`, ease: 'power1.out' });
    new ScrollMagic.Scene({
      triggerElement: '#section16',
      triggerHook: 1,
      duration: 500
    })
      .setTween(blurCircleTween17)
      .addTo(controller);
   }
   
  // 16 => 17

  const section20TextLow = gsap.timeline()
    .to('#section20Text', { duration: 0.5, opacity: '0', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section17',
    triggerHook: 1,
    duration: 500
  })
    .setTween(section20TextLow)
    .addTo(controller);

  const section21Text = gsap.timeline()
    .to('#section21Text', { duration: 0.5, opacity: '1', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section17',
    triggerHook: 1,
    duration: 500
  })
    .setTween(section21Text)
    .addTo(controller);

    const blurCircleTween18 = gsap.timeline()
    .to('#blurCircle', { duration: 0.5, filter: 'blur(100px)', bottom: `${window.innerHeight/2 -blurBlockHeight / 2}`, left: `${window.innerWidth/2 - blurBlockWidth/2}`, ease: 'power1.out' });
  new ScrollMagic.Scene({
    triggerElement: '#section17',
    triggerHook: 1,
    duration: 500
  })
    .setTween(blurCircleTween18)
    .addTo(controller);

    // 17 => 18

    const section21TextLow = gsap.timeline()
    .to('#section21Text', { duration: 0.5, opacity: '0', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section18',
    triggerHook: 1,
    duration: 500
  })
    .setTween(section21TextLow)
    .addTo(controller);

    const section22Text = gsap.timeline()
    .to('#section22Text', { duration: 0.5, opacity: '1', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section18',
    triggerHook: 1,
    duration: 500
  })
    .setTween(section22Text)
    .addTo(controller);

  const blurCircleTween19 = gsap.timeline()
    .to('#blurCircle', { duration: 0.5, filter: 'blur(20px)', bottom: `${-blurBlockHeight / 2}`, left: `${- blurBlockWidth / 2}`, ease: 'power1.out' });
  new ScrollMagic.Scene({
    triggerElement: '#section18',
    triggerHook: 1,
    duration: 500
  })
    .setTween(blurCircleTween19)
    .addTo(controller);

  // 18 => 19

  const blurCircleTween20 = gsap.timeline()
    .to('#blurCircle', { duration: 0.5, width: '0px', height: '0px', filter: 'blur(7px)', bottom: `${window.innerHeight / 2}`, left: `${window.innerWidth / 2}`, ease: 'power1.out' });
  new ScrollMagic.Scene({
    triggerElement: '#section19',
    triggerHook: 1,
    duration: 500
  })
    .setTween(blurCircleTween20)
    .addTo(controller);

    const footer = gsap.timeline()
    .to('.footer', { duration: 0.5, opacity: '1', ease: 'power1.out' });
    new ScrollMagic.Scene({
      triggerElement: '#section19',
      triggerHook: 1,
      duration: 500
    })
      .setTween(footer)
      .addTo(controller);

    const section22TextLow = gsap.timeline()
    .to('#section22Text', { duration: 0.5, opacity: '0', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section19',
    triggerHook: 1,
    duration: 500
  })
    .setTween(section22TextLow)
    .addTo(controller);

    const section23Text = gsap.timeline()
    .to('#section23Text', { duration: 0.5, opacity: '1', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section19',
    triggerHook: 1,
    duration: 500
  })
    .setTween(section23Text)
    .addTo(controller);


    new ScrollMagic.Scene({
      triggerElement: '#section19',
      triggerHook: 0.5,
      duration: 500
    })
    .on('enter', () => {
      document.querySelector('.common-arrow-down').style = 'opacity: 0';
      document.querySelector('.common-arrow-down2').style = 'opacity: 1';
      document.querySelector('.connect-button').style.display = 'none';
      document.querySelector('.demo-button').style.right = '56px';
      sideMapIMages.forEach((elem, index) => {
        elem.src = './images/side-map-circle-black.svg';
      });
      document.querySelector('.footer').style = 'pointer-events: all; opacity: 1';
    })
    .on('leave', (event) => {
      if (event.scrollDirection === 'FORWARD') {
  
      }
      else {
        document.querySelector('.connect-button').style.display = 'flex';
        document.querySelector('.common-arrow-down').style = 'opacity: 1';
        document.querySelector('.common-arrow-down2').style = 'opacity: 0';
        document.querySelector('.demo-button').style.right = '230px';
        document.querySelector('.footer').style = 'pointer-events: none; opacity: 0';
        sideMapIMages.forEach((elem, index) => {
          if (index === 3) {
            elem.src = './images/side-map-circle.svg';
          }
        })
      }
    })
    .addTo(controller);

    document.querySelector('.page-23__input_name').addEventListener('input', (evt) => {
      document.querySelector('.page-23__input_contact').addEventListener('input', (e) => {
        if (e.target.value.trim() && evt.target.value.trim()) {
          document.querySelector('.page-23__send-btn').classList.add('page-23__send-btn_active');
          document.querySelector(".page-23__send-btn-arrow").src = './images/connect-button-white.svg';
        }
        else {
          document.querySelector('.page-23__send-btn').classList.remove('page-23__send-btn_active');
          document.querySelector(".page-23__send-btn-arrow").src = './images/connect-button-black.svg';
        }
      })
    });

// АВТОДОВОДЧИКИ СКРОЛЛА

// Получаем все секции на странице
const sections = Array.from(document.querySelectorAll('section')).slice(0, 19);
console.log(sections);

// Текущая секция
let currentSection = 0;

// Флаг для блокировки прокрутки
let isScrolling = false;

// Отключаем стандартную прокрутку
if (navigator.userAgent.indexOf('Firefox') !== -1) {

}
else {
  window.addEventListener('wheel', (event) => {
    event.preventDefault();
  }, { passive: false });
}

let isTouch = false;

window.addEventListener('touchstart', (event) => {
  isTouch = true;
  event.target.setPointerCapture(event.pointerId);
}, { passive: true, capture: true });

window.addEventListener('touchmove', (event) => {
  if (isTouch) {
    event.preventDefault();
  }
}, { passive: false });

window.addEventListener('touchend', (event) => {
  isTouch = false;
  event.target.releasePointerCapture(event.pointerId);
}, { passive: true, capture: true });

// Обработчик события прокрутки колесика мыши
let lastWheelScrollTime = 0;
if (navigator.userAgent.indexOf('Firefox') !== -1) {

}
else {
  window.addEventListener('wheel', (event) => {
    // Определяем направление прокрутки
    if (!isScrolling) {
      const currentTime = Date.now();
      if (currentTime - lastWheelScrollTime > 500) {
        if (event.deltaY > 0) {
          // Прокрутка вниз
          scrollToSection(currentSection + 1);
        } else {
          // Прокрутка вверх
          scrollToSection(currentSection - 1);
        }
        lastWheelScrollTime = currentTime;
      }
    }
  });
}



// function scrollToSection(index, duration = 1200) {
//   // Проверяем, что index находится в пределах количества секций
//   if (index >= 0 && index < sections.length) {
//     const start = window.scrollY || document.documentElement.scrollTop;
//     const target = sections[index].offsetTop;
//     const startTime = performance.now();

//     // Функция для плавной прокрутки
//     function scroll() {
//       const elapsed = (performance.now() - startTime) / duration;
//       const progress = Math.min(elapsed, 1); // Убедиться, что прогресс не превышает 1

//       // Расчёт текущей позиции скролла
//       window.scrollTo(0, start + (target - start) * progress);

//       // Если анимация не завершена, продолжаем её
//       if (progress < 1) {
//         requestAnimationFrame(scroll);
//       } else {
//         // Обновляем текущую секцию после завершения анимации
//         currentSection = index;
//         isScrolling = false;
//       }
//     }

//     // Блокируем прокрутку на время анимации
//     isScrolling = true;
//     requestAnimationFrame(scroll);
//   }
// }
function scrollToSection(index, duration = 1400) {
  // Проверяем, что index находится в пределах количества секций
  if (index >= 0 && index < sections.length) {
    const start = window.scrollY || document.documentElement.scrollTop;
    const target = sections[index].offsetTop;
    const startTime = performance.now();

    // Функция для плавной прокрутки
    function scroll() {
      const elapsed = (performance.now() - startTime) / duration;
      const progress = Math.min(elapsed, 1); // Убедиться, что прогресс не превышает 1

      // Линейная интерполяция для плавного скролла
      window.scrollTo(0, start + (target - start) * progress);

      // Если анимация не завершена, продолжаем её
      if (progress < 1) {
        requestAnimationFrame(scroll);
      } else {
        // Обновляем текущую секцию после завершения анимации
        currentSection = index;
        isScrolling = false;
      }
    }

    // Блокируем прокрутку на время анимации
    isScrolling = true;
    requestAnimationFrame(scroll);
  }
}


window.addEventListener('touchstart', (event) => {
  if (!isScrolling) {
    lastTouchStartY = event.touches[0].clientY;
    // event.target.setPointerCapture(event.pointerId);
  }
});

window.addEventListener('touchend', (event) => {
  if (!isScrolling) {
    // event.target.releasePointerCapture(event.pointerId);
    const touchY = event.changedTouches[0].clientY;
    const deltaY = lastTouchStartY - touchY;

    if (Math.abs(deltaY) > 50) {
      if (deltaY > 0) {
        scrollToSection(currentSection + 1);
      } else {
        scrollToSection(currentSection - 1);
      }
    }
  }
});


// Функция, отвечающая за постраничный скролл
function scrollToSection2(index, behavior) {
  // Проверяем, что index находится в пределах количества секций
  if (index >= 0 && index < sections.length) {
    // Скроллим к нужной секции
    sections[index].scrollIntoView({
      behavior: behavior,
      block: 'start',
    });

    // Обновляем текущую секцию
    currentSection = index;
    // Блокируем прокрутку на время анимации
    isScrolling = true;
    setTimeout(() => {
      isScrolling = false;
    }, 650);
  }
}
  // Обработчик событий кликов на якорные ссылки
const anchorLinks = document.querySelectorAll('a[href^="#"]');
console.log(anchorLinks)
anchorLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    sideMap.classList.remove('side-map_active');
    event.preventDefault();
    const targetId = event.target.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      scrollToSection2(Array.from(sections).indexOf(targetSection), 'auto');
    }
    menuButton.style.transform = 'rotate(0deg)';
  });
});
const connectButton = document.querySelector('.connect-button__link');
const connectButton2 = document.querySelector(".connect-button2__link");
connectButton.addEventListener('click', (event) => {
  event.preventDefault();
  const targetId = event.target.getAttribute('href');
  const targetSection = document.querySelector(targetId);
  if (targetSection) {
    scrollToSection2(Array.from(sections).indexOf(targetSection), 'auto');
  }
});
connectButton2.addEventListener('click', (event) => {
  event.preventDefault();
  const targetId = event.target.getAttribute('href');
  const targetSection = document.querySelector(targetId);
  if (targetSection) {
    scrollToSection2(Array.from(sections).indexOf(targetSection), 'auto');
  }
});
});
