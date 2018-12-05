/* particlesJS('dom-id', params);
/* @dom-id : set the html tag id [string, optional, default value : particles-js]
/* @params: set the params [object, optional, default values : check particles.js] */

/* config dom id (optional) + config particles params */

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);

// particlesJS('particles-js', {
//   particles: {
//     color: '#fff', // Color del vertice
//     color_random: false,
//     shape: 'circle', // "circle", "edge" or "triangle" // Establecemos cual de las 3 figuras queremos para vertice
//     opacity: {
//       opacity: 1, // Opacidad del vertice
//       anim: {
//         enable: true,
//         speed: 1.5,
//         opacity_min: 0,
//         sync: false
//       }
//     },
//     size: 4,
//     size_random: true,
//     nb: 150,
//     line_linked: {
//       enable_auto: true,
//       distance: 100,
//       color: '#fff', // Color de la arista
//       opacity: 1, // Opacidad de la arista
//       width: 1,
//       condensed_mode: {
//         enable: false,
//         rotateX: 600,
//         rotateY: 600
//       }
//     },
//     anim: {
//       enable: true,
//       speed: 1 // Velocidad a la que se mueven las aristas
//     }
//   },
//   interactivity: {
//     enable: true,
//     mouse: {
//       distance: 300
//     },
//     detect_on: 'canvas', // "canvas" or "window"
//     mode: 'grab', // "grab" of false
//     line_linked: {
//       opacity: .5
//     },
//     events: {
//       onclick: {
//         enable: true,
//         mode: 'push', // "push" or "remove"
//         nb: 4
//       },
//       onresize: {
//         enable: true,
//         mode: 'out', // "out" or "bounce"
//         density_auto: false,
//         density_area: 800 // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
//       }
//     }
//   },
//   /* Retina Display Support */
//   retina_detect: true
// });