import React from "react";
import { getHouse } from "../../redux/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CharacterCard from "../CharacterCard/CharacterCard";

// CUIDADOOOO. SI O SI FUNCTIONAL COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
// TAMBIEN VAS A TENER QUE USAR HOOKS!
const HouseDetail = (props) => {
  const dispatch = useDispatch();
  const house = useSelector((state) => state.house);

  React.useEffect(() => {
    dispatch(getHouse(props.match.params.houseId));
  }, [dispatch, props.match.params.houseId]);

  return (
    <div>
      <div>{house.name}</div>
      <div>{house.region}</div>
      <div>{house.words}</div>
      <div>
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
  );
};

export default HouseDetail;
