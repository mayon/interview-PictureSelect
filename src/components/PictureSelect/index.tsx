import * as React from "react";
import "./style.css";

export interface IPicture {
  id: string;
  name: string;
  url: string;
}

export interface IPictureSelect {
  pictures: IPicture[];
  value: string[];
  onChange: (value: string[]) => void;
}

const PictureSelect = (props: IPictureSelect) => {
  const handleChange = (id: string) => {
    const newValue: string[] = [...props.value];
    const index = newValue.indexOf(id);
    if (index === -1) {
      newValue.push(id);
    } else {
      newValue.splice(index, 1);
    }
    props.onChange(newValue);
  };

  return (
    <div className="picture-select">
      <div className="picture-select-total">
        已选中 {props.value.length} 个文件
      </div>
      <div className="picture-select-list">
        {props.pictures.map((picture: IPicture) => (
          <div
            className={`picture-select-item ${
              props.value.indexOf(picture.id) !== -1 ? "active" : ""
            }`}
            key={`picture-select-item${picture.id}`}
          >
            <span
              className="checkbox"
              onClick={() => handleChange(picture.id)}
            ></span>
            <img src={picture.url} alt={picture.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PictureSelect;
