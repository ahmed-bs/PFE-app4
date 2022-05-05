import { Centre } from "./centre";
import { Magasin } from "./magasin";
import { Lot } from "./lot";
import { Tank } from "./tank";
import { Produit } from "./produit";
import { Agriculteur } from "./agriculteur";
import { Collecteur } from "./collecteur";

export class AgrsOperation{

    idOperation: number;
    poidsLait: number;
    dateOperation: string;
    typeOp: string;
    code:number;
    qtePrise:number;
    magasin:Magasin;
    lot:Lot;
    centreCollecte:Centre;
    tank:Tank;
    produit:Produit;
    agriculteur!:Agriculteur;
    collecteur!:Collecteur;









    
    constructor( idOperation : number,
      poidsLait: number,
      dateOperation: string,
      typeOp: string,
      code:number,
      qtePrise:number,
      magasin:Magasin,
      lot:Lot,
      centreCollecte:Centre,
      tank:Tank,
      produit:Produit){
this.idOperation=idOperation;
this.poidsLait=poidsLait;
this.dateOperation=dateOperation;
this.typeOp=typeOp;
this.code=code;
this.qtePrise=qtePrise;
this.magasin=magasin;
this.lot=lot;
this.centreCollecte=centreCollecte;
this.tank=tank;
this.produit=produit;
    }
  }