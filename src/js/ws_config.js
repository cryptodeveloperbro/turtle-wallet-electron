var config = {};

// self explanatory, your application name, descriptions, etc
config.appName = 'WalletShell';
config.appDescription = 'BitcoinHekaton Wallet';
config.appSlogan = 'The new Bitcoin!';
config.appId = 'com.bitcoinhekaton.www';
config.appGitRepo = 'https://bitcoinhekaton.com';

// default port number for your daemon (e.g. hekatond)
config.daemonDefaultRpcPort = 19812;

// wallet file created by this app will have this extension
config.walletFileDefaultExt = 'btch';

// change this to match your wallet service executable filename
config.walletServiceBinaryFilename = 'hekaton-service';

// version on the bundled service (turtle-service)
config.walletServiceBinaryVersion = "v0.10.0";

// config file format supported by wallet service, possible values:
// ini -->  for turtle service (or its forks) version <= v0.8.3
// json --> for turtle service (or its forks) version >= v0.8.4
config.walletServiceConfigFormat = "json";

// default port number for your wallet service (e.g. hekaton-service)
config.walletServiceRpcPort = 19814;

// block explorer url, the [[TX_HASH]] will be substituted w/ actual transaction hash
config.blockExplorerUrl = 'null';

// default remote node to connect to, set this to a known reliable node for 'just works' user experience
config.remoteNodeDefaultHost = '54.183.84.20';

// remote node list update url, set to null if you don't have one
config.remoteNodeListUpdateUrl = 'null';

// fallback remote node list, in case fetching update failed, fill this with known to works remote nodes
config.remoteNodeListFallback = [
    '54.183.84.20:19812',
    '13.112.231.16:19812',
];

// your currency name
config.assetName = 'BitcoinHekaton';
// your currency ticker
config.assetTicker =  'BTCH';
// your currency address prefix, for address validation
config.addressPrefix =  'BTCH';
// standard wallet address length, for address validation
config.addressLength = 99;
// intergrated wallet address length, for address validation
config.integratedAddressLength = 187;

// minimum fee for sending transaction
config.minimumFee = 0.1;
// minimum amount for sending transaction
config.mininumSend = 0.1;
// default mixin/anonimity for transaction
config.defaultMixin = 3;
// to convert from atomic unit
config.decimalDivisor = 100;
// to represent human readable value
config.decimalPlaces = 2;

// obfuscate address book entries, set to false if you want to save it in plain json file.
// not for security because the encryption key is attached here
config.addressBookObfuscateEntries = true;
// key use to obfuscate address book contents
config.addressBookObfuscationKey = '79009fb00ca1b7130832a42de45142cf6c4b7f333fe6fba5';
// initial/sample entries to fill new address book
config.addressBookSampleEntries = [
    { name: 'kiyoto',
      address: 'btchv1A26ngXApin33p1JsSE9Yf6REj97Xruz15D4JtSg1wuqYTmsPj5Geu2kHtBzD8TCsfd5dbdYRsrhNXMGyvtJ61AoYqLXVS',
      paymentId: '', 
    },
    { name: 'Tomioka',
      address: 'btchv3R17LWbVw8Qv4si2tieyKsytUfKQXUgsmjksgrgJsTsnhzxNAeLKPjsyDGF7HGfjqkDegu2LPaC5NeVYot1SnpfcYmjwie',
      paymentId: '', 
    },
    { name: 'Sakamoto',
      address: 'btchuxEnfjdF46cBoHhyDtPN32weD9fvL43KX5cx2Ck9iSP4BLNPrJY3xtuFpXtLxiA6LDYojhF7n4SwPNyj9M64iTwJ738vnJk',
      paymentId: '', 
    }
];

module.exports = config;
