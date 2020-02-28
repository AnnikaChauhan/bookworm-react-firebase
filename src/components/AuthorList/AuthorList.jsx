import React, { Component } from "react";
import styles from "./AuthorList.module.scss";
import {firestore} from "../../firebase";
import Author from "../Author";

class AuthorList extends Component {
    state = {
        books: []
    }

    componentDidMount(){
        firestore
            .collection("books")
            .get()
            .then((query) => {
                const books = query.docs.map(doc => doc.data());
                this.setState({books});
            })
    }

    render(){
        return(
            <ul>
                {this.state.books.map((book,index) => (
                    <Author authorData={book} key={index}/>
                ))}
            </ul>
        );
    }

}

export default AuthorList;