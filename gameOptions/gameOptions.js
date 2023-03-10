"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameOptions = void 0;
const gameOptions = (gameUrl) => ({
    url: gameUrl,
    disable_notification: true,
    supports_inline_queries: false,
    // Add any additional game options here, such as width and height
});
exports.gameOptions = gameOptions;
