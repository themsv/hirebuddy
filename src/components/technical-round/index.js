import { useEffect, useState } from "react";
import Category from "./components/category";
import list from "../../data/hirebuddy.json";
import Topics from "./components/topics";
import Box from "@mui/material/Box";

const TechnicalRound = ({ type }) => {
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const data = list.questions[0][type];

  useEffect(() => {
    getCategoryList(data);
  }, []);

  const getCategoryList = (data) => {
    setCategoryList(data.areas);
  };

  const handleCategoryChange = (id) => {
    // const category = categoryList.find((item) => item.id == id);
    const category = categoryList.find((item, index) => index == id);

    if (category) {
      setSelectedCategory(category);
    }
  };
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Category
          categoryList={categoryList}
          onCategoryChange={handleCategoryChange}
        />
        {selectedCategory && <Topics selectedCategory={selectedCategory} />}
      </Box>
    </>
  );
};

export default TechnicalRound;
