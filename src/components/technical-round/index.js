import { useEffect, useState } from "react";
import Category from "./components/category";
import TopicsList from "./components/topics";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestions } from "../../store/questions/questionsAction";
import Spinner from "../spinner";

const TechnicalRound = ({ type, onScoreChange }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [dataList, setDataList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const dispatch = useDispatch();
  const result = useSelector((state) => state.questions);

  useEffect(() => {
    const getQuestions = async () => {
      await dispatch(fetchQuestions(type));
    };
    getQuestions();
  }, []);

  useEffect(() => {
    if (result?.data?.areas?.length > 0) {
      addScoreToTheObject(result?.data?.areas);
    }
  }, [result]);

  const addScoreToTheObject = (areas) => {
    let newAreas = JSON.parse(JSON.stringify(areas));
    if (newAreas && newAreas.length > 0) {
      newAreas.forEach((newTopic, aindex) => {
        newAreas[aindex]["score"] = "";
        // let newTopic = JSON.parse(JSON.stringify(topic));
        if (newTopic) {
          newTopic.score = 0;
          newTopic.topics.forEach((element, index) => {
            newTopic.topics[index]["score"] = 0;
            let questionsSet = [];
            if (element.questions && element.questions.length > 0) {
              element.questions.map((item) => {
                let obj = { title: item, score: "" };
                questionsSet.push(obj);
              });
              element.questions = questionsSet;
            }
          });
          // setSelected(newTopic);
          newAreas[aindex] = newTopic;
        }
      });
      setDataList(newAreas);
      setSelectedCategory(newAreas[0]);
    }
  };

  const handleCategoryChange = (id) => {
    const category = dataList.find((item, index) => index === id);
    if (category) {
      setSelectedCategory(category);
      setCurrentIndex(id);
    }
  };

  const handleScoreChange = (topic) => {
    let data = [...dataList];
    data[currentIndex] = topic;
    setSelectedCategory(data[currentIndex]);
    setDataList(data);
    // onScoreChange(data);
  };

  return (
    <>
      {result.loading === true ? (
        <Spinner />
      ) : (
        <Box sx={{ display: "flex" }}>
          <Category
            title={result?.data?.subject}
            selected={selectedCategory}
            categoryList={dataList}
            onCategoryChange={handleCategoryChange}
          />
          <TopicsList
            selectedCategory={selectedCategory}
            onScoreChange={handleScoreChange}
          />
        </Box>
      )}
    </>
  );
};

export default TechnicalRound;
