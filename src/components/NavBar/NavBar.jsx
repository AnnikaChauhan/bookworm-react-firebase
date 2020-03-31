import React, {Component} from "react";
import styles from "./NavBar.module.scss";
import {firestore} from "../../firebase";
import AuthorList from "../AuthorList";


class NavBar extends Component {

    state = {
        books: [],
        authors: []
    }
    //you could do this entire thing on the App page instead, do all of the calls there for books/author etc, the set state would have several things in it
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