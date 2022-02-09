require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner argue tackle skull guard render remember social hunt hero fortune spray'; 
let testAccounts = [
"0xc691678d44d1ebb63fc56a9dd678a02971c50cc8f06ff272f745c88b3c38f4fa",
"0x8678b40ef779f5d4fd60ca929c491ddfa77fd848c59472d85f86569e30d21762",
"0x72811327183e21c78eb9f8b433ecbc59859cfeb8279dc52db41a0fcc1d03b603",
"0x69b742003ae18816cd3cb6b0abd39a73a04793e4b8cf058b34bc9d85cbb5481a",
"0x5468a98f1b019def1a38580c172917d67ee718b62529edba43288c457f2919f0",
"0x7f558f130231351001b52339661053eedd26f022d93346f32822b90961bc7374",
"0x5aea1e89ae3151cbd2ae6980c13f0bcc5e5ef8340dd60dc9b59ee6b9af9b1fa4",
"0x411268f3d04e2a1160bf9c16bab0155e75db1b7af2c68aff7eec0f2ca00dccf8",
"0x7e053de220e4e6719a47a045c941e64efc11c1a87491f9ee186e5a5fe769c77e",
"0x07b454164b4113dc86e4f8906155c243b37464e9b8f8f5b863f4ee1367ef5f91"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


