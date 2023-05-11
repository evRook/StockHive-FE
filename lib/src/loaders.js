// export const companyLoader = async () => {
//     const res = await fetch(`http://localhost:8000/company/?format=json`);
  
//     return res.json();
//   };

export const companyLoader = async () => {
    const res = await fetch(`http://localhost:8000/company/AAPL?format=json`);
    console.log(res)
    return res.json();
};