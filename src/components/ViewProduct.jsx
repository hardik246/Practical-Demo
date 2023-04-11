import React from "react";
import { useDispatch, useSelector } from "react-redux";

function ViewProduct() {
  const view = useSelector((state) => state.getReducer.viewItem);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="container">
        {view.map((data, i) => {
          return (
            <>
              <div className="flex">
                <div className="left">
                  <div className="image">
                    <img
                      src={data.image}
                      style={{ width: "250px", height: "400px" }}
                    ></img>
                  </div>
                </div>
                <div
                  className="right"
                  style={{ marginTop: "10%", textAlign: "start" }}
                >
                  <h3>
                    <span style={{ color: "red" }}>Title: </span>
                    <h6>{data.title} </h6>
                  </h3>
                  <h3>
                    <span style={{ color: "red" }}>Name: </span>
                    <h6>{data.name} </h6>
                  </h3>
                  <h3>
                    <span style={{ color: "red" }}>Description: </span>
                    <h6>{data.description}</h6>
                  </h3>
                  <h3>
                    <span style={{ color: "red" }}>Price: </span>
                    <h6>{data.price} </h6>
                  </h3>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default ViewProduct;
