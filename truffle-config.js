require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip notice crime remind million inflict close bubble vast'; 
let testAccounts = [
"0x73a0338380acfaa6642123beb957139dcb6badaf77952023a918e53983e289ae",
"0x42d4817a2ef6402e7067fef65c9d9aa099cf78694c3a218921186ff2e34049bb",
"0x5c7e94bef7ceac8212e299a0208a2cbeb329d1eb63ea199f0b4e1b160a52fcd5",
"0x741e4ab1ce504743b9fd8c71f50a0795e2975d0322a76dbc16014c8faf262f44",
"0x86078b9217d61fd7bbb3e9a5c080e8bf6c860d50f66e96d76031e3aa45ea046a",
"0x362d525b27e8d07548562db5f4531927f80794d461657caa55cff8598f9d7d00",
"0xb352969461df5e1c22a8b5ab5d6f20dc2d6ae3ba8110c819223718f93b6711d4",
"0xec18ea929e52cd81fada77d45bfefc46e1426d7521c59d72aa02c8db4041af23",
"0x61d9fef62d43a30cf0a8daa278beeb9d8ccb8c93b6d5d6d8048d6d12bda7a358",
"0x80f84451b65f1c1f6515d6778ac546845a6eeb9482803c431af979275f082187"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
