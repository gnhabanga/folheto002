import React from "react";
import { CategoriesData } from "../../Data/CategoriesData";

const YearData = [
  { title: "Sort By Year" },
  { title: "2020 - 2021" },
  { title: "2021 - 2022" },
];

const TimesData = [
  { title: "Sort By Hours" },
  { title: "1 - 5 Hours" },
  { title: "5 - 10 Hours" },
  { title: "10 - 15 Hours" },
];

const RatesData = [
  { title: "Sort By Rates" },
  { title: "1 Star" },
  { title: "2 Star" },
  { title: "3 Star" },
  { title: "4 Star" },
  { title: "5 Star" },
];

function Filters() {
  const [category, setCategory] = React.useState({ title: "Category" });
  const [year, setYear] = React.useState(YearData[0]);
  const [times, setTimes] = React.useState(TimesData[0]);
  const [rates, setRates] = React.useState(RatesData[0]);

  const Filter = [
    {
      value: category,
      onchange: setCategory,
      items: CategoriesData,
    },
    {
      value: year,
      onchange: setYear,
      items: YearData,
    },
    {
      value: times,
      onchange: setTimes,
      items: TimesData,
    },
    {
      value: rates,
      onchange: setRates,
      items: RatesData,
    },
  ];

  return <div>Filters</div>;
}

export default Filters;
