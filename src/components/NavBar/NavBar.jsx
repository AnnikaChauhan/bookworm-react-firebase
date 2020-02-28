import React, {Component} from "react";
import styles from "./NavBar.module.scss";

class NavBar extends Component {
    render(){
        return(
            <ul className={styles.navigation}>
                <li>Number of Books</li>
                <li>Authors</li>
            </ul>
        );
    }
}

export default NavBar;