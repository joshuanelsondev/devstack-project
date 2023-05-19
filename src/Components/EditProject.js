import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function EditProject() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [editProject, setEditProject] = useState({
      title: "",
      description: "",
      tech: "",
      image: "",
      github_link: "",
      demo_link: "",
      is_favorite: false,
      updated_on: "",
    });

    useEffect(() => {
        axios.get(`${API}/projects/${id}`)
            .then((res) => {
                console.log(res.data);
            })
    }, [id]);

    const updateProject = (updatedProject) => {
        axios.put(`${API}/projects/${id}`)
        .then(() => {
            navigate(`/projects/${id}`);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    const handleTextChange = (event) => {
        const { id, value } = event.target;
        setEditProject({ ...editProject, [id]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        updateProject();
    };
}
