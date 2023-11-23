import { FastifyReply, FastifyRequest } from "fastify";
import {z} from 'zod';
import { makeCreateUseCase } from "../../use-cases/factory/make-create-use-case";
export async function CreateUserController (request: FastifyRequest, reply: FastifyReply){

  const registerBodySchema = z.object({
    name: z.string(),
    cpf: z.string()
  });
  const { name ,cpf } = registerBodySchema.parse(request.body);

  try{

    const createUserUseCase = makeCreateUseCase(); // Aqui, você precisa passar quaisquer dependências necessárias para o construtor do caso de uso, como repositórios, serviços, etc.

    const newUser = await createUserUseCase.execute({ cpf, name})
    
    return reply.status(201).send(newUser)
  }catch(err){
    console.error("Error creating user:", err);

    return reply.status(500).send()
  }
}

