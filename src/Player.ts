// TypeScript file
class Player extends egret.DisplayObjectContainer {

    _modeText: egret.TextField;
    // _body: egret.MovieClip;
    _body: Body;
    _stateMachine: StateMachine;


    constructor() {
        super();
        //var data = RES.getRes("dog_json");
        //var txtr = RES.getRes("dog_png");
        //var mcFactory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(data, txtr);
        //this._body = new egret.MovieClip(mcFactory.generateMovieClipData("dog"));
        this._body = new Body("Idle");
        this._modeText = new egret.TextField();
        this._stateMachine = new StateMachine();

        this._modeText.y = 30;
        this._modeText.text = "Now is playing";

        this.addChild(this._body);
        this.addChild(this._modeText);

        //this._body.gotoAndPlay("idle", -1);
    }

    move(targetX: number[], targetY: number[]) {
        this._stateMachine.setState(new PlayerMoveState(this, targetX, targetY));
    }

    idle() {
        this._stateMachine.setState(new PlayerIdleState(this));
    }
}

/**
 * 状态机。currentState现在的状态，setState设置状态。先结束前一个状态，再把现在的状态赋值进来
 */
class StateMachine {
    _currentState: State;
    setState(s: State) {
        if (this._currentState) {
            this._currentState.onExit();
        }
        this._currentState = s;
        this._currentState.onEnter();
    }
}

/**
 * 状态接口，有两个方法。
 */
interface State {
    onEnter();
    onExit();
}

/**
 * 实现状态。_player为目前的人物，
 */
class PlayerState implements State {
    _player: Player;
    constructor(player: Player) {
        this._player = player;
    }

    onEnter() { }
    onExit() { }
}

class PlayerMoveState extends PlayerState {
    _targetX: number[];
    _targetY: number[];
    constructor(player: Player, targetX: number[], targetY: number[]) {
        super(player);
        this._targetX = targetX;
        this._targetY = targetY;
    }
    onEnter() {
        this._player._modeText.text = "Now is moving";
        //var body = new Body("Move");
        //this._player._body.gotoAndPlay("run", -1);
        this._player._body.reset();
        this._player._body.mode = "Run";
        var tw = egret.Tween.get(this._player._body);
        for (var i = 0; i < this._targetX.length; i++) {
            if (i == this._targetX.length - 1) {
                tw.to({ x: this._targetX[i], y: this._targetY[i] }, 200).call(this._player.idle, this._player);
            } else {
                tw.to({ x: this._targetX[i], y: this._targetY[i] }, 200);
            }
        }
        console.log("playerX:" + this._player._body.x + "playerY:" + this._player._body.y);
    }
}

class PlayerIdleState extends PlayerState {

    onEnter() {
        //this._player._body.gotoAndPlay("idle");
        // var body = new Body("Idle");
        this._player._body.reset();
        this._player._body.mode = "Idle";
        this._player._modeText.text = "Now is idling";
    }
}