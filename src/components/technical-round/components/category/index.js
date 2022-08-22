import styled from "@emotion/styled";
import { useState } from "react";
import "./style.css";

const Aside = styled("ul")(({ theme }) => ({
  backgroundColor: theme.palette.background.main,
}));

const Category = ({ categoryList, onCategoryChange }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSelectedCategory = (category, index) => {
    setSelectedCategory(index);
    onCategoryChange(index);
  };
  return (
    <Aside>
      <ul>
        {categoryList &&
          categoryList.length > 0 &&
          categoryList.map((category, index) => {
            return (
              <li
                key={category.title}
                onClick={() => handleSelectedCategory(category, index)}
              >
                {category.title}
              </li>
            );
          })}
      </ul>
    </Aside>
  );
};

export default Category;
