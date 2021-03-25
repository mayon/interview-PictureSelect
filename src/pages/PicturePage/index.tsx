import * as React from "react";
import { useState } from "react";
import PictureSelect from "../../components/PictureSelect";

const picturesData = [
  {
    id: "1",
    name: "foo",
    url:
      "https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ"
  },
  {
    id: "2",
    name: "foo",
    url:
      "https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ"
  },
  {
    id: "3",
    name: "foo",
    url:
      "https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ"
  }
];

const Page = () => {
  const [value, setValue] = useState(["1"]);
  const pictures = picturesData;

  console.log("用户选择图片 id : ", value);

  return (
    <PictureSelect
      pictures={pictures}
      value={value}
      onChange={(value: string[]) => setValue(value)}
    />
  );
};

export default Page;
