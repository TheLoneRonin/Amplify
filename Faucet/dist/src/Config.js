"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.arweave = exports.UPLOAD = exports.WALLET = exports.PORT = void 0;
var multer = __importStar(require("multer"));
var node_1 = __importDefault(require("arweave/node"));
var fs_1 = require("fs");
exports.PORT = process.env.PORT || 3000;
exports.WALLET = JSON.parse(fs_1.readFileSync(process.env.WALLET || '.arweave.creds.json').toString());
exports.UPLOAD = multer.diskStorage({
    destination: function (_, __, callback) { return callback(null, './upload'); },
    filename: function (_, file, callback) {
        var filename = String(Number(new Date())) + '-' + file.originalname;
        return callback(null, filename);
    }
});
exports.arweave = node_1.default.init({
    host: 'arweave.net',
    port: 443,
    protocol: 'https',
    timeout: 20000,
    logging: false,
});
//# sourceMappingURL=Config.js.map