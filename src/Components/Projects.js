import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get(`${API}/projects`)
            .then((res) => {
                console.log(res.data);
                setProjects(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            
        </div>
    )
}