import {  FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeCreateTransactionUseCase } from "../../use-cases/factory/make-transaction";

export async function TransactionController(request: FastifyRequest, reply:FastifyReply){

  const registerTransactionBodySchema = z.object({
    fromId: z.string(),
    toId: z.string(),
    value: z.number()
  });

  const {fromId, toId, value} = registerTransactionBodySchema.parse(request.body);

  try{

    const makeTransaction =  makeCreateTransactionUseCase();

    const newTransaction =  await makeTransaction.execute({fromId, toId, value});
  
    return reply.status(201).send(newTransaction) 
  
  }
  catch(err){
    return reply.status(500).send();
  }
}