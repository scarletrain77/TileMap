// TypeScript file
var TileMap = (function (_super) {
    __extends(TileMap, _super);
    function TileMap() {
        var _this = this;
        _super.call(this);
        //_touchX: number;
        //_touchY: number;
        //_targetX: number;
        //_targetY: number;
        this._column = 8;
        this._row = 8;
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
        ];
        for (var i = 0; i < this._config.length; i++) {
            var tiledata = new TileData(this._config[i].walkable, this._config[i].image, this._config[i].x, this._config[i].y);
            var bitmap = new Tile(tiledata);
            this.addChild(bitmap);
        }
        this._player = new Player();
        this.touchEnabled = true;
        this._player.idle();
        this.addChild(this._player);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            //this._touchX = e.stageX;
            //this._touchY = e.stageY;
            //this._player.move(e.stageX, e.stageY);
            _this.findPathForNode(e.stageX, e.stageY);
        }, this);
        //this._player = player;
    }
    var d = __define,c=TileMap,p=c.prototype;
    p.findPathForNode = function (touchX, touchY) {
        var playerX = Math.floor(this._player._body.x / Tile.TILE_SIZEX);
        var playerY = Math.floor(this._player._body.y / Tile.TILE_SIZEY);
        var gridX = Math.floor(touchX / Tile.TILE_SIZEX);
        var gridY = Math.floor(touchY / Tile.TILE_SIZEY);
        var astar = new AStar();
        var grid = new Grid(this._column, this._row, this._config);
        grid.setStartNode(playerX, playerY);
        grid.setEndNode(gridX, gridY);
        if (astar.findPath(grid)) {
            /*astar.path.map((tile)=>{
                console.log("get");
            });*/
            for (var i = 0; i < astar.path.length; i++) {
                var targetX = astar.path[i].x * Tile.TILE_SIZEX;
                var targetY = astar.path[i].y * Tile.TILE_SIZEY;
                this._player.move(targetX, targetY);
            }
        }
    };
    return TileMap;
}(egret.DisplayObjectContainer));
egret.registerClass(TileMap,'TileMap');
var Tile = (function (_super) {
    __extends(Tile, _super);
    function Tile(data) {
        _super.call(this);
        this.data = data;
        var bitmap = new egret.Bitmap();
        this.addChild(bitmap);
        bitmap.texture = RES.getRes(data.image);
        bitmap.x = data.x * Tile.TILE_SIZEX;
        bitmap.y = data.y * Tile.TILE_SIZEY;
    }
    var d = __define,c=Tile,p=c.prototype;
    Tile.TILE_SIZEX = 80;
    Tile.TILE_SIZEY = 142;
    return Tile;
}(egret.DisplayObjectContainer));
egret.registerClass(Tile,'Tile');
var TileData = (function (_super) {
    __extends(TileData, _super);
    function TileData(walkable, image, x, y) {
        _super.call(this);
        this.walkable = walkable;
        this.image = image;
        this.x = x;
        this.y = y;
    }
    var d = __define,c=TileData,p=c.prototype;
    return TileData;
}(egret.DisplayObjectContainer));
egret.registerClass(TileData,'TileData');
//# sourceMappingURL=TileMap.js.map