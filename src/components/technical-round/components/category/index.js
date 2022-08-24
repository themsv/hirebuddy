import { useState } from "react";
import Chip from "@mui/material/Chip";
import { Aside } from "./styles";

const Category = ({ title, categoryList, onCategoryChange, selected }) => {
  console.log("in category comp selected category prop is", selected);
  const [selectedCategory, setSelectedCategory] = useState(0);
  console.log("categoryList", categoryList);
  console.log("selectedCategory", selectedCategory);

  const handleSelectedCategory = (category, index) => {
    setSelectedCategory(index);
    onCategoryChange(index);
  };
  return (
    <Aside>
      <h2 style={{ marginLeft: "10px" }}>{title}</h2>
      <ul>
        {categoryList &&
          categoryList.length > 0 &&
          categoryList.map((category, index) => {
            return (
              <li
                key={category.title}
                className={index === selectedCategory ? "active-nav" : ""}
                onClick={() => handleSelectedCategory(category, index)}
              >
                {category.title}
                <Chip
                  label={`Score ${category.score}`}
                  sx={{ ml: "10px", fontSize: "13px" }}
                  color={index === selectedCategory ? "primary" : "default"}
                />
              </li>
            );
          })}
      </ul>
    </Aside>
  );
};

export default Category;
