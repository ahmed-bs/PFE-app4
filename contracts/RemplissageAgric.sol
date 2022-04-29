// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "./Remplissage.sol";

contract RemplissageAgric is Remplissage {
    Operation[] public operations2;

    string[] public ALLS;
    uint256 public nextID = 1;

    //create 2
    function addOperation2(Operation memory op)
        public
        returns (Operation memory op0)
    {
        Agriculteur memory newAgriculteur = Agriculteur(
            op.agriculteur.idAgriculteur,
            op.agriculteur.nom,
            op.agriculteur.prenom,
            op.agriculteur.username,
            op.agriculteur.password
        );

        Collecteur memory newCollecteur = Collecteur(
            op.collecteur.idCollecteur,
            op.collecteur.nomCollecteur,
            op.collecteur.adresse,
            op.collecteur.tel
        );

        Operation memory newOperation = Operation(
            op.idOperation,
            op.poidsLait,
            op.dateOperation,
            op.typeOp,
            op.code,
            newCollecteur,
            newAgriculteur
        );
        operations2.push(newOperation);
        return (newOperation);
    }

    //get all operations

    function getOperations() public view returns (Operation[] memory result) {
        return operations2;
    }

    //get one operation

    function getOperation(uint256 id)
        public
        view
        returns (Operation memory operation)
    {
        for (uint256 i = 0; i < nextID; i++) {
            if (operations2[i].idOperation == id) {
                return operations2[i];
            }
        }
    }

    function getOperationbycode(uint256 code, uint256 nin)
        public
        view
        returns (Operation memory operation)
    {
        for (uint256 i = 0; i < nin; i++) {
            if (operations2[i].code == code) {
                return operations2[i];
            }
        }
    }
}
