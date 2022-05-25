// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "./Remplissage.sol";

contract RetraitCol is Remplissage {
    //*********************************************************************************/
    //second app
    //******************************************************************************/
    Operation[] public operationagrs;
    OperationTank0[] public operationTankR;

    function RetraitOperationTank(
        OperationTank0[] memory operationTank,
        uint256 count
    ) public returns (OperationTank0[] memory tt0) {
        for (uint256 i = 0; i < count; i++) {
            operationTankR.push(operationTank[i]);
        }
        return (operationTankR);
    }

    //get all operations

    function getOperationTanks()
        public
        view
        returns (OperationTank0[] memory result)
    {
        return operationTankR;
    }

    function getOperationbycode(uint256 code, Operation[] memory operation2)
        public
        returns (Operation[] memory operationtwo)
    {
        for (uint256 i = 0; i < operationTankR.length; i++) {
            if (operationTankR[i].operation.code == code) {
                for (uint256 j = 0;j < operationTankR[i].tank.codeTank.length;j++)
                   {
                    for (uint256 f = 0; f < operation2.length; f++) {
                        if (
                            operation2[f].code ==
                            operationTankR[i].tank.codeTank[j]
                        ) {
                            operationagrs.push(operation2[f]);
                        }
                    }
                }
            }
        }
        return operationagrs;
    }

    function getOperationFromAgrsbycode(uint256 code)
        public
        view
        returns (OperationTank0 memory operation)
    {
        for (uint256 i = 0; i < operationTankR.length; i++) {
            if (operationTankR[i].operation.code == code) {
                return operationTankR[i];
            }
        }
    }
}
