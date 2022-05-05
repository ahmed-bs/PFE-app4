// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "./Remplissage.sol";

contract RemplissageUsine is Remplissage {
    //*********************************************************************************/
    //second app
    //******************************************************************************/

    OperationTank03[] public operationTank2;

    function addOperationTankUsine(
        OperationTank03[] memory operationTank,
        uint256 count
    ) public returns (OperationTank03[] memory tt0) {
        for (uint256 i = 0; i < count; i++) {
            operationTank2.push(operationTank[i]);
        }
        return (operationTank2);
    }

    //get all operations

    function getOperationTanksUsine()
        public
        view
        returns (OperationTank03[] memory result)
    {
        return operationTank2;
    }


    function getOperationusinebycode(uint256 code)
        public
        view
        returns (OperationTank03 memory operation)
    {
        for (uint256 i = 0; i < operationTank2.length; i++) {
            if (operationTank2[i].operation.code == code) {
                return operationTank2[i];
            }
        }
    }





}
