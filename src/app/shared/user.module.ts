import { address } from './address.module';

export class user {
   
   constructor(public id: number, public name: string, public email: string, public address: address){}

}