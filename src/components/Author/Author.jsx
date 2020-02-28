import React, {Component} from "react";

class Author extends Component {
    render(){
        const authorData = this.props.authorData;

        return(
            <li>{authorData.author}</li>
        );

    }
}

export default Author;