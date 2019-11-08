import {Power1} from 'gsap';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'

import {TimelineLite} from 'gsap/TimelineLite';
import {TweenLite} from 'gsap/TweenLite';
import ScrollMagic from 'scrollmagic';

/**
 * y: 10 вниз относительно начальной точки
 * y: -20 вверх отностилеьно начальной точки
 * x: 0 левый край компонента
 * x: 300 двигается вправый край компонента
 * @type {{curviness: number, values: *[], autoRotate: boolean}}
 */
const flightPath = {
    curviness: 1.25,
    autoRotate: true,
    values: [
        {x: 100, y: -20},
        {x: 300, y: 10},
        {x: 500, y: 100},
        {x: 750, y: -100},
        {x: 350, y: -50},
        {x: 600, y: -100},
        {x: 800, y: 0},
        {x: window.innerWidth, y: -250}

    ]
};

const tween = new TimelineLite();

tween.add(
    TweenLite.to('.paper-plane', 1, {
        bezier: flightPath,
        ease: Power1.easeInOut
    })
);

//scene controller
const controller = new ScrollMagic.Controller();

// scene where you can add events
const scene = new ScrollMagic.Scene({
    triggerElement: '.animation',
    duration: 5000, //animation time
    triggerHook: 0
})
    .setTween(tween)
    // .addIndicators() //debug mode
    .setPin('.animation')
    .addTo(controller);
