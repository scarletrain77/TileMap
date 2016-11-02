// TypeScript file
var Body = (function (_super) {
    __extends(Body, _super);
    function Body(mode) {
        _super.call(this);
        this.timeOnEnterFrame = 0;
        //目前所在的帧数，idle一共8帧，即帧数为0-7
        this.frameNumber = 0;
        //是不是第一次播放
        this.isPlayFirst = true;
        //判断状态切换前的是Run状态还是Idle状态
        this.isRunChild = false;
        this.isIdleChild = false;
        //两个动画的播放起始和结束帧
        this.idleAnimFrameEnd = 7;
        this.runAnimFrameEnd = 7;
        this.mode = "Run";
        var dog01 = new egret.Bitmap(RES.getRes("dog01_png"));
        var dog02 = new egret.Bitmap(RES.getRes("dog02_png"));
        var dog03 = new egret.Bitmap(RES.getRes("dog03_png"));
        var dog04 = new egret.Bitmap(RES.getRes("dog04_png"));
        var dog05 = new egret.Bitmap(RES.getRes("dog05_png"));
        var dog06 = new egret.Bitmap(RES.getRes("dog06_png"));
        var dog07 = new egret.Bitmap(RES.getRes("dog07_png"));
        var dog08 = new egret.Bitmap(RES.getRes("dog08_png"));
        var dog09 = new egret.Bitmap(RES.getRes("dog09_png"));
        var dog10 = new egret.Bitmap(RES.getRes("dog10_png"));
        var dog11 = new egret.Bitmap(RES.getRes("dog11_png"));
        var dog12 = new egret.Bitmap(RES.getRes("dog12_png"));
        var dog13 = new egret.Bitmap(RES.getRes("dog13_png"));
        var dog14 = new egret.Bitmap(RES.getRes("dog14_png"));
        var dog15 = new egret.Bitmap(RES.getRes("dog15_png"));
        var dog16 = new egret.Bitmap(RES.getRes("dog16_png"));
        this.dogIdleArray = [dog01, dog02, dog03, dog04, dog05, dog06, dog07, dog08];
        this.dogRunArray = [dog09, dog10, dog11, dog12, dog13, dog14, dog15, dog16];
        this.mode = mode;
        this.once(egret.Event.ADDED_TO_STAGE, this.onLoad, this);
    }
    var d = __define,c=Body,p=c.prototype;
    p.reset = function () {
        this.isPlayFirst = true;
        if (this.frameNumber == 0) {
            this.frameNumber = 8;
        }
        if (this.isIdleChild == true) {
            this.removeChild(this.dogIdleArray[this.frameNumber - 1]);
        }
        else if (this.isRunChild == true) {
            this.removeChild(this.dogRunArray[this.frameNumber - 1]);
        }
        this.isIdleChild = false;
        this.isRunChild = false;
        this.frameNumber = 0;
    };
    p.onLoad = function (event) {
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        this.timeOnEnterFrame = egret.getTimer();
    };
    p.onEnterFrame = function (e) {
        //帧数大于0的时候，才能移除前一帧
        //当帧数为0的时候，移除的是最后一帧
        //第一次播放的时候，第0帧前面没有要移除的第7帧
        if (this.mode == "Idle") {
            if (this.frameNumber >= 1) {
                this.removeChild(this.dogIdleArray[this.frameNumber - 1]);
            }
            else if (this.frameNumber == 0 && this.isPlayFirst == false) {
                this.removeChild(this.dogIdleArray[this.idleAnimFrameEnd]);
            }
            this.addChild(this.dogIdleArray[this.frameNumber]);
            this.isIdleChild = true;
            this.frameNumber++;
            if (this.frameNumber == 8) {
                this.frameNumber = 0;
            }
            this.isPlayFirst = false;
            this.timeOnEnterFrame = egret.getTimer();
        }
        else if (this.mode == "Run") {
            //console.log("Run:"+this.frameNumber);
            if (this.frameNumber >= 1) {
                this.removeChild(this.dogRunArray[this.frameNumber - 1]);
            }
            else if (this.frameNumber == 0 && this.isPlayFirst == false) {
                this.removeChild(this.dogRunArray[this.runAnimFrameEnd]);
            }
            this.addChild(this.dogRunArray[this.frameNumber]);
            this.isRunChild = true;
            this.frameNumber++;
            if (this.frameNumber == 8) {
                this.frameNumber = 0;
            }
            this.isPlayFirst = false;
            this.timeOnEnterFrame = egret.getTimer();
        }
    };
    return Body;
}(egret.DisplayObjectContainer));
egret.registerClass(Body,'Body');
//# sourceMappingURL=Body.js.map