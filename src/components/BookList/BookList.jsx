import React, { Component } from "react";
import styles from "./BookList.module.scss";
import Book from "../Book/Book";
import {firestore} from "../../firebase";

class BookList extends Component {

    state = {
        users: []
    }

    componentDidMount(){
        firestore
            .collection("books")
            .get()
            .then((query) => {
                const users = query.docs.map(doc => doc.data());
                this.setState({ users });
            })
    }

    render(){
        return (
            <section className={styles.books}>
                {this.state.users.map((person, index) => (
                    <Book cardData={person} key={index} />
                ))}
            </section>
        );
    }
}

export default BookList;