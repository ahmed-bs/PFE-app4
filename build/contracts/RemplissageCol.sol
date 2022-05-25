// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "./Remplissage.sol";

contract RemplissageCol is Remplissage {
    //*********************************************************************************/
    //second app
    //******************************************************************************/

    OperationTank[] public operationTank2;
    OperationTank ss;

    function addOperationTank(
        OperationTank[] memory operationTank,
        uint256 count
    ) public returns (OperationTank[] memory tt0) {
        for (uint256 i = 0; i < count; i++) {
            ss = operationTank[i];
            operationTank2.push(ss);
        }
        return (operationTank2);
    }

    //get all operations

    function getOperationTanks()
        public
        view
        returns (OperationTank[] memory result)
    {
        return operationTank2;
    }

    function getOperationbycode(uint256 code)
        public
        view
        returns (OperationTank memory operation)
    {
        for (uint256 i = 0; i < operationTank2.length; i++) {
            if (operationTank2[i].operation.code == code) {
                return operationTank2[i];
            }
        }
    }
}
