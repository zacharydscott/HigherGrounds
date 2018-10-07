import * as React from "react";
import "../../App.css";
import "bootstrap";
import SimpleMap from "../utility/simple-map";
import { RouteComponentProps } from "../../../node_modules/@types/react-router";
/**
 * This is a shell component, don't impliment this!
 * Copy and past the text into new components.
 */
interface IProps extends RouteComponentProps {
  history: any;
}

export class HomeScreen extends React.Component<IProps, any> {
  constructor(props: any) {
    super(props);
    // remember to bind your functions here
    this.toStory = this.toStory.bind(this);
    this.toMenu = this.toMenu.bind(this);
  }
  public toStory() {
    this.props.history.push("/story");
  }
  public toMenu() {
    this.props.history.push("/story");
  }
  public render() {
    return (
      <div>
        <div id="top-div" className="para-div">
          <div id="buffer" />

          <h3>When the coffee matters</h3>
          <button className="btn btn-primary-outline">Our Menu</button>
        </div>
        <div className="divider" />
        <div id="middle1-div" className="para-div">
          <h3>Come to Higher Grounds</h3>
          <p>
            Located in the cozy heart of the High Country, Higher Grounds Coffee
            Shoppe is committed to quality service, and quality products.
          </p>
          <ul onClick={this.toStory}>Find out more</ul>
        </div>
        <div className="para-div" id="middle1-fix" />
        <div className="divider" />
        <div id="middle2-div" className="para-div">
          <div id="buffer" />
          <div>
            <h4>
              Here at higher grounds coffee shoppe, our customers always come
              First.
            </h4>
            <p>
              That's why Higher Grounds Coffee Shoppe is the six-time winner of
              the Watauga Democrat’s, “Best of the Best,’ award for Best Coffee
              Shop. Our sincerest thanks to all of our customers.{" "}
            </p>
          </div>
        </div>
        <div className="para-div" id="middle2-fix" />
        <div className="divider" />
        <div className="para-div" id="middle3-div">
          <h4 />
          <ul onClick={this.toMenu}>CHECK OUT OUR MENU</ul>
          <p>
            Choose from our extensive menu of coffee creations. From Cappuccino
            to Spiced Chai, our menu should have you covered. Ask our Baristas
            for suggestions.
          </p>
        </div>
        <div className="para-div" id="middle3-fix" />
        <div className="divider" />
        <div className="para-div" id="middle4-div">
          <h4 />
          <ul onClick={this.toMenu}>CHECK OUT OUR MENU</ul>
          <p>
            Choose from our extensive menu of coffee creations. From Cappuccino
            to Spiced Chai, our menu should have you covered. Ask our Baristas
            for suggestions.
          </p>
        </div>
        <div className="para-div" id="middle4-fix" />
        <div className="divider" />
        <div className="para-div" id="middle5-div">
          <h4 />
          <SimpleMap />
          <div className="d-flex flex-row bd-highlight mb-3">
            <div className="p-5 bd-highlight" />
            <div className="p-3 bd-highlight">Visit Us</div>
            <div className="p-5 bd-highlight" />
          </div>
        </div>
      </div>
    );
  }
}
