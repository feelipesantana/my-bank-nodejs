import crypto from  'node:crypto'


interface TransactionProps{
  id: string;
  from: string;
  to:string;
  value: number;
  timestamp: Date;
}

export class Transaction{
  private props: TransactionProps;

  set id(id:string){
    this.props.id = id ?? crypto.randomUUID;
  }
  get id(){
    return this.props.id;
  }
  set from(from: string){
    this.props.from = from; 
  }
  get from(){
    return this.props.from;
  }
  set to(to: string){
    this.props.to = to;
  }
  get to(){
    return this.props.to;
  }

  set value(value: number){
    this.props.value = value;
  }
  get value(){
    return this.props.value;
  }
  set timestamp(timestamp: Date){
    this.props.timestamp = timestamp;
  }
  get timestamp(){
    return this.props.timestamp;
  }
  constructor(props: TransactionProps){
    this.props = props;
  }
}