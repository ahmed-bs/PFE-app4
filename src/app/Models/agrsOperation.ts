import { Centre } from "./centre";
import { Magasin } from "./magasin";
import { Lot } from "./lot";
import { Tank } from "./tank";
import { Produit } from "./produit";


export class AgrsOperation{

    idOperation!: number;
    poidsLait!: number;
    dateOperation!: string;
    typeOp!: string;
    code!:number;
    qtePrise!:number;
    magasin!:Magasin;
    lot!:Lot;
    centreCollecte!:Centre;
    tank!:Tank;
    produit!:Produit;
    
  }