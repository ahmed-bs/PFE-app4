// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Remplissage {
    //******************************************** */
    //coollector remplissage
    //********************************************* */
    struct Usine {
        uint256 idUsine;
        string nomUsine;
        string adresse;
    }
    struct Operation0 {
        uint256 idOperation;
        uint256 poidsLait;
        string dateOperation;
        string typeOp;
        uint256 code;
        //string sender;
        // uint tank ;
        Agriculteur0 agriculteur;
        Chef chef;
    }
    struct Agriculteur0 {
        uint256 idAgriculteur;
        string nom;
        string prenom;
        string email;
        string adress;
        uint256 tel;
    }
    struct Chef {
        uint256 idChef;
        string nom;
        string prenom;
        string email;
        string adress;
        uint256 tel;
        uint256 cin;
        // uint tank ;
        string username;
        string password;
    }
    struct OperationTank {
        uint256 idOpTank;
        uint256 qteInsereTank;
        string date;
        Operation0 operation;
        Tank tank;
    }
    //******************************************** */
    //coollector retrait
    //********************************************* */
    struct OperationTank0 {
        uint256 idOpTank;
        int256 qteInsereTank;
        string date;
        Operation01 operation;
        Tank tank;
    }
    struct Operation01 {
        uint256 idOperation;
        uint256 poidsLait;
        string dateOperation;
        string typeOp;
        uint256 code;
        //string sender;
        // uint tank ;
        // Agriculteur0 agriculteur;
        uint256[] codeRemplissage;
        Chef chef;
        Usine usine;
        //Tank tank ;
    }
    struct Tank {
        uint256 idTank;
        string matricule;
        uint256 poidVide;
        uint256 poidActuel;
        string etat;
        uint256[] codeTank;
    }
    //******************************************** */
    // agric
    //********************************************* */
    struct Agriculteur {
        uint256 idAgriculteur;
        string nom;
        string prenom;
        string username;
        string password;
    }

    struct Operation {
        uint256 idOperation;
        uint256 poidsLait;
        string dateOperation;
        string typeOp;
        uint256 code;
        //string sender;
        // uint tank ;
        Collecteur collecteur;
        Agriculteur agriculteur;
    }
    struct Collecteur {
        uint256 idCollecteur;
        string nomCollecteur;
        string adresse;
        uint256 tel;
    }
    //******************************************** */
    //Usine remplissage
    //********************************************* */
    struct OperationTank03 {
        uint256 idOpTank;
        uint256 qteInsereTank;
        string date;
        Operation03 operation;
        Tank tank;
    }

    struct Operation03 {
        uint256 idOperation;
        uint256 poidsLait;
        string dateOperation;
        string typeOp;
        uint256 code;
        Centre centreCollecte;
        //Magasin magasin;
    }

    struct Centre {
        uint256 idCentre;
        string nomCentre;
        string adresse;
        string ville;
    }
    //******************************************** */
    //Usine retrait
    //********************************************* */
    struct Magasin {
        uint256 idMag;
        string nomMag;
        string adresse;
        string ville;
    }
    struct Produit {
        uint256 idProduit;
        string intitule;
        string libelle;
        uint256 qte;
    }
    struct Operation02 {
        uint256 idOperation;
        uint256 poidsLait;
        string dateOperation;
        string typeOp;
        uint256 code;
        uint256 qtePrise;
        //Centre centreCollecte;
        Magasin magasin;
        Produit produit;
    }

    //******************************************** */
    //transformation remplissage
    //********************************************* */
struct Operation04{
        uint256 idOperation;
        uint256 poidsLait;
        string dateOperation;
        string typeOp;
        uint256 code;
        uint256 qtePrise;
        Tank tank;
        Produit produit;
  }












    constructor() {}
}
