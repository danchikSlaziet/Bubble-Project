document.addEventListener('DOMContentLoaded', function() {
  const controller = new ScrollMagic.Controller();
  const blurBlockWidth = document.querySelector('.blur-circle').getBoundingClientRect().width;
  const blurBlockHeight = document.querySelector('.blur-circle').getBoundingClientRect().height;
  console.log(blurBlockHeight);


  // 1 => 2 экран

  new ScrollMagic.Scene({
    triggerElement: '#section2',
    triggerHook: 0.5,
    duration: '100%'
  })
  .on('enter', () => {
    console.log("section 2");
    document.querySelectorAll('.side-map__images-circle').forEach((elem, index) => {
      if (index === 0) {
        elem.src = './images/side-map-circle-white.svg';
      }
    })
  })
  .on('leave', (event) => {
    if (event.scrollDirection === 'FORWARD') {

    }
    else {
      document.querySelectorAll('.side-map__images-circle').forEach((elem, index) => {
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
    duration: '100%'
  })
  .setTween(blurCircleTween)
  .addTo(controller);

  const section1Text = gsap.timeline()
    .to('#section1Text', { duration: 0.5, opacity: '0', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section2',
    triggerHook: 1,
    duration: '100%'
  })
  .setTween(section1Text)
  .addTo(controller);


  // 2 => 3 экран


  const section2Text = gsap.timeline()
  .to('#section2Text', { duration: 0.5, opacity: '1', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section2',
    triggerHook: 1,
    duration: '100%'
  })
  .setTween(section2Text)
  .addTo(controller);

  const blurCircleTween2 = gsap.timeline()
    .to('#blurCircle', { duration: 0.5, bottom: "-258px", left: `${window.innerWidth - blurBlockWidth}px`, ease: 'power1.out' });
  new ScrollMagic.Scene({
    triggerElement: '#section3',
    triggerHook: 1,
    duration: '100%'
  })
  .setTween(blurCircleTween2)
  .addTo(controller);

  const section2TextLowOpacity = gsap.timeline()
  .to('#section2Text', { duration: 0.5, opacity: '0', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section3',
    triggerHook: 1,
    duration: '100%'
  })
  .setTween(section2TextLowOpacity)
  .addTo(controller);

  const section3Text = gsap.timeline()
  .from('#section3Text', { duration: 0.5, opacity: '0', ease: 'power1.out' })
  .to('#section3Text', { duration: 0.5, opacity: '1', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section3',
    triggerHook: 1,
    duration: '100%'
  })
  .setTween(section3Text)
  .addTo(controller);


  // 3 => 4 экран


  const section3TextLowOpacity = gsap.timeline()
  .to('#section3Text', { duration: 0.5, opacity: '0', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section4',
    triggerHook: 1,
    duration: '100%'
  })
  .setTween(section3TextLowOpacity)
  .addTo(controller);

  const section4Text = gsap.timeline()
  .from('#section4Text', { duration: 0.5, opacity: '0', ease: 'power1.out' })
  .to('#section4Text', { duration: 0.5, opacity: '1', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section4',
    triggerHook: 1,
    duration: '100%'
  })
  .setTween(section4Text)
  .addTo(controller);

  const blurCircleTween3 = gsap.timeline()
    .to('#blurCircle', { duration: 0.5, filter: 'blur(35px)' ,bottom: "-258px", left: `${window.innerWidth/2 - blurBlockWidth/2}px`, ease: 'power1.out' });
  new ScrollMagic.Scene({
    triggerElement: '#section4',
    triggerHook: 1,
    duration: '100%'
  })
  .setTween(blurCircleTween3)
  .addTo(controller);

  const blurCirclePage4 = gsap.timeline()
    .from('#blurCirclePage4', { duration: 0.5, filter: 'blur(100px)' ,top: `${window.innerHeight}`, ease: 'power1.out' })
    .to('#blurCirclePage4', { duration: 0.5, filter: 'blur(20px)' ,top: `${-blurBlockHeight/2}`,  ease: 'power1.out' });
  new ScrollMagic.Scene({
    triggerElement: '#section4',
    triggerHook: 1,
    duration: '100%'
  })
  .setTween(blurCirclePage4)
  .addTo(controller);

  // 4 => 5 экран


  const section4TextLowOpacity = gsap.timeline()
  .to('#section4Text', { duration: 0.5, opacity: '0', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section5',
    triggerHook: 1,
    duration: '100%'
  })
  .setTween(section4TextLowOpacity)
  .addTo(controller);

  const section5Text = gsap.timeline()
  .from('#section5Text', { duration: 0.5, opacity: '0', ease: 'power1.out' })
  .to('#section5Text', { duration: 0.5, opacity: '1', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section5',
    triggerHook: 1,
    duration: '100%'
  })
  .setTween(section5Text)
  .addTo(controller);

  const blurCircleTween4 = gsap.timeline()
    .to('#blurCircle', { duration: 0.5, filter: 'blur(100px)' ,bottom: `${-blurBlockHeight}`, ease: 'power1.out' });
  new ScrollMagic.Scene({
    triggerElement: '#section5',
    triggerHook: 1,
    duration: '100%'
  })
  .setTween(blurCircleTween4)
  .addTo(controller);

  const blurCirclePage5 = gsap.timeline()
    .to('#blurCirclePage4', { duration: 0.5, filter: 'blur(30px)' ,top: `${-blurBlockHeight}`,  ease: 'power1.out' });
  new ScrollMagic.Scene({
    triggerElement: '#section5',
    triggerHook: 1,
    duration: '100%'
  })
  .setTween(blurCirclePage5)
  .addTo(controller);


  // 5 => 6 экран

  const section5TextLowOpacity = gsap.timeline()
  .to('#section5Text', { duration: 0.5, opacity: '0', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section6',
    triggerHook: 1,
    duration: '100%'
  })
  .setTween(section5TextLowOpacity)
  .addTo(controller);

  const section6Text = gsap.timeline()
  .from('#section6Text', { duration: 0.5, opacity: '0', ease: 'power1.out' })
  .to('#section6Text', { duration: 0.5, opacity: '1', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section6',
    triggerHook: 1,
    duration: '100%'
  })
  .setTween(section6Text)
  .addTo(controller);

  const blurCircleTween5 = gsap.timeline()
    .to('#blurCircle', { duration: 0.5, bottom: `${-blurBlockHeight / 2}`, left: '0px', ease: 'power1.out' });
  new ScrollMagic.Scene({
    triggerElement: '#section6',
    triggerHook: 1,
    duration: '100%'
  })
    .setTween(blurCircleTween5)
    .addTo(controller);


  // 6 => 7 экран


  const section6TextLowOpacity = gsap.timeline()
  .to('#section6Text', { duration: 0.5, opacity: '0', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section7',
    triggerHook: 1,
    duration: '100%'
  })
  .setTween(section6TextLowOpacity)
  .addTo(controller);

  const section7Text = gsap.timeline()
  .from('#section7Text', { duration: 0.5, opacity: '0', ease: 'power1.out' })
  .to('#section7Text', { duration: 0.5, opacity: '1', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section7',
    triggerHook: 1,
    duration: '100%'
  })
  .on('leave', (event) => {
    if (event.scrollDirection === 'FORWARD') {
      document.querySelector('.common-arrow-down').src = './images/arrow-main-down-white.svg';
      document.querySelectorAll('.side-map__images-circle').forEach((elem, index) => {
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
    duration: '100%'
  })
    .setTween(blurCircleTween6)
    .addTo(controller);


    // 7 => 8 экран
    new ScrollMagic.Scene({
      triggerElement: '#section8',
      triggerHook: 0.5,
      duration: '100%'
    })
    .on('enter', () => {
      document.querySelector('.common-arrow-down').src = './images/arrow-main-down-white.svg';
      document.querySelectorAll('.side-map__images-circle').forEach((elem, index) => {
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
        document.querySelectorAll('.side-map__images-circle').forEach((elem, index) => {
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
    duration: '100%'
  })
  .setTween(section7TextLowOpacity)
  .addTo(controller);

  const section8Text = gsap.timeline()
  .from('#section8Text', { duration: 0.5, opacity: '0', ease: 'power1.out' })
  .to('#section8Text', { duration: 0.5, opacity: '1', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section8',
    triggerHook: 1,
    duration: '100%'
  })
  .setTween(section8Text)
  .addTo(controller);

const body = document.querySelector('body');

// Создаем сцену для изменения фона
new ScrollMagic.Scene({
  triggerElement: '#section8',
  triggerHook: 1,
  duration: '100%'
})
  .on('progress', (event) => {
    const progress = event.progress;
    if (progress < 0.1) {
      body.style.background = 'linear-gradient(268.14deg, #4B0082 0%, #663399 100%)';
    } else if (progress < 0.2) {
      body.style.background = 'linear-gradient(268.14deg, #4B0082 0%, #663399 50%, #8B008B 100%)';
    } else if (progress < 0.3) {
      body.style.background = 'linear-gradient(268.14deg, #663399 0%, #8B008B 50%, #B400E1 100%)';
    } else if (progress < 0.4) {
      body.style.background = 'linear-gradient(268.14deg, #8B008B 0%, #B400E1 50%, #6400E3 100%)';
    } else if (progress < 0.5) {
      body.style.background = 'linear-gradient(268.14deg, #B400E1 0%, #6400E3 82.81%)';
    } else if (progress < 0.6) {
      body.style.background = 'linear-gradient(268.14deg, #B400E1 0%, #6400E3 91.41%)';
    } else if (progress < 0.7) {
      body.style.background = 'linear-gradient(268.14deg, #B400E1 0%, #6400E3 95.7%)';
    } else if (progress < 0.8) {
      body.style.background = 'linear-gradient(268.14deg, #B400E1 0%, #6400E3 98.35%)';
    } else if (progress < 0.9) {
      body.style.background = 'linear-gradient(268.14deg, #B400E1 0%, #6400E3 99.17%)';
    } else {
      body.style.background = 'linear-gradient(268.14deg, #B400E1 0%, #6400E3 100%)';
    }
  })
  .on('leave', (event) => {
    if (event.scrollDirection === 'REVERSE') {
      if (event.progress < 0.9) {
        body.style.background = 'rgba(106, 34, 172, 1)';
      } else if (event.progress < 0.8) {
        body.style.background = 'linear-gradient(268.14deg, #B400E1 0%, #6400E3 98.35%)';
      } else if (event.progress < 0.7) {
        body.style.background = 'linear-gradient(268.14deg, #B400E1 0%, #6400E3 95.7%)';
      } else if (event.progress < 0.6) {
        body.style.background = 'linear-gradient(268.14deg, #B400E1 0%, #6400E3 91.41%)';
      } else if (event.progress < 0.5) {
        body.style.background = 'linear-gradient(268.14deg, #B400E1 0%, #6400E3 82.81%)';
      } else if (event.progress < 0.4) {
        body.style.background = 'linear-gradient(268.14deg, #8B008B 0%, #B400E1 50%, #6400E3 100%)';
      } else if (event.progress < 0.3) {
        body.style.background = 'linear-gradient(268.14deg, #663399 0%, #8B008B 50%, #B400E1 100%)';
      } else if (event.progress < 0.2) {
        body.style.background = 'linear-gradient(268.14deg, #4B0082 0%, #663399 50%, #8B008B 100%)';
      } else {
        body.style.background = 'linear-gradient(268.14deg, #4B0082 0%, #663399 100%)';
      }
    }
  })
  .addTo(controller);

  //  8 => 9 экран

  const section9TextLowOpacity = gsap.timeline()
  .to('#section8Text', { duration: 0.5, opacity: '0', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section9',
    triggerHook: 1,
    duration: '100%'
  })
  .setTween(section9TextLowOpacity)
  .addTo(controller);

  const section9Text = gsap.timeline()
  .from('#section9TextReal', { duration: 0.5, opacity: '0', ease: 'power1.out' })
  .to('#section9TextReal', { duration: 0.5, opacity: '1', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section9',
    triggerHook: 1,
    duration: '100%'
  })
  .setTween(section9Text)
  .addTo(controller);

  const blurCircleTween7 = gsap.timeline()
    .to('#blurCircle', { duration: 0.5, filter: 'blur(40px)', background: 'background: linear-gradient(261.69deg, #F9F1EA 43.79%, #FFFFFF 100%)' , bottom: `${window.innerHeight - blurBlockHeight/4}`, left: `${window.innerWidth/2 - blurBlockWidth/2}px`, ease: 'power1.out' });
  new ScrollMagic.Scene({
    triggerElement: '#section9',
    triggerHook: 1,
    duration: '100%'
  })
    .setTween(blurCircleTween7)
    .addTo(controller);

  //  9 => 10 экран
  const blurCircleTween8 = gsap.timeline()
    .to('#blurCircle', { duration: 0.5, filter: 'blur(40px)', background: 'background: linear-gradient(261.69deg, rgba(255, 255, 255, 0.55) 43.79%, rgba(255, 255, 255, 0) 99.99%, #FFFFFF 100%)', bottom: `0px`, left: `${-blurBlockWidth/2}px`, ease: 'power1.out' });
  new ScrollMagic.Scene({
    triggerElement: '#section10',
    triggerHook: 1,
    duration: '100%'
  })
    .setTween(blurCircleTween8)
    .addTo(controller);
    // RELIABILITY
    const section9TextLeft = gsap.timeline()
    .to('#section9TextReal', { duration: 0.5, left: '314px', ease: 'back.in' });
  
    new ScrollMagic.Scene({
      triggerElement: '#section10',
      triggerHook: 1,
      duration: '100%'
    })
    .setTween(section9TextLeft)
    .addTo(controller);

    const section9RoundReal = gsap.timeline()
    .to('#section9RoundReal', { duration: 0.5, opacity: '0', ease: 'power1.out' });
  
    new ScrollMagic.Scene({
      triggerElement: '#section10',
      triggerHook: 1,
      duration: '100%'
    })
    .setTween(section9RoundReal)
    .addTo(controller);

    const section9CheckReal = gsap.timeline()
    .to('#section9CheckReal', { duration: 0.5, top: '-55px', left: '0px', ease: 'power1.out' });
  
    new ScrollMagic.Scene({
      triggerElement: '#section10',
      triggerHook: 1,
      duration: '100%'
    })
    .setTween(section9CheckReal)
    .addTo(controller);
  // EXPRETISE
  const section9TextExp = gsap.timeline()
  .to('#section9TextExp', { duration: 0.5, opacity: '1', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section11',
    triggerHook: 1,
    duration: '100%'
  })
  .setTween(section9TextExp)
  .addTo(controller);

  const section9RoundExp = gsap.timeline()
  .to('#section9RoundExp', { duration: 0.5, opacity: '0', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section12',
    triggerHook: 1,
    duration: '100%'
  })
  .setTween(section9RoundExp)
  .addTo(controller);

  const section9CheckExp = gsap.timeline()
    .to('#section9CheckExp', { duration: 0.5, top: '-55px', left: '0px', ease: 'power1.out' });
  
    new ScrollMagic.Scene({
      triggerElement: '#section12',
      triggerHook: 1,
      duration: '100%'
    })
    .setTween(section9CheckExp)
    .addTo(controller);

  const section9TextExpLeft = gsap.timeline()
  .to('#section9TextExp', { duration: 0.5, left: '50%', transform: 'translate(-50%, -50%)', ease: 'back.in' });

  new ScrollMagic.Scene({
    triggerElement: '#section12',
    triggerHook: 1,
    duration: '100%'
  })
  .setTween(section9TextExpLeft)
  .addTo(controller);

  const blurCircleTween9 = gsap.timeline()
    .to('#blurCircle', { duration: 0.5, filter: 'blur(40px)', background: 'background: linear-gradient(261.69deg, rgba(255, 255, 255, 0.55) 43.79%, rgba(255, 255, 255, 0) 99.99%, #FFFFFF 100%)', bottom: `${window.innerHeight/2 - blurBlockHeight/2}`, left: `${window.innerWidth/2 - blurBlockWidth/2}px`, ease: 'power1.out' });
  new ScrollMagic.Scene({
    triggerElement: '#section11',
    triggerHook: 1,
    duration: '100%'
  })
    .setTween(blurCircleTween9)
    .addTo(controller);

  const blurCircleTween10 = gsap.timeline()
    .to('#blurCircle', { duration: 0.5, filter: 'blur(100px)', ease: 'power1.out' });
  new ScrollMagic.Scene({
    triggerElement: '#section12',
    triggerHook: 1,
    duration: '100%'
  })
    .setTween(blurCircleTween10)
    .addTo(controller);

    const blurCircleTween11 = gsap.timeline()
    .to('#blurCircle', { duration: 0.5, left: `${window.innerWidth - blurBlockWidth}px`, filter: 'blur(40px)', ease: 'power1.out' });
  new ScrollMagic.Scene({
    triggerElement: '#section13',
    triggerHook: 1,
    duration: '100%'
  })
    .setTween(blurCircleTween11)
    .addTo(controller);

    const blurCircleTween12 = gsap.timeline()
    .to('#blurCircle', { duration: 0.5, filter: 'blur(100px)', ease: 'power1.out' });
  new ScrollMagic.Scene({
    triggerElement: '#section14',
    triggerHook: 1,
    duration: '100%'
  })
    .setTween(blurCircleTween12)
    .addTo(controller);

    const blurCircleTween13 = gsap.timeline()
    .to('#blurCircle', { duration: 0.5, left: `${-blurBlockWidth/4}`, bottom: `${-blurBlockHeight/4}` , filter: 'blur(40px)', ease: 'power1.out' });
  new ScrollMagic.Scene({
    triggerElement: '#section15',
    triggerHook: 1,
    duration: '100%'
  })
    .setTween(blurCircleTween13)
    .addTo(controller);

  const blurCircleTween14 = gsap.timeline()
    .to('#blurCircle', { duration: 0.5, left: `${window.innerWidth / 2 - blurBlockWidth / 2}`, bottom: `${window.innerHeight / 2 - blurBlockHeight / 2}`, filter: 'blur(100px)', ease: 'power1.out' });
  new ScrollMagic.Scene({
    triggerElement: '#section16',
    triggerHook: 1,
    duration: '100%'
  })
    .setTween(blurCircleTween14)
    .addTo(controller);
  // TRANSPARENCY
  const section9TextTrans = gsap.timeline()
  .to('#section9TextTrans', { duration: 0.5, opacity: '1', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section13',
    triggerHook: 1,
    duration: '100%'
  })
  .setTween(section9TextTrans)
  .addTo(controller);

  const section9RoundTrans = gsap.timeline()
  .to('#section9RoundTrans', { duration: 0.5, opacity: '0', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section14',
    triggerHook: 1,
    duration: '100%'
  })
  .setTween(section9RoundTrans)
  .addTo(controller);

  const section9CheckTrans = gsap.timeline()
    .to('#section9CheckTrans', { duration: 0.5, top: '-55px', left: '0px', ease: 'power1.out' });
  
    new ScrollMagic.Scene({
      triggerElement: '#section14',
      triggerHook: 1,
      duration: '100%'
    })
    .setTween(section9CheckTrans)
    .addTo(controller);

  // Variability
  const section9TextVar = gsap.timeline()
  .to('#section9TextVar', { duration: 0.5, opacity: '1', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section15',
    triggerHook: 1,
    duration: '100%'
  })
  .setTween(section9TextVar)
  .addTo(controller);
  const section9RoundVar = gsap.timeline()
  .to('#section9RoundVar', { duration: 0.5, opacity: '0', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section16',
    triggerHook: 1,
    duration: '100%'
  })
  .setTween(section9RoundVar)
  .addTo(controller);

  const section9CheckVar = gsap.timeline()
    .to('#section9CheckVar', { duration: 0.5, top: '-55px', left: '0px', ease: 'power1.out' });
  
    new ScrollMagic.Scene({
      triggerElement: '#section16',
      triggerHook: 1,
      duration: '100%'
    })
    .setTween(section9CheckVar)
    .addTo(controller);

    // Support

    const section9TextSup = gsap.timeline()
  .to('#section9TextSup', { duration: 0.5, opacity: '1', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section16',
    triggerHook: 1,
    duration: '100%'
  })
  .setTween(section9TextSup)
  .addTo(controller);

  // Hide all texts in white bg

  const section9TextHide = gsap.timeline()
    .to('#section9TextReal', { duration: 0.5, opacity: '0', ease: 'power1.out' });
  
    new ScrollMagic.Scene({
      triggerElement: '#section17',
      triggerHook: 1,
      duration: '100%'
    })
    .setTween(section9TextHide)
    .addTo(controller);

    const section9TextExpHide = gsap.timeline()
  .to('#section9TextExp', { duration: 0.5, opacity: '0', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section17',
    triggerHook: 1,
    duration: '100%'
  })
  .setTween(section9TextExpHide)
  .addTo(controller);

    const section9TextTransHide = gsap.timeline()
  .to('#section9TextTrans', { duration: 0.5, opacity: '0', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section17',
    triggerHook: 1,
    duration: '100%'
  })
  .setTween(section9TextTransHide)
  .addTo(controller);

    const section9TextVarHide = gsap.timeline()
  .to('#section9TextVar', { duration: 0.5, opacity: '0', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section17',
    triggerHook: 1,
    duration: '100%'
  })
  .setTween(section9TextVarHide)
  .addTo(controller);


    const section9TextSupHide = gsap.timeline()
  .to('#section9TextSup', { duration: 0.5, opacity: '0', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section17',
    triggerHook: 1,
    duration: '100%'
  })
  .setTween(section9TextSupHide)
  .addTo(controller);

  // 13 (пустой, уже без надписей) => 14

  const bodyWhite = gsap.timeline()
  .to('body', { duration: 0.5, background: 'rgba(246, 235, 255, 1)', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section18',
    triggerHook: 1,
    duration: '100%'
  })
  .setTween(bodyWhite)
  .addTo(controller);

  const section18Text = gsap.timeline()
    .to('#section18Text', { duration: 0.5, opacity: '1', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section18',
    triggerHook: 1,
    duration: '100%'
  })
  .setTween(section18Text)
  .addTo(controller);

  const blurCircleTween15 = gsap.timeline()
    .to('#blurCircle', { duration: 0.5, background: 'linear-gradient(261.69deg, #B400E1 43.79%, #6400E3 100%)' , left: `${window.innerWidth - blurBlockWidth}`, bottom: `${window.innerHeight / 2 - blurBlockHeight / 2}`, filter: 'blur(100px)', ease: 'power1.out' });
  new ScrollMagic.Scene({
    triggerElement: '#section18',
    triggerHook: 1,
    duration: '100%'
  })
    .setTween(blurCircleTween15)
    .addTo(controller);

    // покраска вспомогательныъ элементов в чёрный
    new ScrollMagic.Scene({
      triggerElement: '#section18',
      triggerHook: 0.5,
      duration: '100%'
    })
    .on('enter', () => {
      document.querySelector('.burger-bar__icon').src = './images/burger-bar-open-black.svg';
      document.querySelector(".burger-bar__logo").src = "./images/burger-bar-logo-black.svg";
      document.querySelector('.connect-button__arrow').src = './images/connect-button-black.svg';
      document.querySelector('.connect-button').style = 'border: 1px solid rgba(48, 48, 48, 1)';
      document.querySelector('.connect-button__text').style = 'color: rgba(48, 48, 48, 1)';
      document.querySelector('.common-arrow-down').src = './images/arrow-main-down-black.svg';
      document.querySelectorAll('.side-map__link').forEach(link => {
        link.style = 'color: rgba(48, 48, 48, 1)';
      });
      document.querySelectorAll('.side-map__images-circle').forEach((circle, index) => {
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
        document.querySelector('.burger-bar__icon').src = './images/burger-bar-open.svg';
        document.querySelector(".burger-bar__logo").src = "./images/burger-bar-logo.svg";
        document.querySelector('.connect-button__arrow').src = './images/connect-button.svg';
        document.querySelector('.connect-button').style = 'border: 1px solid rgba(255, 255, 255, 1)';
        document.querySelector('.connect-button__text').style = '#FFF';
        document.querySelector('.common-arrow-down').src = './images/arrow-main-down-white.svg';
        document.querySelectorAll('.side-map__link').forEach(link => {
          link.style = 'color: #FFF';
        });
        document.querySelectorAll('.side-map__images-circle').forEach((elem, index) => {
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
    triggerElement: '#section19',
    triggerHook: 1,
    duration: '100%'
  })
    .setTween(section18TextLow)
    .addTo(controller);
  const section19Text = gsap.timeline()
    .to('#section19Text', { duration: 0.5, opacity: '1', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section19',
    triggerHook: 1,
    duration: '100%'
  })
    .setTween(section19Text)
    .addTo(controller);

  const blurCircleTween16 = gsap.timeline()
    .to('#blurCircle', { duration: 0.5, left: `0`, height: '500px', bottom: `${window.innerHeight - 2 * blurBlockHeight / 3}`, filter: 'blur(100px)', ease: 'power1.out' });
  new ScrollMagic.Scene({
    triggerElement: '#section19',
    triggerHook: 1,
    duration: '100%'
  })
    .setTween(blurCircleTween16)
    .addTo(controller);

  const blurCircleSecond16 = gsap.timeline()
    .to('#blurCirclePage4', { duration: 0.5, background: 'linear-gradient(261.69deg, #B400E1 43.79%, #6400E3 100%)', left: `${window.innerWidth}`, top: `${window.innerHeight}`, filter: 'blur(100px)', ease: 'power1.out' });
  new ScrollMagic.Scene({
    triggerElement: '#section19',
    triggerHook: 1,
    duration: '100%'
  })
    .setTween(blurCircleSecond16)
    .addTo(controller);

    // 15 => 16
    const section19TextLow = gsap.timeline()
    .to('#section19Text', { duration: 0.5, opacity: '0', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section20',
    triggerHook: 1,
    duration: '100%'
  })
    .setTween(section19TextLow)
    .addTo(controller);

    const section20Text = gsap.timeline()
    .to('#section20Text', { duration: 0.5, opacity: '1', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section20',
    triggerHook: 1,
    duration: '100%'
  })
    .setTween(section20Text)
    .addTo(controller);

    const blurCircleTween17 = gsap.timeline()
    .to('#blurCircle', { duration: 0.5, filter: 'blur(20px)', height: '1000px', bottom: `${-blurBlockHeight / 2}`, left: `${window.innerWidth - blurBlockWidth/2}`, ease: 'power1.out' });
  new ScrollMagic.Scene({
    triggerElement: '#section20',
    triggerHook: 1,
    duration: '100%'
  })
    .setTween(blurCircleTween17)
    .addTo(controller);
  // 16 => 17

  const section20TextLow = gsap.timeline()
    .to('#section20Text', { duration: 0.5, opacity: '0', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section21',
    triggerHook: 1,
    duration: '100%'
  })
    .setTween(section20TextLow)
    .addTo(controller);

  const section21Text = gsap.timeline()
    .to('#section21Text', { duration: 0.5, opacity: '1', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section21',
    triggerHook: 1,
    duration: '100%'
  })
    .setTween(section21Text)
    .addTo(controller);

    const blurCircleTween18 = gsap.timeline()
    .to('#blurCircle', { duration: 0.5, filter: 'blur(100px)', bottom: `${window.innerHeight/2 -blurBlockHeight / 2}`, left: `${window.innerWidth/2 - blurBlockWidth/2}`, ease: 'power1.out' });
  new ScrollMagic.Scene({
    triggerElement: '#section21',
    triggerHook: 1,
    duration: '100%'
  })
    .setTween(blurCircleTween18)
    .addTo(controller);

    // 17 => 18

    const section21TextLow = gsap.timeline()
    .to('#section21Text', { duration: 0.5, opacity: '0', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section22',
    triggerHook: 1,
    duration: '100%'
  })
    .setTween(section21TextLow)
    .addTo(controller);

    const section22Text = gsap.timeline()
    .to('#section22Text', { duration: 0.5, opacity: '1', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section22',
    triggerHook: 1,
    duration: '100%'
  })
    .setTween(section22Text)
    .addTo(controller);

  const blurCircleTween19 = gsap.timeline()
    .to('#blurCircle', { duration: 0.5, filter: 'blur(20px)', bottom: `${-blurBlockHeight / 2}`, left: `${- blurBlockWidth / 2}`, ease: 'power1.out' });
  new ScrollMagic.Scene({
    triggerElement: '#section22',
    triggerHook: 1,
    duration: '100%'
  })
    .setTween(blurCircleTween19)
    .addTo(controller);

  // 18 => 19

  const blurCircleTween20 = gsap.timeline()
    .to('#blurCircle', { duration: 0.5, width: '0px', height: '0px', filter: 'blur(7px)', bottom: `${window.innerHeight / 2}`, left: `${window.innerWidth / 2}`, ease: 'power1.out' });
  new ScrollMagic.Scene({
    triggerElement: '#section23',
    triggerHook: 1,
    duration: '100%'
  })
    .setTween(blurCircleTween20)
    .addTo(controller);

    const section22TextLow = gsap.timeline()
    .to('#section22Text', { duration: 0.5, opacity: '0', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section23',
    triggerHook: 1,
    duration: '100%'
  })
    .setTween(section22TextLow)
    .addTo(controller);

    const section23Text = gsap.timeline()
    .to('#section23Text', { duration: 0.5, opacity: '1', ease: 'power1.out' });

  new ScrollMagic.Scene({
    triggerElement: '#section23',
    triggerHook: 1,
    duration: '100%'
  })
    .setTween(section23Text)
    .addTo(controller);


    new ScrollMagic.Scene({
      triggerElement: '#section23',
      triggerHook: 0.5,
      duration: '100%'
    })
    .on('enter', () => {
      document.querySelector('.common-arrow-down').style = 'opacity: 0';
      document.querySelector('.page-23-arrow-down').style = 'opacity: 1';
      document.querySelectorAll('.side-map__images-circle').forEach((elem, index) => {
        elem.src = './images/side-map-circle-black.svg';
      })
    })
    .on('leave', (event) => {
      if (event.scrollDirection === 'FORWARD') {
  
      }
      else {
        document.querySelector('.common-arrow-down').style = 'opacity: 1';
        document.querySelector('.page-23-arrow-down').style = 'opacity: 0';
        document.querySelectorAll('.side-map__images-circle').forEach((elem, index) => {
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
    })
});