// TypeScript file
class Body extends egret.DisplayObjectContainer {
    private dogIdleArray: egret.Bitmap[];
    private dogRunArray: egret.Bitmap[]
    private timeOnEnterFrame: number = 0;
    //目前所在的帧数，idle一共8帧，即帧数为0-7
    private frameNumber = 0;
    //是不是第一次播放
    private isPlayFirst = true;
    //判断状态切换前的是Run状态还是Idle状态
    private isRunChild = false;
    private isIdleChild = false;
    //两个动画的播放起始和结束帧
    private idleAnimFrameEnd = 7;
    private runAnimFrameEnd = 7;
    public mode = "Run";

    public constructor(mode: string) {
        super();
        var dog01: egret.Bitmap = new egret.Bitmap(RES.getRes("dog01_png"));
        var dog02: egret.Bitmap = new egret.Bitmap(RES.getRes("dog02_png"));
        var dog03: egret.Bitmap = new egret.Bitmap(RES.getRes("dog03_png"));
        var dog04: egret.Bitmap = new egret.Bitmap(RES.getRes("dog04_png"));
        var dog05: egret.Bitmap = new egret.Bitmap(RES.getRes("dog05_png"));
        var dog06: egret.Bitmap = new egret.Bitmap(RES.getRes("dog06_png"));
        var dog07: egret.Bitmap = new egret.Bitmap(RES.getRes("dog07_png"));
        var dog08: egret.Bitmap = new egret.Bitmap(RES.getRes("dog08_png"));
        var dog09: egret.Bitmap = new egret.Bitmap(RES.getRes("dog09_png"));
        var dog10: egret.Bitmap = new egret.Bitmap(RES.getRes("dog10_png"));
        var dog11: egret.Bitmap = new egret.Bitmap(RES.getRes("dog11_png"));
        var dog12: egret.Bitmap = new egret.Bitmap(RES.getRes("dog12_png"));
        var dog13: egret.Bitmap = new egret.Bitmap(RES.getRes("dog13_png"));
        var dog14: egret.Bitmap = new egret.Bitmap(RES.getRes("dog14_png"));
        var dog15: egret.Bitmap = new egret.Bitmap(RES.getRes("dog15_png"));
        var dog16: egret.Bitmap = new egret.Bitmap(RES.getRes("dog16_png"));
        this.dogIdleArray = [dog01, dog02, dog03, dog04, dog05, dog06, dog07, dog08];
        this.dogRunArray = [dog09, dog10, dog11, dog12, dog13, dog14, dog15, dog16];
        this.mode = mode;
        this.once(egret.Event.ADDED_TO_STAGE, this.onLoad, this);
    }

    public reset() {
        this.isPlayFirst = true;
        if (this.frameNumber == 0) {
            this.frameNumber = 8;
        }
        if (this.isIdleChild == true) {
            this.removeChild(this.dogIdleArray[this.frameNumber-1]);
            //console.log("remove idle"+ this.frameNumber);
        } else if (this.isRunChild == true) {
            this.removeChild(this.dogRunArray[this.frameNumber-1]);
            //console.log("remove run" + this.frameNumber);
        }
        this.isIdleChild = false;
        this.isRunChild = false;
        this.frameNumber = 0;
    }
    private onLoad(event: egret.Event) {
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        this.timeOnEnterFrame = egret.getTimer();
    }
    private onEnterFrame(e: egret.Event) {
        //帧数大于0的时候，才能移除前一帧
        //当帧数为0的时候，移除的是最后一帧
        //第一次播放的时候，第0帧前面没有要移除的第7帧
        if (this.mode == "Idle") {
            if (this.frameNumber >= 1) {
                this.removeChild(this.dogIdleArray[this.frameNumber - 1]);
            } else if (this.frameNumber == 0 && this.isPlayFirst == false) {
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
            //console.log(this.frameNumber);
        } else if (this.mode == "Run") {
            //console.log("Run:"+this.frameNumber);
            if (this.frameNumber >= 1) {
                this.removeChild(this.dogRunArray[this.frameNumber - 1]);
            } else if (this.frameNumber == 0 && this.isPlayFirst == false) {
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
    }
}