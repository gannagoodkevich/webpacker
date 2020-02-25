import React from "react"
import PropTypes from "prop-types"
class HelloWorld extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '' };

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleSubmitName = this.handleSubmitName.bind(this);
    }

    handleChangeName(event) {
        this.setState({name: event.target.value});
    }

    handleSubmitName(event) {
        localStorage.setItem("name", this.state.name);
        event.preventDefault();
        $("#carouselExampleControls").show();
        $("#greeting").html("<h1>" + "Hello " + this.state.name + "</h1>");
    }

    render() {
        return (
            <div className="form-group">
                <form onSubmit={this.handleSubmitName}>
                    <label>
                        Enter name
                        <input type="text" value={this.state.name} onChange={this.handleChangeName} />
                    </label>
                    <input type="submit" value="Отправить" className="btn-primary"/>
                </form>
            </div>
        );
    }
}

export default HelloWorld
