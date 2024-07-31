import { createWeb3Modal, defaultConfig } from "@web3modal/ethers";
import { BrowserProvider, Contract } from "ethers";

const projectId = '';

//https://bsc-testnet-rpc.publicnode.com/
//http://127.0.0.1:8545/
const mainnet = {
    chainId: 97,
    name: "BNB testnet",
    currency: "tBNB",
    explorerUrl: "https://testnet.bscscan.com",
    rpcUrl: "https://bsc-testnet-rpc.publicnode.com/"
}

const metadata = {
    name: 'My Website',
    description: "Walletconnect v2",
    url: "http://127.0.0.1:5500/",
    icons: [""]
}

const ethersConfig = defaultConfig({
    metadata,
    enableEIP6963: true,
    enableInjected: true,
    enableCoinbase: true,
    rpcUrl: mainnet.rpcUrl,
    defaultChainId: mainnet.chainId
})

const modal = createWeb3Modal({
    ethersConfig,
    chains: [mainnet],
    projectId
})

const contractAddress = "0x66B01A93dE9639E1eec30607DFdA6A56AD30F118";
const userAD = "0x951eCCAF740E1d1E748fFE9F2f64F5707566e378";

const openConnectModalBtn = document.getElementById('open-connect-modal')
const openNetworkModalBtn = document.getElementById('open-network-modal')

openConnectModalBtn.addEventListener('click', () => modal.open())
openNetworkModalBtn.addEventListener('click', () => modal.open({ view: "Networks" }))
approve.addEventListener('click', async () => Approve());


modal.on('connect', async () => {
    const provider = modal.getProvider();

    console.log("Успешное подключение к кошельку");
});

modal.on('disconnect', () => {
    console.log("Соединение с кошельком разорвано");
});

modal.on('change', () => {
    console.log("Сеть изменена");
});

async function Approve() {
    const walletProvider = modal.getWalletProvider()
    const Abi = [
        "function approve(address spender, uint256 amount) external returns (bool)"
    ]
    const amountInp = document.getElementById('amount');
    const amount = amountInp.value;
    try {
        const ethersProvider = new BrowserProvider(walletProvider)
        const signer = await ethersProvider.getSigner()

        const contract = new Contract(contractAddress, Abi, signer); 

        console.log("Contract:", contract);
        console.log("User Address (spender):", userAD);

        const tx = await contract.approve(userAD, amount);

        console.log("Approval transaction sent:", tx.hash);

        await tx.wait();

        console.log("Approval transaction successful:", tx.hash);
    } catch (error) {
        console.error("Error during approval:", error);
    }
}
