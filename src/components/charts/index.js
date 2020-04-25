import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { fetchData } from "../../store/actions/list";

import { MediumTitle } from "../../styles/headings";

import LineChart from "./LineChart";
import BarChart from "./BarChart";

const charts = {
  line: <LineChart />,
  bar: <BarChart />,
};

const Main = () => {
  const dispatch = useDispatch();
  const [type, setType] = useState("line");

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <>
      <MediumTitle>
        Charts{" "}
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="line">Line Chart</option>
          <option value="bar">Bar Chart</option>
        </select>
      </MediumTitle>
      <div className="graph">{charts[type]}</div>
    </>
  );
};

export default Main;
