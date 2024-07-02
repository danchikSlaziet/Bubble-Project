document.addEventListener('DOMContentLoaded', function() {
  const controller = new ScrollMagic.Controller();
  const blurBlockWidth = document.querySelector('.blur-circle').getBoundingClientRect().width;
  const blurBlockHeight = document.querySelector('.blur-circle').getBoundingClientRect().height;
  console.log(blurBlockHeight);


  // 1 => 2 экран


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



});
