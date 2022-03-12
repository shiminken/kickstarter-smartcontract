const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const compiledCampaign = require("./build/CampaignFactory.json");

const provider = new HDWalletProvider(
  "patient loyal consider rely muffin carbon welcome copper bitter foam exchange senior",
  "https://rinkeby.infura.io/v3/bbddc84a65604252a411a80a405a16a6"
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledCampaign.interface)
  )
    .deploy({ data: compiledCampaign.bytecode })
    .send({ gas: "1000000", from: accounts[0] });

  console.log("Contract deployed to", result.options.address);
  provider.engine.stop();
};
deploy();
