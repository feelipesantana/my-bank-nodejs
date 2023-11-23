import { Entity } from '../core/domain/Entity';


interface UserProps{
  name: string;
  cpf:string;
}

export class User extends Entity<UserProps>{

  
  private constructor(props: UserProps, id?:string){
    super(props,id);
  }

  static create(props: UserProps, id?:string){
    const user = new User(props, id);
    return user
  }
}