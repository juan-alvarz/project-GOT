import React from "react";
import { getHouse } from "../../redux/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CharacterCard from "../CharacterCard/CharacterCard";
import "./HouseDetail.css";

// CUIDADOOOO. SI O SI FUNCTIONAL COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
// TAMBIEN VAS A TENER QUE USAR HOOKS!
const HouseDetail = (props) => {
  const dispatch = useDispatch();
  const house = useSelector((state) => state.house);

  React.useEffect(() => {
    dispatch(getHouse(props.match.params.houseId));
  }, [dispatch, props.match.params.houseId]);

  return (
    <div className="container-centerDetail">
      <div className="container-houseDetail">
        <div className="header-houseDetail">
          <div className="border-title">
            <strong> Name:</strong>
            <br /> {house.name}
          </div>
          <div className="border-title">
            <strong> Region:</strong>
            <br /> {house.region}
          </div>
          <div>
            <strong> Words:</strong>
            <br /> {house.words}
          </div>
        </div>
        <div className="cardDetail">
          {house.characters?.map((c) => (
            <CharacterCard
              id={c.id}
              key={c.id}
              imageUrl={c.imageUrl}
              fullName={c.fullName}
              title={c.title}
              family={c.family}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HouseDetail;
