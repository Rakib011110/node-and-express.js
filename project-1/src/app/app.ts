import { error } from "console";
import express, { NextFunction, Request, Response } from "express";
const app = express();
const port = 3000;

//parsers
app.use(express.json());
// router
const userRouter = express.Router();
const courseRouter = express.Router();
app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter);

userRouter.get("/create-user", (req: Request, res: Response) => {
  const user = req.body;
  console.log(user);
  res.json({
    success: true,
    messsage: "user is created succesfully",
    data: user,
  });
});

courseRouter.post("/create-course", (req: Request, res: Response) => {
  const course = req.body;
  console.log(course);
  res.json({
    success: true,
    messsage: " pust is created succesfully",
    data: course,
  });
});

// middleWare
const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url, req.method);
  next();
};

app.get("/", logger, (req: Request, res: Response, next: NextFunction) => {
  // console.log(req.params);
  // console.log(req.query);
  res.send("amar sonar bangla");
  try {
    res.send(vulval);
  } catch (error) {
    // console.log(err);
    // res.status(400).json({
    //   success: false,
    //   message: "failed to get data",
    // });
    next(error);
  }
});

app.post("/", logger, async (req: Request, res: Response) => {
  console.log(req.body);
  res.json({
    message: "got data successfuly",
  });
});

app.all("*", (req: Request, res: Response) => {
  res.status(400).json({
    success: false,
    message: "Route is not found",
  });
});
// global error handler
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  if (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: "failed to get data",
    });
  }
});

export default app;
