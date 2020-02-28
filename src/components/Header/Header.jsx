import React, {Component} from "react";
import styles from "./Header.module.scss";

class Header extends Component {
    render(){
        return(
            <header className={styles.heading}>
                <h1>BookWorm</h1>
            </header>
        );
    }
}

export default Header;