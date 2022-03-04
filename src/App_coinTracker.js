import {useState, useEffect} from 'react';

function App(){
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [inverter, setInverter] = useState();
    const [select, setSelect] = useState("BTC");

    useEffect(()=>{
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response)=> response.json())
            .then((json)=>{
                setCoins(json.slice(0,200));
                setLoading(false);
            });

    }, []);

    const onInputChange = (event) => {
        const value = event.target.value;
        let coinPrice;
        coins.map((coin) => {
            if(coin.symbol === select)
                coinPrice = coin.quotes.USD.price;
        });
        
        setInverter(value / coinPrice);
        
    }
    const onSelectChange = (event) => {
        setSelect(event.target.options[event.target.selectedIndex].id);
    }

    return (
        <div>
            <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
            <div>
                <input onChange={onInputChange} type="number" placeholder='write Dallar'/>
            </div>
            
            {loading ? <strong>Loading...</strong> : (
            <select id="coinSelect" onChange={onSelectChange}>
                {coins.map((coins, index) => 
                    (
                        <option key={index} id={coins.symbol}>{coins.name} ({coins.symbol}): {coins.quotes.USD.price} USD</option>
                    )
                )}
            </select>
            )}
            {loading ? null : (
                <div>
                    You can buy {inverter} {select}
                </div>
            )}
        </div>
    )
}

export default App;