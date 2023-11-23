import { User } from "../entities/User";
import { UserRepository } from "../repositories/UserRepository";

interface SearchUsersResponse{
  users: User[]
}
export class SearchUsers{
  constructor(private userRepository: UserRepository){}

    async execute(): Promise<SearchUsersResponse>{
      
      const users = await this.userRepository.findAll();

      return {users}
    }

}