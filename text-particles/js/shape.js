/**
 * Created by insomniahl on 2016/11/8.
 */
function Shape(x, y, txt) {
    this.x = x;
    this.y = y;
    this.size = 200;
    this.txt = txt;
    this.placement = [];
}

Shape.prototype.getValue = function () {
    context.textAlign = "center";
    //若无arial,则显示不出来
    context.font = this.size + "px arial";
    context.fillText(this.txt, this.x, this.y);
    var idata = context.getImageData(0, 0, W, H);
    var buffer32 = new Uint32Array(idata.data.buffer);
    for (var i = 0; i < H; i += gridY) {
        for (var j = 0; j < W; j += gridX) {
            if (buffer32[i * W + j]) {
                var particle = new Particle(j, i, type);
                this.placement.push(particle);
            }
        }
    }
    context.clearRect(0, 0, W, H);
};