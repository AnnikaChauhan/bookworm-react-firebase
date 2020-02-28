import React, {Component} from "react";
import styles from "./NavBar.module.scss";
import {firestore} from "../../firebase";
import AuthorList from "../AuthorList";


class NavBar extends Component {

    state = {
        books: [],
        authors: []
    }

    componentDidMount(){
        firestore
            .collection("books")
            .get()
            .then((query) => {
                const books = query.docs.length;
                this.setState({ books });

                firestore
                    .collection("books")
                    .get()
                    .then((query) => {
                        const authors = query.docs.map(doc => doc.data());
                        console.log(authors);
                        console.log(authors[0].author);
                        this.setState({authors});
                    })
            })
    }

    render(){
        return(
            <article className={styles.navigation}>
                <p>Number of Books <br/> <span>{this.state.books}</span></p>
                <div>
                    <p>Authors</p>
                    <br/>
                    <AuthorList/>
                </div> 
            </article>
        );
    }
}

export default NavBar;