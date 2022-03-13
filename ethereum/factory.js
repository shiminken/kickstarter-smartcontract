import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x78335C6a7862df3576D5B01B106014f29fA726D3"
);

export default instance;
