(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/config.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'd436cfLvcBFOZas0mcYONrI', 'config', __filename);
// script/config.ts

Object.defineProperty(exports, "__esModule", { value: true });
/** 游戏配置 */
exports.config = {
    /** 方格宽 */
    blockWidth: 90,
    /** 方格高 */
    blockHeight: 80,
    /** 小动物宽 */
    itemWidth: 78,
    /** 小动物高 */
    itemHeight: 67,
    /** 行数 */
    row: 12,
    /** 列数 */
    col: 7,
    /** 每次新生成形状时的中心位置 */
    startPos: cc.v2(1, 3),
    // 形状数据,以（1，1）为中心参考
    /** 长条形 */
    shape1: [
        [cc.v2(0, -1), cc.v2(0, 0), cc.v2(0, 1), cc.v2(0, 2)],
        [cc.v2(-1, 0), cc.v2(0, 0), cc.v2(1, 0), cc.v2(2, 0)],
        [cc.v2(0, -1), cc.v2(0, 0), cc.v2(0, 1), cc.v2(0, 2)],
        [cc.v2(-1, 0), cc.v2(0, 0), cc.v2(1, 0), cc.v2(2, 0)]
    ],
    /** 方形 */
    shape2: [
        [cc.v2(-1, -1), cc.v2(-1, 0), cc.v2(0, -1), cc.v2(0, 0)],
        [cc.v2(-1, -1), cc.v2(-1, 0), cc.v2(0, -1), cc.v2(0, 0)],
        [cc.v2(-1, -1), cc.v2(-1, 0), cc.v2(0, -1), cc.v2(0, 0)],
        [cc.v2(-1, -1), cc.v2(-1, 0), cc.v2(0, -1), cc.v2(0, 0)]
    ],
    /** T形 */
    shape3: [
        [cc.v2(0, -1), cc.v2(-1, 0), cc.v2(0, 0), cc.v2(0, 1)],
        [cc.v2(1, 0), cc.v2(-1, 0), cc.v2(0, 0), cc.v2(0, 1)],
        [cc.v2(0, -1), cc.v2(1, 0), cc.v2(0, 0), cc.v2(0, 1)],
        [cc.v2(0, -1), cc.v2(-1, 0), cc.v2(0, 0), cc.v2(1, 0)]
    ],
    /** L形 */
    shape4: [
        [cc.v2(-1, 0), cc.v2(0, 0), cc.v2(1, 0), cc.v2(1, 1)],
        [cc.v2(1, -1), cc.v2(0, -1), cc.v2(0, 0), cc.v2(0, 1)],
        [cc.v2(-1, -1), cc.v2(-1, 0), cc.v2(0, 0), cc.v2(1, 0)],
        [cc.v2(-1, 1), cc.v2(0, -1), cc.v2(0, 0), cc.v2(0, 1)]
    ],
    /** 翻转L */
    shape5: [
        [cc.v2(-1, 0), cc.v2(0, 0), cc.v2(1, 0), cc.v2(1, -1)],
        [cc.v2(-1, -1), cc.v2(0, -1), cc.v2(0, 0), cc.v2(0, 1)],
        [cc.v2(-1, 0), cc.v2(-1, 1), cc.v2(0, 0), cc.v2(1, 0)],
        [cc.v2(0, -1), cc.v2(0, 0), cc.v2(0, 1), cc.v2(1, 1)]
    ],
    /** S形 */
    shape6: [
        [cc.v2(-1, 0), cc.v2(-1, 1), cc.v2(0, -1), cc.v2(0, 0)],
        [cc.v2(-1, -1), cc.v2(0, -1), cc.v2(0, 0), cc.v2(1, 0)],
        [cc.v2(-1, 0), cc.v2(-1, 1), cc.v2(0, -1), cc.v2(0, 0)],
        [cc.v2(-1, -1), cc.v2(0, -1), cc.v2(0, 0), cc.v2(1, 0)]
    ],
    /** 翻转S */
    shape7: [
        [cc.v2(-1, -1), cc.v2(-1, 0), cc.v2(0, 0), cc.v2(0, 1)],
        [cc.v2(1, -1), cc.v2(-1, 0), cc.v2(0, 0), cc.v2(0, -1)],
        [cc.v2(-1, -1), cc.v2(-1, 0), cc.v2(0, 0), cc.v2(0, 1)],
        [cc.v2(1, -1), cc.v2(-1, 0), cc.v2(0, 0), cc.v2(0, -1)]
    ]
};

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=config.js.map
        