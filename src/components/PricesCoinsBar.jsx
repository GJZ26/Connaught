import '../assets/stylesheets/PricesCoinsBar.css'
import { CryptoCoin } from './CryptoCoin'
import avalache from '../assets/images/avalanche.svg'
import ethereum from '../assets/images/ethereum.svg'
import tron from '../assets/images/tron.svg'
import okb from '../assets/images/okb.svg'
import eos from '../assets/images/eos.svg'
import bitcoin from '../assets/images/bitcoin.svg'
import tether from '../assets/images/tether.svg'
import litecoin from '../assets/images/litecoin.svg'
import leo from '../assets/images/leo.svg'
import xrp from '../assets/images/xrp.svg'
import bit from '../assets/images/xrp.svg'
import bnb from '../assets/images/xrp.svg'
import estellar from '../assets/images/xrp.svg'


const coins = [
    {
        name: "Ethereum",
        key: "ETH",
        img: ethereum
    },
    {
        name: "Tron",
        key: "TRX",
        img: tron
    },
    {
        name: "Avalanche",
        key: "AVAX",
        img: avalache
    },
    {
        name: "OKB",
        key: "OKB",
        img: okb
    },
    {
        name: "EOS",
        key: "EOS",
        img: eos
    },
    {
        name: "Bitcoin",
        key: "BTC",
        img: bitcoin
    },
    {
        name: "Tether",
        key: "USDT",
        img: tether
    },
    {
        name: "XRP",
        key: "XRP",
        img: xrp
    },
    {
        name: "Litecoin",
        key: "LTC",
        img: litecoin
    },
    {
        name: "LEO Token",
        key: "LEO",
        img: leo
    },
    {
        name: "Bit Torrent",
        key: "BTT",
        img: bit
    },
    {
        name: "BNB",
        key: "BNB",
        img: bnb
    }, {
        name: "Estellar",
        key: "XLM",
        img: estellar
    },
]

export default function PricesCoinsBar() {
    return (
        <>
            <div className='price-coins-bar'>
                {
                    coins.map((coin, index) => {
                        return (
                            <CryptoCoin
                                img={coin.img}
                                name={coin.name}
                                keyName={coin.key}
                                key={index}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}