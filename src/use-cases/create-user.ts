import { User } from "../entities/User";
import { UserRepository } from "../repositories/UserRepository";

interface CreateUserRequest{
  name:string;
  cpf:string;
}


type CreateUserResponse = User ;

 
export class CreateUser{
  constructor(private userRepository: UserRepository) {}
  async execute({cpf, name}: CreateUserRequest): Promise<CreateUserResponse>{
    
    const existingUser = await this.userRepository.findByCPF(cpf);
    if (existingUser) {
      throw new Error("User with this CPF already exists");
      // ou retorne null ou qualquer outra lógica de tratamento aqui
    }

    // Criar um novo usuário
    const newUser = User.create({ name, cpf });
    const createdUser = await this.userRepository.create(newUser);
    return createdUser;
  }
}