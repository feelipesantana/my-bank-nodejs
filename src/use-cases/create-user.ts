import { tb_users } from "@prisma/client";
import { UserRepository } from "../repositories/UserRepository";

interface CreateUserRequest{
  name:string;
  cpf:string;
  value: number
}


type CreateUserResponse = tb_users ;

 
export class CreateUser{
  constructor(private userRepository: UserRepository) {}
  
  async execute({cpf, name, value}: CreateUserRequest): Promise<CreateUserResponse>{
    
    const existingUser = await this.userRepository.findByCPF(cpf);
    if (existingUser) {
      throw new Error("User with this CPF already exists");
      // ou retorne null ou qualquer outra lógica de tratamento aqui
    }
    // Criar um novo usuário
    const createdUser = await this.userRepository.create({
      name,
      cpf
    }, value);

    console.log("PASSOU", createdUser);
    return createdUser;
  }
}