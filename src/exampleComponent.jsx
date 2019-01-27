import React from "react";

export default class Saludo extends React.Component {

    constructor(props) {
        super(props);
        this.handleLike = this.handleLike.bind(this)

        this.state = { like: (this.props.like) ? true : false }
    }

    handleLike = () => {
        this.setState({like: !this.state.like});
    }

    render() {
        return (
            <>
                <i>Nombre: {this.props.nombre}</i>
                <i>{this.props.children}</i>
                <p><button className="btn btn-primary" onClick={this.handleLike}>Vale</button></p>
                <br />
                <p>Like: {String(this.state.like)}</p>
            </>
        );
    }
}