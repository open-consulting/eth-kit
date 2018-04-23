require('dotenv').config();

const contractName = process.env["CONTRACT_NAME"] ? process.env["CONTRACT_NAME"] : "Contract";
const solName =  "./" + contractName + ".sol";
console.log(solName)

const Contract = artifacts.require(solName);

module.exports = function(deployer) {
    console.log("Deploying contract: " + contractName);

    // To deploy Contract with args use deployer.deploy(Contract, arg1, arg2)

    deployer.deploy(Contract)
        .then(() => {
            console.log("Deploying contract name: " + contractName + " successfully to server at: " + Contract.address + " .");
        })
    ;

};
