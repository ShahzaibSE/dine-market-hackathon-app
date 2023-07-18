console.log("process.env.NODE_ENV",process.env.NODE_ENV);


export const BASE_PATH = process.env.NODE_ENV === 'production'? "https://dine-market-hackathon-app.vercel.app/" : "http://localhost:3000/";
// https://vercel.com/shahzaibse/dine-market-hackathon-app/9AEthuMKFDSNirfD7gDYVBfuwnYe