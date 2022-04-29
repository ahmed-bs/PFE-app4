import { Agriculteur } from "./agriculteur";
import { Chef } from "./chef";
import { Collecteur } from "./collecteur";
import { OperationTank } from "./operationTank";
import { Tank } from "./tank";
import { Usine } from "./usine";

export class Operation{

  idOperation!: number;
  poidsLait!: number;
  dateOperation!: string;
  typeOp!: string;
  code!:number;
  agriculteur!:Agriculteur;
  chef!:Chef;
  usine!:Usine;
  tank!:Tank;
 // collecteur!:Collecteur;
}