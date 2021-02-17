import React, {useEffect, useState} from "react";
import Grid from '@material-ui/core/Grid';
import ProjectCard from "./components/ProjectCard";
import {deleteProjectApi, loadProjectsApi} from "./api";

const App = () => {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    try {
      const data = await loadProjectsApi();
      setProjects(data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const deleteProject = async (project) => {
    try{
      const res = await deleteProjectApi(project);
      const newList = projects.filter((item) => item.id !== res.id)
      setProjects([...newList])
    }catch (e) {
      console.log(e.response)
    }
  }

  return (
    <Grid item xs={12}>
      <Grid container>
        {projects.map((project) => (
           <ProjectCard deleteProject={deleteProject} key={project.id} project={project} />
        ))}
      </Grid>
    </Grid>
  );
};

export default App;
