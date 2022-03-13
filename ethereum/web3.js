import Web3 from "web3";

// window.ethereum.request({method: ""})

let web3;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  console.log("ok", window.web3);
  window.ethereum.request({ method: "eth_requestAccounts" });
  web3 = new Web3(window.ethereum);
} else {
  const provider = new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/v3/bbddc84a65604252a411a80a405a16a6"
  );
  web3 = new Web3(provider);
}
export default web3;
