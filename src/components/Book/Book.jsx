import React, {Component} from "react";
import styles from "./Book.module.scss";

class Book extends Component {
    render(){

        const cardData = this.props.cardData;

        return(
            <article className={styles.book}>
                {/* <img src={require("../../static/images/" + cardData.picture)}/> */}
                <h3>{cardData.title}</h3>
                <h4>{cardData.author}</h4>
            </article>
        );
    }
}

export default Book;