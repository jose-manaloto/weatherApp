import Button from "@material-ui/core/Button";
import * as React from "react";

class Form extends React.Component<{
  onSubmit: any;
}> {
  public render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <input
          className="inputBox"
          type="text"
          name="city"
          placeholder="City..."
        />
        <input
          className="inputBox"
          type="text"
          name="country"
          placeholder="Country..."
        />
        <Button variant="contained" type="submit">
          Get Weather
        </Button>
      </form>
    );
  }
}
export default Form;
