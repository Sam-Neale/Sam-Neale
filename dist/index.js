"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const limiter = (0, express_rate_limit_1.default)({
    windowMs: 1 * 60 * 1000, // 1 minutes
    max: 100, // limit each IP to 100 requests per windowMs
});
app.use('/public', express_1.default.static(path_1.default.join(__dirname, '/../public')));
app.use(limiter);
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(__dirname, '/../views'));
// Add your app.get routes for individual pages here
app.get("/", (req, res) => {
    res.render('index', {
        planeNum: randomNum()
    });
});
app.get("*", (req, res) => {
    res.render('404');
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
//Random number between 1 and 9 inclusive
function randomNum() {
    return Math.floor(Math.random() * 9) + 1;
}
//# sourceMappingURL=index.js.map