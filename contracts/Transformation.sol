// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "./Remplissage.sol";

contract Transformation is Remplissage {
    Operation04[] public operationTankR;

    function RetraitOperationTank(Operation04 memory operationTank)
        public
        returns (Operation04[] memory tt0)
    {
        operationTankR.push(operationTank);

        return (operationTankR);
    }

    //get all operations

    function getOperationTanks()
        public
        view
        returns (Operation04[] memory result)
    {
        return operationTankR;
    }

    function getOperationusinebycode(uint256 code)
        public
        view
        returns (Operation04 memory operation)
    {
        for (uint256 i = 0; i < operationTankR.length; i++) {
            if (operationTankR[i].code == code) {
                return operationTankR[i];
            }
        }
    }
}
