import { FastifyReply, FastifyRequest } from "fastify";
import {z} from 'zod';
import { makeCreateUserUseCase, makeSearchUserUseCase } from "../../use-cases/factory/make-user";
export async function CreateUserController (request: FastifyRequest, reply: FastifyReply){

  const registerBodySchema = z.object({
    name: z.string(),
    cpf: z.string()
  });
  const { name ,cpf } = registerBodySchema.parse(request.body);

  try{

    const createUserUseCase = makeCreateUserUseCase(); // Aqui, você precisa passar quaisquer dependências necessárias para o construtor do caso de uso, como repositórios, serviços, etc.

    const newUser = await createUserUseCase.execute({ cpf, name})
    
    return reply.status(201).send(newUser)
  }catch(err){
    console.error("Error creating user:", err);

    return reply.status(500).send()
  }
}


export async function SearchUsersController(request: FastifyRequest, reply: FastifyReply){
  
  try{

    const createUserUseCase = makeSearchUserUseCase(); // Aqui, você precisa passar quaisquer dependências necessárias para o construtor do caso de uso, como repositórios, serviços, etc.

    const newUser = await createUserUseCase.execute()
    
    return reply.status(200).send(newUser)

  }catch(err){
    console.error("Error creating user:", err);

    return reply.status(500).send()
  }

}

