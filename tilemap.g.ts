// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile12 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level":
            case "level1":return tiles.createTilemap(hex`200010000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010105010201010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010102010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101020101010101010101010101010101010101010101010101010101010101010101010101010104040404040101010101010101010101010101010102010104040404010101010101010104010101010101010101010101010101010101010101010401010101010101010401010101010101010101010101010101010101010101040101010101010101040101010201010101010101010101040404040101010104010104010101010104010101030101010101010101010101010104010101010401010101010101010404040404010101010101010101010101010401010101040101010101010101040404040401010101010101010101010101040101010104010101010101010104040404040601010101010101010101010104010101010401010101010101010404040404`, img`
................................
................................
................................
................................
................................
................................
................................
.......................22222....
...............2222........2....
..................2........2....
..................2........2....
..........2222....2..2.....2....
.............2....2........22222
.............2....2........22222
.............2....2........22222
.............2....2........22222
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile6,myTiles.tile9], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100003030303030303030107030303010303030303030303030303030303030303030303030303030303030303030303030303030303010303030303030303030203030303030303030403030303040404030303030303030303030303030303030303030403030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030403030303030303030303030303030303030303030303030303030303030303030303030303030303030303060303030303030303030303030303030303030104030303030303030303030303030303030303030303030303030303030305030303030303030303030303030303`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 2 . . . . 2 2 2 . 
. . . . . . . . . . . . . . . . 
. . 2 . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 2 . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 2 . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile2,myTiles.tile3,myTiles.tile1,myTiles.tile4,myTiles.tile9,myTiles.tile12,myTiles.tile6], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "tile":
            case "tile1":return tile1;
            case "diamondTile":
            case "tile2":return tile2;
            case "lockedDoor":
            case "tile3":return tile3;
            case "floor":
            case "tile4":return tile4;
            case "torch":
            case "tile5":return tile5;
            case "lever":
            case "tile6":return tile6;
            case "leverFlicked":
            case "tile8":return tile8;
            case "doorOpen":
            case "tile7":return tile7;
            case "heroSpawn":
            case "tile9":return tile9;
            case "myTile":
            case "tile10":return tile10;
            case "myTile0":
            case "tile11":return tile11;
            case "sniper":
            case "tile12":return tile12;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
