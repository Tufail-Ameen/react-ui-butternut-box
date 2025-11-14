import React from "react";
import { useNavigate } from "react-router-dom";

export default function Breed(props) {
  let navigate = useNavigate();

  const handleclickbtn = () => {
    navigate("/CurrentlyEating");
  };

  const handelbackbtn = () => {
    navigate("/Age");
  };
  return (
    <>
      <div className="container-fluid">
        {/* Center Part */}

        <div className="row text-center mt-3">
          <span className="mt-3 pt-3" id="inputheading1">
            ------------------------- Kylan Watkins is a good...
            -------------------------
          </span>
        </div>

        <div className="row mt-5 mb-4">
          <div className="col-4"></div>
          <div className="col-4">
            <select class="form-select" aria-label="Default select example">
              <option selected>Kylan Watkins' breed </option>
              <option value="1">Border Collie</option>
              <option value="2">Border Terrier</option>
              <option value="3">Cavalier King Charles Spaniel</option>
              <option value="4">
                Cavapoo - (Cavalier King Charles Spaniel / Poodle mix)
              </option>
              <option value="5">Chihuahua</option>
              <option value="6">Shih Tzu/Pug/Chihuahua</option>
              <option value="7">
                Cockapoo - (Cocker Spaniel / Poodle mix)
              </option>
              <option value="8">Cocker Spaniel</option>
              <option value="9">Cross-bread</option>
              <option value="10">Dachshund</option>
              <option value="11">French Bulldog</option>
            </select>
          </div>
        </div>

        <div className="row text-center mb-5">
          <div className="col-3"></div>
          <div className="col-5">
            <input
              class="form-check-input mx-2"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label check" for="flexCheckDefault">
              I don't know her breed
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
