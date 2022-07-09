import { useEffect, useState } from "react";
import api from "../services/api";

const useCategory = () => {
  const [filter, setFilter] = useState("");
  const [categories, setCategories] = useState<string[]>([]);
  const getCategories = async () => {
    const response = await api.get("/categories");
    setCategories(response.categories);
  };
  const handleFilter = (value: string) => {
    setFilter(value);
  };
  useEffect(() => {
    getCategories();
  }, []);
  return { filter, categories, handleFilter };
};
export default useCategory;
