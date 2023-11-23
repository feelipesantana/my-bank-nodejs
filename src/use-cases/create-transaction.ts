// import { Transaction } from "../entities/Transaction";

// interface CreateTransactionRequest{
//   id:string;
//   from: number;
//   to: number;
//   value: number;
//   timestamp: Date;
// }

// type CreateTransactionResponse = Transaction;

// export class CreateTransaction{
//   async execute({id,from,to,value,timestamp}: CreateTransactionRequest): Promise<CreateTransactionResponse>{ 
//     const transaction = new Transaction({
//       id,
//       from,
//       to,
//       value,
//       timestamp
//     });

//     return transaction
//   }
// } 