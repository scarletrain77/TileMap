class Main extends egret.DisplayObjectContainer {

    /**
     * 加载进度界面
     * Process interface loading
     */
    private loadingView: LoadingUI;

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {
        //设置加载进度界面
        //Config to load process interface
        this.loadingView = new LoadingUI();
        this.stage.addChild(this.loadingView);

        //初始化Resource资源加载库
        //initiate Resource loading library
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    }

    /**
     * 配置文件加载完成,开始预加载preload资源组。
     * configuration file loading is completed, start to pre-load the preload resource group
     */
    private onConfigComplete(event: RES.ResourceEvent): void {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        RES.loadGroup("preload");
    }

    /**
     * preload资源组加载完成
     * Preload resource group is loaded
     */
    private onResourceLoadComplete(event: RES.ResourceEvent): void {
        if (event.groupName == "preload") {
            this.stage.removeChild(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            this.createGameScene();
        }
    }

    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    private onItemLoadError(event: RES.ResourceEvent): void {
        console.warn("Url:" + event.resItem.url + " has failed to load");
    }

    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    private onResourceLoadError(event: RES.ResourceEvent): void {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        //Ignore the loading failed projects
        this.onResourceLoadComplete(event);
    }

    /**
     * preload资源组加载进度
     * Loading process of preload resource group
     */
    private onResourceProgress(event: RES.ResourceEvent): void {
        if (event.groupName == "preload") {
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    }

    private textfield: egret.TextField;

    /**
     * 创建游戏场景
     * Create a game scene
     */
    private createGameScene(): void {
        var sky: egret.Bitmap = this.createBitmapByName("bg_jpg");
        this.addChild(sky);
        var stageW: number = this.stage.stageWidth;
        var stageH: number = this.stage.stageHeight;
        sky.width = stageW;
        sky.height = stageH;

        var config = [
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

        //var container = new egret.DisplayObjectContainer();
        for (var i = 0; i < config.length; i++) {
            var tiledata: TileData = new TileData(config[i].walkable, config[i].image, config[i].x, config[i].y);
            var bitmap: Tile = new Tile(tiledata);
            this.addChild(bitmap);
            /*var tile = config[i];
            var bitmap = new egret.Bitmap();
            bitmap.texture = RES.getRes(tile.image);
            bitmap.x = tile.x;
            bitmap.y = tile.y;
            this.addChild(bitmap);
            console.log("第"+i+"x:"+bitmap.x + "y"+bitmap.y);*/
        }
    }

    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    private createBitmapByName(name: string): egret.Bitmap {
        var result = new egret.Bitmap();
        var texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
}

var TILESIZEX = 80;
var TILESIZEY = 142;

class Tile extends egret.DisplayObjectContainer {
    data: TileData;
    constructor(data: TileData) {
        super();
        this.data = data;
        var bitmap = new egret.Bitmap();
        this.addChild(bitmap);
        bitmap.texture = RES.getRes(data.image);
        bitmap.x = data.x * TILESIZEX;
        bitmap.y = data.y * TILESIZEY;
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
