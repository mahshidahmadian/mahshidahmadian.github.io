/*
	Ex Machina by TEMPLATED
    templated.co @templatedco
    Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

skel.init({
    prefix: 'css/style',
    resetCSS: true,
    boxModel: 'border',
    grid: {
        gutters: 50
    },
    breakpoints: {
        'mobile': {
            range: '-736',
            lockViewport: false, // Allow zooming
            containers: 'fluid',
            grid: {
                collapse: true,
                gutters: 10
            },
            href: 'css/style-mobile.css' // Add mobile-specific CSS
        },
        '1000px': {
            range: '737-1200', // Adjusted to start after mobile
            containers: 960
        },
        'desktop': {
            range: '1201-', // Start after 1000px breakpoint
            containers: 1200
        }
    }
}, {
    panels: {
        panels: {
            navPanel: {
                breakpoints: 'mobile',
                position: 'left',
                style: 'reveal',
                size: '80%',
                html: '<div data-action="navList" data-args="nav"></div>'
            }
        },
        overlays: {
            titleBar: {
                breakpoints: 'mobile',
                position: 'top-left',
                height: 44,
                width: '100%',
                html: '<span class="toggle" data-action="togglePanel" data-args="navPanel"></span><span class="title" data-action="copyHTML" data-args="logo"></span>'
            }
        }
    }
});
