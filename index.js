var staggerAnimation;



function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function carousel() {
    while (true) {
        for (let i = 1; i <= 3; i++) {
            await gsap.set(`#some-img-${i}`, {
                height: '100%',
            });
            await gsap.to(`#some-img-${i}`, {
                left: -30,
                visibility: 'visible',
                duration: 1,
                ease: Power4.easeOut,
            });
            await sleep(1000);
            gsap.set(`#some-img-${i}`, {
                visibility: 'collapse',
                height: 0,
                left: -60,
            });
        }
    }
}

async function stagger() {
    if (staggerAnimation) {
        staggerAnimation.restart();
        return;
    }
    staggerAnimation = gsap.to('.some-stagger', {
        opacity: 1,
        top: 0,
        duration: 1,
        ease: Power4.easeOut,
        stagger: 0.1,
    });
}


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

    carousel();

    stagger();
})();