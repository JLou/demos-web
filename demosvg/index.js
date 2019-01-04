import anime from "../anime.min";

var timeline = anime.timeline();

timeline
  .add({
    targets: "#jlp .st0",
    offset: 0,
    rotateZ: ["-70deg", "0"],
    translateY: [-80, 0],
    translateX: [50, 0],
    duration: 1000,
    elasticity: 500,

    delay: function(el, index) {
      return index * 300;
    },
    easing: "easeOutElastic"
  })
  .add({
    offset: 0,
    targets: "#jlp .st1",
    rotate: ["-70deg", "0"],
    translateY: [-80, 0],
    translateX: [50, 0],
    duration: 1000,
    elasticity: 500,
    delay: function(el, index) {
      return index * 300;
    },
    easing: "easeOutElastic"
  })
  .add({
    targets: "#jlp path",
    easing: "linear",
    opacity: [0, 1],
    duration: 300,
    offset: 200
    // delay: function(el, index) {
    //   return index * 300;
    // }
  })
  .add({
    targets: "#jlp .st0",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeOutQuad",
    duration: 600,
    delay: function(el, index) {
      return index * 300;
    },
    offset: 100
  })
  .add({
    targets: "#jlp .st3",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeOutQuad",
    duration: 600,
    delay: function(el, index) {
      return index * 300;
    },
    offset: 300
  })
  .add({
    targets: "#jlp .st1",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeOutQuad",
    duration: 500,
    delay: function(el, index) {
      return index * 300;
    },
    offset: 600
  });
