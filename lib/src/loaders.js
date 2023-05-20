// export const companyLoader = async () => {
//     const res = await fetch(`http://localhost:8000/company/?format=json`);
  
//     return res.json();
//   };

// export const companyLoader = async () => {
//     const res = await fetch(`http://localhost:8000/company/AAPL?format=json`);

//     return res.json();
// };

export const tickerLoader = async () => {
    const tickers = ['aapl', 'msft', 'tsla', 'f', 'meta', 'jnj', 'wmt', 'jpm',  'intc', 'googl', 'aapl', 'pypl', 'amzn', 'amd', 'nvda', 'gme', 'ko' ]
    let tickerArr = []

    for(let i=0; i<tickers.length; i++){
        await fetch(`http://localhost:8000/company/${tickers[i]}?format=json`)
            .then(res => res.json())
            .then((ticker) => {
                console.log(ticker[0].symbol)
                tickerArr.push(ticker)
            })
    }

    return tickerArr
}

export const chartLoader = async () => {
    const tickers = ['aapl', 'msft', 'tsla', 'meta', 'amzn' ]
    let chartArr = []

    for(let i=0; i<tickers.length; i++){
        await fetch(`http://localhost:8000/history/${tickers[i]}/1y`)
            .then(res => res.json())
            .then((ticker) => {
                console.log(ticker[0].symbol)
                chartArr.push(ticker)
            })
    }

    return chartArr
}