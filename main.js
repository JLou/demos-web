// anime({
//   targets: [document.getElementsByTagName("div")[0]],
//   translateX: anime.path(document.getElementsByTagName("path")[0]),
//   translateY: anime.path(document.getElementsByTagName("path")[0]),
//   rotate: anime.path(document.getElementsByTagName("path")[0]),
//   duration: 5000,
//   loop: true,
//   easing: "linear"
// });
(function() {
  let anime = require('./anime.min.js');

  var path = anime.path("#motionPath path");

  //   var motionPath = anime({
  //     targets: "#motionPath .box",
  //     translateX: path("x"),
  //     translateY: path("y"),
  //     rotate: path("angle"),
  //     easing: "linear",
  //     duration: 2000,
  //     loop: true
  //   });

  var lineDrawing = anime({
    targets: "#motionPath path",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    duration: function(el, i) {
      return 1000 + i * 100;
    },
    delay: function(el, i) {
      return 400 + i * 300;
    },
    direction: "alternate",
    loop: true
  });

  let charming = require("./charming.min.js");
  charming(document.body.querySelector(".title"), {classPrefix: 'letter'});

    let anim = anime({
      targets: ".title span",
      easing: "easeInOutSine",
      duration: 1000,
      direction: "alternate",
      delay: function(el, index) {
        return 400 + 100 + index * 150;
      },
      direction: "alternate",
      loop: true,
      translateY: function(el, index) {
        return index%2 === 0 ? ['-80%', '0%'] : ['80%', '0%'];
      },
      rotateZ: [90,0],
      rotate: function(el, index) {
        let val = index*7+6+"deg";
        return [val, val];
      },
      opacity:1
    });

})();
