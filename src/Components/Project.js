import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function Project({ project }) {
    
    const navigate = useNavigate();

    const deleteProject = () => {
        axios.delete(`${API}/project/${project.id}`)
        .then(() => {
            navigate('/projects');
        })
        .catch((error) => {
            console.log(error);
        });
    };

    return (
        <div></div>
    )
}