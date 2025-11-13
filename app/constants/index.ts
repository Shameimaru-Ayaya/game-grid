import { CanvasConfig, DBConfig } from "../types";

/**
 * 检查是否在浏览器环境中
 */
export const isBrowser = typeof window !== 'undefined';

/**
 * Canvas配置
 * 使用2倍分辨率以提高导出图片的清晰度
 */
export const CANVAS_CONFIG: CanvasConfig = {
  width: 2400,  
  height: 2600, 
  padding: 80,  
  titleHeight: 100, 
  gridRows: 4,
  gridCols: 6,
  cellPadding: 20, 
  cellBorderWidth: 4, 
  cellBorderRadius: 16, 
  cellAspectRatio: 0.75, // 宽高比为3:4
  coverRatio: 0.75, // 封面宽高比为3:4
  titleFontSize: 96, 
  cellTitleFontSize: 44, 
  cellNameFontSize: 28, 
  cellTitleMargin: 12, 
  cellNameMargin: 12, 
};

/**
 * IndexedDB 配置
 */
export const DB_CONFIG: DBConfig = {
  name: "gamePreferenceDB",
  storeName: "gameData",
  version: 1
};

/**
 * 预定义的格子标题
 */
export const CELL_TITLES = [
  "第一部",
  "最喜欢",
  "最一眼缘",
  "最想吐槽",
  "最长陪伴",
  "最快乐的",
  
  "最佳剧情",
  "最佳画面",
  "最佳音乐",
  "最佳配音",
  "最佳塑造",
  "最佳结局",
  
  "最想安利",
  "最爱泡面",
  "最好评",
  "最差评", 
  "最被低估",
  "最被高估", 
  
  "最期续作",
  "最意犹未尽",
  "我咋会喜欢这个",
  "总有一天能补完",
  "爷青回",
  "它好小众我好爱",
];

// 添加 Canvas.roundRect polyfill，以兼容旧版浏览器
interface BorderRadius {
  tl: number;
  tr: number;
  br: number;
  bl: number;
}

if (isBrowser && !CanvasRenderingContext2D.prototype.roundRect) {
  CanvasRenderingContext2D.prototype.roundRect = function (x: number, y: number, width: number, height: number, radius: number | BorderRadius | any) {
    let r: BorderRadius;
    if (typeof radius === 'number') {
      r = { tl: radius, tr: radius, br: radius, bl: radius };
    } else {
      r = { tl: 0, tr: 0, br: 0, bl: 0, ...radius };
    }
    this.beginPath();
    this.moveTo(x + r.tl, y);
    this.lineTo(x + width - r.tr, y);
    this.quadraticCurveTo(x + width, y, x + width, y + r.tr);
    this.lineTo(x + width, y + height - r.br);
    this.quadraticCurveTo(x + width, y + height, x + width - r.br, y + height);
    this.lineTo(x + r.bl, y + height);
    this.quadraticCurveTo(x, y + height, x, y + height - r.bl);
    this.lineTo(x, y + r.tl);
    this.quadraticCurveTo(x, y, x + r.tl, y);
    this.closePath();
    return this;
  };
}
