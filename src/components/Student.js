import React,{useContext} from "react";
import style from "./student.module.css";

const Student = (props) => {
        
    return (
        <>
            <li className={style.student}>
                <div>
                    <span className={style.name}>{props.name}</span>
                    <span className={style.phone}>{props.phone}</span>
                    <span className={style.email}>{props.email}</span>
                </div>
            </li>
        </>
    )
}

export default Student;