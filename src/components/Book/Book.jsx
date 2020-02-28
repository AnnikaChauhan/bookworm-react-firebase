import React, {Component} from "react";
import styles from "./Book.module.scss";

class Book extends Component {
    render(){
        const bookData = this.props.bookData;

        return(
            <article className={styles.book}>
                <img src={require("../../static/images/" + bookData.picture)}/>
                <div>
                    <h3>{bookData.title}</h3>
                    <h4>{bookData.author}</h4>
                </div>
            </article>
        );
    }
}

export default Book;