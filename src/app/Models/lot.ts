import { Tank } from "./tank";
import { Produit } from "./produit";

export class Lot{
    idL!: number;
    type!: string
    qteLot!:number;
    qtePriseTank!:number;
    description!: string;
    date!:string;
    tank!:Tank;
    produit!:Produit;
   
  }