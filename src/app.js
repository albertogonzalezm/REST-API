import express from "express";
import morgan from "morgan";
import tasksRoutes from "./routes/tasks.routes";
import cors from "cors";
const app = express();

//settings
app.set("port", process.env.PORT || 3000);

//middlewares
const corsOptions = {}
app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.get("/", (req, res) => {
    res.json({ message: "Welcome to my application" });
});

app.use("/api/tasks", tasksRoutes);

export default app;