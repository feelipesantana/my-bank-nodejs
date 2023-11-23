import { FastifyInstance } from "fastify";
import { CreateUserController } from "./controllers/UserController";

export async function appRoutes(app: FastifyInstance){
  app.post("/users", CreateUserController)
}