// TypeScript file
class TileMap extends egret.DisplayObjectContainer {
    _player: Player;
    _block: egret.Bitmap;
    _config: Array<any>;
    _column: number = 10;
    _row: number = 10;
    _moveX:number[];
    _moveY:number[];
    constructor() {
        super();
        this._config = [
            { x: 0, y: 0, walkable: true, image: "road_jpg" },
            { x: 0, y: 1, walkable: true, image: "road_jpg" },
            { x: 0, y: 2, walkable: true, image: "road_jpg" },
            { x: 0, y: 3, walkable: true, image: "road_jpg" },
            { x: 0, y: 4, walkable: true, image: "road_jpg" },
            { x: 0, y: 5, walkable: true, image: "road_jpg" },
            { x: 0, y: 6, walkable: true, image: "road_jpg" },
            { x: 0, y: 7, walkable: true, image: "road_jpg" },
            { x: 0, y: 8, walkable: true, image: "road_jpg" },
            { x: 0, y: 9, walkable: true, image: "road_jpg" },

            { x: 1, y: 0, walkable: true, image: "road_jpg" },
            { x: 1, y: 1, walkable: true, image: "road_jpg" },
            { x: 1, y: 2, walkable: true, image: "road_jpg" },
            { x: 1, y: 3, walkable: true, image: "road_jpg" },
            { x: 1, y: 4, walkable: true, image: "road_jpg" },
            { x: 1, y: 5, walkable: true, image: "road_jpg" },
            { x: 1, y: 6, walkable: true, image: "road_jpg" },
            { x: 1, y: 7, walkable: true, image: "road_jpg" },
            { x: 1, y: 8, walkable: true, image: "road_jpg" },
            { x: 1, y: 9, walkable: true, image: "road_jpg" },

            { x: 2, y: 0, walkable: true, image: "road_jpg" },
            { x: 2, y: 1, walkable: true, image: "road_jpg" },
            { x: 2, y: 2, walkable: true, image: "road_jpg" },
            { x: 2, y: 3, walkable: true, image: "road_jpg" },
            { x: 2, y: 4, walkable: true, image: "road_jpg" },
            { x: 2, y: 5, walkable: false, image: "block_jpg" },
            { x: 2, y: 6, walkable: false, image: "block_jpg" },
            { x: 2, y: 7, walkable: true, image: "road_jpg" },
            { x: 2, y: 8, walkable: true, image: "road_jpg" },
            { x: 2, y: 9, walkable: true, image: "road_jpg" },

            { x: 3, y: 0, walkable: true, image: "road_jpg" },
            { x: 3, y: 1, walkable: true, image: "road_jpg" },
            { x: 3, y: 2, walkable: true, image: "road_jpg" },
            { x: 3, y: 3, walkable: true, image: "road_jpg" },
            { x: 3, y: 4, walkable: true, image: "road_jpg" },
            { x: 3, y: 5, walkable: true, image: "road_jpg" },
            { x: 3, y: 6, walkable: false, image: "block_jpg" },
            { x: 3, y: 7, walkable: true, image: "road_jpg" },
            { x: 3, y: 8, walkable: true, image: "road_jpg" },
            { x: 3, y: 9, walkable: true, image: "road_jpg" },

            { x: 4, y: 0, walkable: true, image: "road_jpg" },
            { x: 4, y: 1, walkable: true, image: "road_jpg" },
            { x: 4, y: 2, walkable: true, image: "road_jpg" },
            { x: 4, y: 3, walkable: true, image: "road_jpg" },
            { x: 4, y: 4, walkable: true, image: "road_jpg" },
            { x: 4, y: 5, walkable: true, image: "road_jpg" },
            { x: 4, y: 6, walkable: false, image: "block_jpg" },
            { x: 4, y: 7, walkable: true, image: "road_jpg" },
            { x: 4, y: 8, walkable: true, image: "road_jpg" },
            { x: 4, y: 9, walkable: true, image: "road_jpg" },

            { x: 5, y: 0, walkable: true, image: "road_jpg" },
            { x: 5, y: 1, walkable: true, image: "road_jpg" },
            { x: 5, y: 2, walkable: true, image: "road_jpg" },
            { x: 5, y: 3, walkable: true, image: "road_jpg" },
            { x: 5, y: 4, walkable: true, image: "road_jpg" },
            { x: 5, y: 5, walkable: true, image: "road_jpg" },
            { x: 5, y: 6, walkable: false, image: "block_jpg" },
            { x: 5, y: 7, walkable: true, image: "road_jpg" },
            { x: 5, y: 8, walkable: true, image: "road_jpg" },
            { x: 5, y: 9, walkable: true, image: "road_jpg" },

            { x: 6, y: 0, walkable: true, image: "road_jpg" },
            { x: 6, y: 1, walkable: false, image: "block_jpg" },
            { x: 6, y: 2, walkable: false, image: "block_jpg" },
            { x: 6, y: 3, walkable: false, image: "block_jpg" },
            { x: 6, y: 4, walkable: false, image: "block_jpg" },
            { x: 6, y: 5, walkable: false, image: "block_jpg" },
            { x: 6, y: 6, walkable: false, image: "block_jpg" },
            { x: 6, y: 7, walkable: false, image: "block_jpg" },
            { x: 6, y: 8, walkable: false, image: "block_jpg" },
            { x: 6, y: 9, walkable: true, image: "road_jpg" },

            { x: 7, y: 0, walkable: true, image: "road_jpg" },
            { x: 7, y: 1, walkable: true, image: "road_jpg" },
            { x: 7, y: 2, walkable: true, image: "road_jpg" },
            { x: 7, y: 3, walkable: true, image: "road_jpg" },
            { x: 7, y: 4, walkable: true, image: "road_jpg" },
            { x: 7, y: 5, walkable: true, image: "road_jpg" },
            { x: 7, y: 6, walkable: true, image: "road_jpg" },
            { x: 7, y: 7, walkable: true, image: "road_jpg" },
            { x: 7, y: 8, walkable: true, image: "road_jpg" },
            { x: 7, y: 9, walkable: true, image: "road_jpg" },

            { x: 8, y: 0, walkable: true, image: "road_jpg" },
            { x: 8, y: 1, walkable: true, image: "road_jpg" },
            { x: 8, y: 2, walkable: true, image: "road_jpg" },
            { x: 8, y: 3, walkable: true, image: "road_jpg" },
            { x: 8, y: 4, walkable: true, image: "road_jpg" },
            { x: 8, y: 5, walkable: true, image: "road_jpg" },
            { x: 8, y: 6, walkable: true, image: "road_jpg" },
            { x: 8, y: 7, walkable: true, image: "road_jpg" },
            { x: 8, y: 8, walkable: true, image: "road_jpg" },
            { x: 8, y: 9, walkable: true, image: "road_jpg" },

            { x: 9, y: 0, walkable: true, image: "road_jpg" },
            { x: 9, y: 1, walkable: true, image: "road_jpg" },
            { x: 9, y: 2, walkable: true, image: "road_jpg" },
            { x: 9, y: 3, walkable: true, image: "road_jpg" },
            { x: 9, y: 4, walkable: true, image: "road_jpg" },
            { x: 9, y: 5, walkable: true, image: "road_jpg" },
            { x: 9, y: 6, walkable: true, image: "road_jpg" },
            { x: 9, y: 7, walkable: true, image: "road_jpg" },
            { x: 9, y: 8, walkable: true, image: "road_jpg" },
            { x: 9, y: 9, walkable: true, image: "road_jpg" },
        ]
        for (var i = 0; i < this._config.length; i++) {
            var tiledata: TileData = new TileData(this._config[i].walkable, this._config[i].image, this._config[i].x, this._config[i].y);
            var bitmap: Tile = new Tile(tiledata);
            this.addChild(bitmap);
        }
        this._player = new Player();
        this.touchEnabled = true;
        this._player.idle();
        this.addChild(this._player);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, (e) => {
            this._moveX = new Array();
            this._moveY = new Array();
            this.findPathForNode(e.stageX, e.stageY);
            console.log("point:x:" + e.stageX + "y:" + e.stageY);
        }, this);
    }

    private findPathForNode(touchX: number, touchY: number) {
        var playerX: number = Math.floor(this._player._body.x / Tile.TILE_SIZE);
        var playerY: number = Math.floor(this._player._body.y / Tile.TILE_SIZE);
        var gridX: number = Math.floor(touchX / Tile.TILE_SIZE);
        var gridY: number = Math.floor(touchY / Tile.TILE_SIZE);
        var astar = new AStar();
        var grid = new Grid(this._column, this._row, this._config);
        grid.setStartNode(playerX, playerY);
        grid.setEndNode(gridX, gridY);
        if (astar.findPath(grid)) {
            //var alphax = 1;
            for (var i = 0; i < astar.path.length; i++) {
                var targetX: number = astar.path[i].x * Tile.TILE_SIZE + Tile.TILE_SIZE / 2 - Body.RUN_BODY_W/2;
                var targetY: number = astar.path[i].y * Tile.TILE_SIZE + Tile.TILE_SIZE / 2 - Body.RUN_BODY_H/2;
                this._moveX[i] = targetX;
                this._moveY[i] = targetY;
                
                //用圆表示路径
                /*var circle = new egret.Shape();
                circle.graphics.beginFill(0xff000, alphax);
                circle.graphics.drawCircle(targetX, targetY, 50);
                circle.graphics.endFill();
                this.addChild(circle);
                alphax -= 0.1;
                if(alphax == 0){
                    alphax = 1;
                }*/
            }
            this._player.move(this._moveX, this._moveY);
        }


    }


}

class Tile extends egret.DisplayObjectContainer {
    public static TILE_SIZE = 64;
    data: TileData;
    constructor(data: TileData) {
        super();
        this.data = data;
        var bitmap = new egret.Bitmap();
        this.addChild(bitmap);
        bitmap.texture = RES.getRes(data.image);
        bitmap.height = Tile.TILE_SIZE;
        bitmap.width = Tile.TILE_SIZE;
        bitmap.x = data.x * Tile.TILE_SIZE;
        bitmap.y = data.y * Tile.TILE_SIZE;
    }
}

class TileData extends egret.DisplayObjectContainer {
    public walkable: boolean;
    public image: string;
    constructor(walkable: boolean, image: string, x: number, y: number) {
        super();
        this.walkable = walkable;
        this.image = image;
        this.x = x;
        this.y = y;
    }
}
