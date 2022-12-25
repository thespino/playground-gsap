const SHOW_MARKERS = false;


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



(async function () {
    (async function () {
        await sleep(600);

        await gsap.to('#page-loading-cover', {
            opacity: 0,
            duration: 0.3,
            ease: Linear.easeNone,
        });
        await gsap.set('#page-loading-cover', {
            display: 'none',
        });
    })();


    const sections = document.querySelectorAll('.section');
    for (const section of sections) {
        child = section.querySelector('*');

        gsap.timeline({
            scrollTrigger: {
                trigger: section,
                anticipatePin: true,
                scrub: true,
                markers: SHOW_MARKERS,
                start: "-50%",
                end: "-30%",
            },
        }).to(child, {
            opacity: 1,
            ease: Linear.easeNone,
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: section,
                anticipatePin: true,
                scrub: true,
                markers: SHOW_MARKERS,
                start: "20%",
                end: "40%",
            },
        }).to(child, {
            opacity: 0,
            ease: Linear.easeNone,
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: section,
                anticipatePin: true,
                scrub: true,
                markers: SHOW_MARKERS,
                start: "-80%",
                end: "50%",
            },
        }).to(child, {
            translateY: '-150%',
            ease: Linear.easeNone,
        });
    }

})();