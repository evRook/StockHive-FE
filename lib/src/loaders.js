export const companyLoader = async () => {
    const res = await fetch(`http://localhost:8000/company/?format=json`);
  
    return res.json();
  };