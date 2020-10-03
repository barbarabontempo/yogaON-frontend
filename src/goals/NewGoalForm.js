import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";

export default class NewGoalForm extends Component {
  state = {
    pose_name: "Pick a pose",
    description: "",
    user_id: "",
  };

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({
      [event.target.name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3000/pose_goals", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pose_name: this.state.pose_name,
        description: this.state.description,
        user_id: this.props.userId,
      }),
    })
      .then((r) => r.json())
      .then((newGoal) => {
        this.props.onFormSubmit(newGoal);
      });
      this.setState(({
        pose_name: "",
        description: ""
       }))
  };

  render() {
 
    return (
      <div className="form-cont">
        {/* <h2>New GOAL</h2> */}
        <form onSubmit={this.handleSubmit} className="goal-form">

        <label htmlFor="description"> I want to  </label>
          <input
            type="text"
            placeholder="[describe your goal]"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />


          <label htmlFor="pose_name"> the    </label>
          {/* <input
            type="text"
            name="pose_name"
            value={this.state.pose_name}
            onChange={this.handleChange}
          /> */}

  

<select  style={{color: "purple;"}} placeholder="pick a pose" className="dd-menu" name="pose_name" value={this.state.pose_name} onChange={this.handleChange}>
<option value="" selected>what pose do you want to work on?</option>
            <option value="Boat">Boat</option>
            <option value="Half-Boat">Half-Boat</option>
            <option value="Bow">Bow</option>
            <option value="Bridge">Bridge</option>
            <option value="Butterfly">Butterfly</option>
            <option value="Camel">Camel</option>
            <option value="Cat">Cat</option>
            <option value="Cow">Cow</option>
            <option value="Chair">Chair</option>
            <option value="Child's Pose">Child's Pose</option>
            <option value="Corpse">Corpse</option>
            <option value="Crescent Lunge">Crescent Lunge</option>
            <option value="Crow">Crow</option>
            <option value="Dolphin">Dolphin</option>
            <option value="Downward-Facing Dog">Downward-Facing Dog</option>
            <option value="Eagle">Eagle</option>
            <option value="Extended Hand to Toe">Extended Hand to Toe</option>
            <option value="Extended Side Angle">Extended Side Angle</option>
            <option value="Forward Bend with Shoulder Opener">Forward Bend with Shoulder Opener</option>
            <option value="Half-Moon">Half-Moon</option>
            <option value="Handstand">Handstand</option>
            <option value="Low Lunge">Low Lunge</option>
            <option value="Pigeon">Pigeon</option>
            <option value="King Pigeon">King Pigeon</option>
            <option value="Plank">Plank</option>
            <option value="Plow">Plow</option>
            <option value="Pyramid">Pyramid</option>
            <option value="Reverse Warrior">Reverse Warrior</option>
            <option value="Seated Forward Bend">Seated Forward Bend</option>
            <option value="Lotus">Lotus</option>
            <option value="Half Lord of the Fishes">Half Lord of the Fishes</option>
            <option value="Shoulder Stand">Shoulder Stand</option>
            <option value="Side Plank">Side Plank</option>
            <option value="Sphinx">Sphinx</option>
            <option value="Splits">Splits</option>
            <option value="Squat">Squat</option>
            <option value="Standing Forward Bend">Standing Forward Bend</option>
            <option value="Crescent Moon">Crescent Moon</option>
            <option value="Side Splits">Side Splits</option>
            <option value="Tree">Tree</option>
            <option value="Triangle">Triangle</option>
            <option value="Upward-Facing Dog">Upward-Facing Dog</option>
            <option value="Warrior One">Warrior One</option>
            <option value="Warrior Two">Warrior Two</option>
            <option value="Warrior Three">Warrior Three</option>
            <option value="Wheel">Wheel</option>
            <option value="Wild Thing">Wild Thing</option>
          </select>




<label htmlFor="description"> yoga pose. </label>
          <input type="submit" value="go!" />
        </form>
      </div>
    );
  }
}
