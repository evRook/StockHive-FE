// export const companyLoader = async () => {
//     const res = await fetch(`http://localhost:8000/company/?format=json`);
  
//     return res.json();
//   };

export const companyLoader = async () => {
    const res = await fetch(`http://localhost:8000/company/AAPL?format=json`);

    return res.json();
};

export const tickerLoader = async () => {
    const tickers = ['aapl', 'msft', 'tsla', 'f', 'intc', 'googl', 'pypl', 'amzn', 'amd', 'gme']
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