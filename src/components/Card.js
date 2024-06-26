import { useState } from "react";

function Card(id, name, info, price, image) {
  const [readmore, setReadmore] = useState(false);

  const description = `${info.subString(0, 200)}....`;

  function readmoreHandler() {
    setReadmore(!readmore);
  }

  return (
    <div className="card">
      <img src={image} className="image"></img>
      <div>
        <div className="tour-details">
          <h4 className="tour-price">{price}</h4>
          <h4 className="tour-name">{name}</h4>
        </div>

        <div className="description">
          {description}
          <span className="read-more" onClick={readmoreHandler}>
            {readmore ? `show less` : ` Read more`}
          </span>
        </div>
      </div>
      <button className="btn-red" onClick={removeTour}>
         Not Intrested 
      </button>
    </div>
  );
}

export default Card;
