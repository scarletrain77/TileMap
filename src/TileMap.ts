// TypeScript file
class TileMap extends egret.DisplayObjectContainer {
    _player: Player;
    _block: egret.Bitmap;
    _config: Array<any>;
    //_touchX: number;
    //_touchY: number;
    //_targetX: number;
    //_targetY: number;
    _column: number = 8;
    _row: number = 8;
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
            { x: 1, y: 0, walkable: true, image: "road_jpg" },
            { x: 1, y: 1, walkable: true, image: "road_jpg" },
            { x: 1, y: 2, walkable: true, image: "road_jpg" },
            { x: 1, y: 3, walkable: true, image: "road_jpg" },
            { x: 1, y: 4, walkable: true, image: "road_jpg" },
            { x: 1, y: 5, walkable: true, image: "road_jpg" },
            { x: 1, y: 6, walkable: true, image: "road_jpg" },
            { x: 1, y: 7, walkable: true, image: "road_jpg" },
            { x: 2, y: 0, walkable: true, image: "road_jpg" },
            { x: 2, y: 1, walkable: true, image: "road_jpg" },
            { x: 2, y: 2, walkable: true, image: "road_jpg" },
            { x: 2, y: 3, walkable: true, image: "road_jpg" },
            { x: 2, y: 4, walkable: true, image: "road_jpg" },
            { x: 2, y: 5, walkable: false, image: "block_jpg" },
            { x: 2, y: 6, walkable: false, image: "block_jpg" },
            { x: 2, y: 7, walkable: true, image: "road_jpg" },
            { x: 3, y: 0, walkable: true, image: "road_jpg" },
            { x: 3, y: 1, walkable: true, image: "road_jpg" },
            { x: 3, y: 2, walkable: true, image: "road_jpg" },
            { x: 3, y: 3, walkable: true, image: "road_jpg" },
            { x: 3, y: 4, walkable: true, image: "road_jpg" },
            { x: 3, y: 5, walkable: true, image: "road_jpg" },
            { x: 3, y: 6, walkable: false, image: "block_jpg" },
            { x: 3, y: 7, walkable: true, image: "road_jpg" },
            { x: 4, y: 0, walkable: true, image: "road_jpg" },
            { x: 4, y: 1, walkable: true, image: "road_jpg" },
            { x: 4, y: 2, walkable: true, image: "road_jpg" },
            { x: 4, y: 3, walkable: true, image: "road_jpg" },
            { x: 4, y: 4, walkable: true, image: "road_jpg" },
            { x: 4, y: 5, walkable: true, image: "road_jpg" },
            { x: 4, y: 6, walkable: false, image: "block_jpg" },
            { x: 4, y: 7, walkable: true, image: "road_jpg" },
            { x: 5, y: 0, walkable: true, image: "road_jpg" },
            { x: 5, y: 1, walkable: true, image: "road_jpg" },
            { x: 5, y: 2, walkable: true, image: "road_jpg" },
            { x: 5, y: 3, walkable: true, image: "road_jpg" },
            { x: 5, y: 4, walkable: true, image: "road_jpg" },
            { x: 5, y: 5, walkable: true, image: "road_jpg" },
            { x: 5, y: 6, walkable: false, image: "block_jpg" },
            { x: 5, y: 7, walkable: true, image: "road_jpg" },
            { x: 6, y: 0, walkable: true, image: "road_jpg" },
            { x: 6, y: 1, walkable: true, image: "road_jpg" },
            { x: 6, y: 2, walkable: true, image: "road_jpg" },
            { x: 6, y: 3, walkable: true, image: "road_jpg" },
            { x: 6, y: 4, walkable: true, image: "road_jpg" },
            { x: 6, y: 5, walkable: true, image: "road_jpg" },
            { x: 6, y: 6, walkable: true, image: "road_jpg" },
            { x: 6, y: 7, walkable: true, image: "road_jpg" },
            { x: 7, y: 0, walkable: true, image: "road_jpg" },
            { x: 7, y: 1, walkable: true, image: "road_jpg" },
            { x: 7, y: 2, walkable: true, image: "road_jpg" },
            { x: 7, y: 3, walkable: true, image: "road_jpg" },
            { x: 7, y: 4, walkable: true, image: "road_jpg" },
            { x: 7, y: 5, walkable: true, image: "road_jpg" },
            { x: 7, y: 6, walkable: true, image: "road_jpg" },
            { x: 7, y: 7, walkable: true, image: "road_jpg" }
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
            //this._touchX = e.stageX;
            //this._touchY = e.stageY;
            //this._player.move(e.stageX, e.stageY);
            this.findPathForNode(e.stageX, e.stageY);
        }, this);
        //this._player = player;
        
    }

    private findPathForNode(touchX:number, touchY:number) {
        var playerX: number = Math.floor(this._player._body.x / Tile.TILE_SIZEX);
        var playerY: number = Math.floor(this._player._body.y / Tile.TILE_SIZEY);
        var gridX: number = Math.floor(touchX / Tile.TILE_SIZEX);
        var gridY:number = Math.floor(touchY / Tile.TILE_SIZEY);
        var astar = new AStar();
        var grid = new Grid(this._column, this._row, this._config);
        grid.setStartNode(playerX, playerY);
        grid.setEndNode(gridX, gridY);
        if(astar.findPath(grid)){
            /*astar.path.map((tile)=>{
                console.log("get");
            });*/
            for(var i = 0; i<astar.path.length; i++){
                var targetX:number = astar.path[i].x * Tile.TILE_SIZEX;
                var targetY:number = astar.path[i].y * Tile.TILE_SIZEY;
                this._player.move(targetX, targetY);
            }
        }


    }


}

class Tile extends egret.DisplayObjectContainer {
    public static TILE_SIZEX = 80;
    public static TILE_SIZEY = 142;
    data: TileData;
    constructor(data: TileData) {
        super();
        this.data = data;
        var bitmap = new egret.Bitmap();
        this.addChild(bitmap);
        bitmap.texture = RES.getRes(data.image);
        bitmap.x = data.x * Tile.TILE_SIZEX;
        bitmap.y = data.y * Tile.TILE_SIZEY;
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
