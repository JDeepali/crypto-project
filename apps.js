const form = document.querySelector('#searchForm');
const res= document.querySelector('#TableResult');

form.addEventListener('submit',(d)=>{

    d.preventDefault();

    const ctype = form.elements.coinType.value;

    fetchprice(ctype);


});

const fetchprice= async (ctype)=>{
    const r= await axios.get(`https://api.coinstats.app/public/v1/coins/${ctype}?currency=INR`);
    console.log(r.data.coin.price);
     const price =r.data.coin.price;
     const volume =r.data.coin.volume;
     const change =r.data.coin.priceChange1d;
     const base =r.data.coin.name;
     const target = 'INR';

     res.innerHTML =` <tr style="background-color:rgba(187, 235, 236, 0.973); color:black; font-weight:700">
     <td>
        Property
     </td>
     <td> Value </td>
 </tr>
 <tr style=" color:black; font-weight:700">
     <td>
        ${base}
     </td>
     <td> ${price}</td>
 </tr>
 <tr style=" color:black; font-weight:700">
     <td>
        Volume
     </td>
     <td> ${volume}</td>
 </tr>
 <tr style=" color:black; font-weight:700">
     <td>
        Change
     </td>
     <td> ${change}</td>
 </tr>`
 upd = setTimeout(()=>fetchPrice(ctype),10000);
};
