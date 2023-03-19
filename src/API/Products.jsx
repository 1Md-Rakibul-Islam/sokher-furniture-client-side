import { useQuery } from "@tanstack/react-query";

export const productsAPI = () => {
    const {
        data: Products = [],
        isLoading,
        refetch,
      } = useQuery({
        queryKey: ["Products"],
        queryFn: async () => {
          const res = await fetch("https://sokher-furniture-1md-rakibul-islam.vercel.app/products");
          const data = await res.json();
          return data;
        },
      });
    
      return Products;
    //   return {Products, isLoading, refetch};
}
