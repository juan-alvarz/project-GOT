import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllHouses } from "../../redux/actions";
import img from "../../img-cp2/main-image-cp2.jpg";
import HouseCard from "../HouseCard/HouseCard";
import "./Houses.css";
// CUIDADOOOO. SI O SI CLASS COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
// TAMBIEN VAS A TENER QUE USAR EL METODO CONNECT DE REDUX, JUNTO A MAP_STATE_TO_PROPS
// Y MAP_DISPATCH_TO_PROPS!! <3

export class Houses extends Component {
  componentDidMount() {
    this.props.getAllHouses();
  }

  render() {
    return (
      <div className="main-container">
        <h1 className="Title">
          <a href="https://www.hbo.com/game-of-thrones" target="_blank">
            Game of Thrones
          </a>
        </h1>
        <img src={img} alt="main-img" id="img-welcome" />

        <h3 className="Title">
          <a
            href="https://awoiaf.westeros.org/index.php/List_of_Houses"
            target="_blank"
          >
            Houses
          </a>
        </h3>

        <section className="houses-card">
          {this.props.houses &&
            this.props.houses.map((r) => {
              return (
                <div key={r.id}>
                  <HouseCard
                    id={r.id}
                    name={r.name}
                    region={r.region}
                    words={r.words}
                    characters={r.characters}
                  />
                </div>
              );
            })}
        </section>
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    houses: state.houses,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    getAllHouses: () => dispatch(getAllHouses()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Houses);
