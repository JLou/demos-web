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

  var txt = new TextFx(document.body.querySelector(".title"));

  //   let last;
  //   let f = txt.show("fx17", () => last());
  //   for (let index = 4; index > 0; index--) {
  //     let fnplus1 = f;
  //     f = () => {
  //       document.body
  //         .querySelectorAll(".letter-effect span")
  //         .forEach(el => (el.style.opacity = "0"));
  //       txt.show("fx" + index, fnplus1);
  //     };
  //     last = f;
  //   }
  let ef = txt.effects.fx4;
  ef.in.duration = 1000;
  ef.in.delay = function(el, index) {
    return 400 + 100 + index * 150;
  };
  ef.in.loop = true;
  ef.in.direction = "alternate";
  txt.show(ef);

  //   f();
})();
