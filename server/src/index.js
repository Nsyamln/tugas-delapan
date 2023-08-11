import express from "express";
import cors from "cors";
import raRouter from "./routes/regionals.js";


export const app = express();

app.use(cors({origin:"http://localhost:5173"}));

const router =express.Router();

router.use("/regional_art",raRouter);
app.use("/api",router);
app.listen(3000,()=>console.log("Server berhasil dijalankan di port 3000"));