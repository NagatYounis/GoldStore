import { createContext, useContext, useState } from "react";

 type Item={
 id: number,
 img: string,
  quantity: number | null,
}

  type CartData ={
    items : Item[],
    increaseQuantity:(id: number ,img : string)=>void
}
// type ProductImage = { url: string; alt?: string };

const CartContext = createContext<CartData | null>(null);
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<Item[]>([]);

  const increaseQuantity = (id: number , img:string) => {
    setItems(prevItems => {
      const item = prevItems.find(i => i.id === id);

      if (item) {
        return prevItems.map(i =>
          i.id === id ? { ...i, quantity: (i.quantity ?? 0) + 1
 } : i
        );
      }

      return [...prevItems, { id, img, quantity: 1 }];
    });
  };
console.log(items)
  return (
    <CartContext.Provider value={{ items, increaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
}
export const useCart =()=>{
    const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;

};
