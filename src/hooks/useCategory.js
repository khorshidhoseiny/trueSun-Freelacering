import { useQuery } from "@tanstack/react-query";
import { getCategoriApi } from "../services/categoryService";

export default function useCategory() {
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategoriApi,
  });
  const { categories: rawCategories = [] } = data || {};

  const Categories = rawCategories.map((item) => ({
    label: item.title,
    value: item._id,
  }));

  const transformCategories = rawCategories.map((item) => ({
    label: item.title,
    value: item.englishTitle,
  }));
  return { isLoading, Categories, transformCategories };
}
