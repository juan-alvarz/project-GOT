import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteHouse } from "../../redux/actions/index.js";
import "./HouseCard.css";

// CUIDADOOOO. SI O SI CLASS COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
// TAMBIEN VAS A TENER QUE USAR EL METODO CONNECT DE REDUX , JUNTO A MAP_DISPATCH_TO_PROPS! <3
export class HouseCard extends Component {
  render() {
    return (
      <div className="container-houseCard">
        <div className="head-container">
          <button
            className="x"
            onClick={() => this.props.deleteHouse(this.props.id)}
          >
            x
          </button>
          <Link className="title-house" to={`/houses/${this.props.id}`}>
            <h3>{this.props.name}</h3>
          </Link>
        </div>
        <p className="txt-card">Region: {this.props.region}</p>
        <p className="txt-card">Words: {this.props.words}</p>
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    deleteHouse: (id) => dispatch(deleteHouse(id)),
  };
};

// export function mapDispatchToProps(dispatch) {
//   deleteHouse: (id) => dispatch(deleteHouse(id));
// }

export default connect(null, mapDispatchToProps)(HouseCard);
