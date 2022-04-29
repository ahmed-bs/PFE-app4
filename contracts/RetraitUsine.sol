// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "./Remplissage.sol";

contract RetraitUsine is Remplissage {
    //*********************************************************************************/
    //second app
    //******************************************************************************/

    Operation02[] public operationTankR;

    function RetraitOperationTank(Operation02 memory operationTank)
        public
        returns (Operation02[] memory tt0)
    {
        operationTankR.push(operationTank);

        return (operationTankR);
    }

    //get all operations

    function getOperationTanks()
        public
        view
        returns (Operation02[] memory result)
    {
        return operationTankR;
    }
}
