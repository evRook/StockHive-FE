let chartCache = null

export const chartLoader = async () => {
    if(chartCache){
        return chartCache
    }
    const tickers = ['aapl', 'msft', 'tsla', 'meta', 'amzn' ]
    let chartArr = []

    for(let i=0; i<tickers.length; i++){
        await fetch(`https://stockhive-be.onrender.com/history/${tickers[i]}/1y`)
            .then(res => res.json())
            .then((ticker) => {
                console.log(ticker[0].symbol)
                chartArr.push(ticker)
            })
    }

    chartCache = chartArr

    return chartArr
}