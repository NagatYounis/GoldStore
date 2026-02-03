import  { useEffect, useState } from 'react';
import supabase from  '../lib/supabase';
import { calculatePrice } from '../utils/calculatePrice';
export type Product = {
  id: number
  name: string
  image_url: string
  weight: number
  karat: number
  labor_cost?: number
}
export default function GetProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [goldPrices, setGoldPrices] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from('products').select('*');
      if (error) console.log(error);
      else setProducts(data);
    };

    // 2️⃣ سحب آخر أسعار الذهب
    const fetchGoldPrices = async () => {
      const { data, error } = await supabase
        .from('GoldPrice')
        .select('*')
        .order('date', { ascending: false }); // آخر سعر
      if (error) console.log(error);
      else {
        const latest: any = {};
        data.forEach(item => {
          if (!(item.karat in latest)) latest[item.karat] = item.price_per_gram;
        });
        setGoldPrices(latest);
      }
    };

    fetchProducts();
    fetchGoldPrices();
  }, []);

  return (
    <div className="products-grid">
      {products.map((p: Product) => (
        // <ProductCard img={p.image_url} price={calculatePrice(p, goldPrices)}/>
        <div key={p.id} className="card">
          <img src={p.image_url} alt={p.name} />
          <h3>{p.name}</h3>
          <p>الوزن: {p.weight} جرام</p>
          <p>السعر: {calculatePrice(p, goldPrices)} جنيه</p>
        </div>
     ))}
    </div>
  );
}
