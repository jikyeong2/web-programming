// 메소드 (Method)
let rectAngle = {
  width: 30,
  height: 50,
  getArea: function () {
    return rectAngle.width * rectAngle.height;
  }
}

let triAngle = {
  width: 15,
  height: 40,
  getArea: function () {
    return triAngle.width * triAngle.height / 2;
  }
}

rectAngle.getArea();