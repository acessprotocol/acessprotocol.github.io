
async function connect(){
if(window.ethereum){
await ethereum.request({ method: 'eth_requestAccounts' });
alert("Wallet Connected");
}else{
alert("Install MetaMask");
}
}
