"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
//parsers
app.use(express_1.default.json());
// router
const userRouter = express_1.default.Router();
const courseRouter = express_1.default.Router();
app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter);
userRouter.get("/create-user", (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        messsage: "user is created succesfully",
        data: user,
    });
});
courseRouter.post("/create-course", (req, res) => {
    const course = req.body;
    console.log(course);
    res.json({
        success: true,
        messsage: " pust is created succesfully",
        data: course,
    });
});
// middleWare
const logger = (req, res, next) => {
    console.log(req.url, req.method);
    next();
};
app.get("/", logger, (req, res, next) => {
    // console.log(req.params);
    // console.log(req.query);
    res.send("amar sonar bangla");
    try {
        res.send(vulval);
    }
    catch (error) {
        // console.log(err);
        // res.status(400).json({
        //   success: false,
        //   message: "failed to get data",
        // });
        next(error);
    }
});
app.post("/", logger, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    res.json({
        message: "got data successfuly",
    });
}));
app.all("*", (req, res) => {
    res.status(400).json({
        success: false,
        message: "Route is not found",
    });
});
// global error handler
app.use((error, req, res, next) => {
    if (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: "failed to get data",
        });
    }
});
exports.default = app;
