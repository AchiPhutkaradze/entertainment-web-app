import React from "react";
import data from "../../public/data.json";
export default function Bookmarked() {
  const filteredData = data.filter((item) => {
    return item.isBookmarked === true;
  });
  console.log(filteredData);
  return (
    <div>
      {filteredData.map((item) => (
        <div>{item.thumbnail.regular.small}</div>
      ))}
    </div>
  );
}
