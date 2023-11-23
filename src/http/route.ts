import { FastifyInstance } from "fastify";
import { CreateUserController, SearchUsersController } from "./controllers/UserController";
import { TransactionController } from "./controllers/TransactionController";

export async function appRoutes(app: FastifyInstance){
  app.post("/users", CreateUserController)
  app.get("/users", SearchUsersController)

  app.post("/transactions", TransactionController)
  // app.get("/transactions" )

}