import { Agriculteur } from './agriculteur';
import { Chef } from './chef';
import { Collecteur } from './collecteur';
import { Tank } from './tank';
import { Usine } from './usine';
import { Produit } from './produit';
import { Centre } from './centre';
import { Lot } from './lot';
export class Operation {
  idOperation!: number;
  poidsLait!: number;
  dateOperation!: string;
  typeOp!: string;
  code!: number;
  agriculteur!: Agriculteur;
  chef!: Chef;
  usine!: Usine;
  tank!: Tank;
  produit!: Produit;
  collecteur!: Collecteur;
  codeRemplissage!: [];
  centreCollecte!: Centre;
  lot!: Lot;
}
