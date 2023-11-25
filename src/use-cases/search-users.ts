import { tb_users } from "@prisma/client";
import { UserRepository } from "../repositories/UserRepository";

interface SearchUsersResponse{
  users: tb_users[]
}
export class SearchUsers{
  constructor(private userRepository: UserRepository){}

    async execute(): Promise<SearchUsersResponse>{
      
      const users = await this.userRepository.findAll();

      return {users}
    }

}