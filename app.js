gsap.registerPlugin(ScrollTrigger);

var summer_tl = gsap.timeline( { defaults: { duration: 16 },
    scrollTrigger: {
        trigger: '.summer-animation',
        scrub: 1,
        pin: true,
        start: 'top top',
        end: '+=2730px'
    }
})
.to('.summer-songs', {
    motionPath: {
        path: [ {x: -2730 + document.documentElement.clientWidth, y: 0} ]
    },
    duration: 13,
    ease: 'power3.inOut'
})
.to('.summer-sun', {
    motionPath: {
        path: [ {x: document.documentElement.clientWidth / 2, y: -0.2 * document.documentElement.clientWidth}, {x: document.documentElement.clientWidth, y: 0} ]
    },
    duration: 10,
    ease: 'power1.inOut'
}, '-=13')
.to('.summer-moon', {
    motionPath: {
        path: [ {x: document.documentElement.clientWidth / 2, y: -0.2 * document.documentElement.clientWidth}, {x: document.documentElement.clientWidth, y: 0} ]
    },
    duration: 10,
    ease: 'power1.inOut'
}, '-=9')
.to('.summer-background', { background: "linear-gradient(90deg, hsla(320, 45%, 16%, 1) 0%, hsla(318, 17%, 12%, 1) 50%, hsla(0, 0%, 0%, 1) 100%)", duration: 1.25 }, '-0.25')
.to('.summer-1', { opacity: 0, duration: 1.25 }, '2.25')
.to('.summer-background', { background: "linear-gradient(90deg, hsla(320, 63%, 32%, 1) 0%, hsla(319, 33%, 28%, 1) 50%, hsla(318, 17%, 12%, 1) 100%)", duration: 1.25 }, '2.25')
.to('.summer-2', { opacity: 0, duration: 1.25 }, '3')
.to('.summer-background', { background: "linear-gradient(90deg, hsla(257, 63%, 32%, 1) 0%, hsla(238, 43%, 43%, 1) 50%, hsla(238, 43%, 43%, 1) 100%)", duration: 1.25 }, '3')
.to('.summer-3', { opacity: 0, duration: 1.25 }, '3.75')
.to('.summer-background', { background: "linear-gradient(90deg, hsla(222, 60%, 53%, 1) 0%, hsla(214, 70%, 66%, 1) 50%, hsla(222, 60%, 53%, 1) 100%)", duration: 1.25 }, '3.75')
.to('.summer-4', { opacity: 0, duration: 2 }, '4.5')
.to('.summer-background', { background: "linear-gradient(90deg, hsla(222, 60%, 53%, 1) 0%, hsla(214, 70%, 66%, 1) 50%, hsla(264, 79%, 63%, 1) 100%)", duration: 2 }, '4.5')
.to('.summer-5', { opacity: 0, duration: 1.25 }, '5.25')
.to('.summer-background', { background: "linear-gradient(90deg, hsla(222, 40%, 50%, 1) 0%, hsla(214, 39%, 53%, 1) 50%, hsla(264, 36%, 43%, 1) 100%)", duration: 1.25 }, '5.25')
.to('.summer-6', { opacity: 0, duration: 1.25 }, '6')
.to('.summer-animation', { background: "#000000", duration: 1 }, '6')
.to('.summer-background', { background: "linear-gradient(90deg, hsla(222, 34%, 25%, 1) 0%, hsla(213, 30%, 28%, 1) 50%, hsla(264, 30%, 23%, 1) 100%)", duration: 1.25 }, '6')
.to('.summer-background', { background: "linear-gradient(90deg, hsla(222, 20%, 13%, 1) 0%, hsla(212, 23%, 14%, 1) 50%, hsla(265, 38%, 6%, 1) 100%)", duration: 1.25 }, '7.25')
.to('.summer-background', { background: "linear-gradient(0deg, hsla(0, 0%, 0%, 1) 0%, hsla(0, 0%, 0%, 1) 50%, hsla(0, 0%, 0%, 1) 100%)", duration: 5.5 }, '8.5')

var autumn_tl = gsap.timeline( { defaults: { duration: 16 },
    scrollTrigger: {
        trigger: '.autumn-animation',
        scrub: 1,
        pin: true,
        start: 'top top',
        end: '+=2830px'
    }
})
.to('.autumn-songs', {
    motionPath: {
        path: [ {x: -2830 + document.documentElement.clientWidth + 100, y: 0} ]
    },
    duration: 13,
    ease: 'power3.inOut'
})
.to('.autumn-sun', {
    motionPath: {
        path: [ {x: document.documentElement.clientWidth / 2, y: -0.2 * document.documentElement.clientWidth}, {x: document.documentElement.clientWidth, y: 0} ]
    },
    duration: 10,
    ease: 'power1.inOut'
}, '-=13')
.to('.autumn-moon', {
    motionPath: {
        path: [ {x: document.documentElement.clientWidth / 2, y: -0.2 * document.documentElement.clientWidth}, {x: document.documentElement.clientWidth, y: 0} ]
    },
    duration: 10,
    ease: 'power1.inOut'
}, '-=9')
.to('.autumn-background', { background: "linear-gradient(90deg, hsla(333, 34%, 45%, 1) 0%, hsla(0, 0%, 22%, 1) 50%, hsla(0, 0%, 17%, 1) 100%)", duration: 1.25 }, '-0.25')
.to('.autumn-1', { opacity: 0, duration: 1.25 }, '2.25')
.to('.autumn-background', { background: "linear-gradient(90deg, hsla(345, 37%, 45%, 1) 0%, hsla(0, 0%, 26%, 1) 50%, hsla(0, 0%, 22%, 1) 100%)", duration: 1.25 }, '2.25')
.to('.autumn-2', { opacity: 0, duration: 1.25 }, '3')
.to('.autumn-background', { background: "linear-gradient(90deg, hsla(353, 26%, 58%, 1) 0%, hsla(0, 0%, 40%, 1) 50%, hsla(0, 0%, 35%, 1) 100%)", duration: 1.25 }, '3')
.to('.autumn-3', { opacity: 0, duration: 1.25 }, '3.75')
.to('.autumn-background', { background: "linear-gradient(90deg, hsla(353, 6%, 72%, 1) 0%, hsla(0, 0%, 50%, 1) 50%, hsla(0, 0%, 50%, 1) 100%)", duration: 1.25 }, '3.75')
.to('.autumn-4', { opacity: 0, duration: 2 }, '4.5')
.to('.autumn-5', { opacity: 1, duration: 0.5 }, '4.5')
.to('.autumn-background', { background: "linear-gradient(90deg, hsla(0, 0%, 56%, 1) 0%, hsla(0, 0%, 67%, 1) 50%, hsla(0, 0%, 56%, 1) 100%)", duration: 2 }, '4.5')
.to('.autumn-5', { opacity: 0, duration: 1.25 }, '5.25')
.to('.autumn-6', { opacity: 1, duration: 0.5 }, '5.25')
.to('.autumn-background', { background: "linear-gradient(90deg, hsla(0, 0%, 26%, 1) 0%, hsla(0, 0%, 33%, 1) 50%, hsla(0, 48%, 38%, 1) 100%)", duration: 1.25 }, '5.25')
.to('.autumn-6', { opacity: 0, duration: 1.25 }, '6')
.to('.autumn-animation', { background: "#000000", duration: 1 }, '6')
.to('.autumn-7', { opacity: 1, duration: 0.5 }, '6')
.to('.autumn-background', { background: "linear-gradient(90deg, hsla(0, 0%, 21%, 1) 0%, hsla(0, 0%, 25%, 1) 50%, hsla(0, 58%, 15%, 1) 100%)", duration: 1.25 }, '6')
.to('.autumn-background', { background: "linear-gradient(90deg, hsla(0, 0%, 16%, 1) 0%, hsla(0, 0%, 16%, 1) 50%, hsla(0, 74%, 9%, 1) 100%)", duration: 1.25 }, '7.25')
.to('.autumn-background', { background: "linear-gradient(0deg, hsla(0, 0%, 0%, 1) 0%, hsla(0, 0%, 0%, 1) 50%, hsla(0, 0%, 0%, 1) 100%)", duration: 5.5 }, '8.5')
