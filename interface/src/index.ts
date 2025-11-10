
import express from "express";
import helloRoutes from "./routes/hello.routes";
import healthRoutes from "./routes/health.routes";

const app = express();

app.use(express.json());

app.use(helloRoutes); //rota teste de hello world
app.use(healthRoutes); //rota verifica array

app.listen(3000, () => console.log("🚀 Server running on port 3000"));