import React, {useState} from "react";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import PropTypes from "prop-types";
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 345,
    margin: 10,
  },
  media: {
    height: 140,
  },
  textField: {
    marginBottom: 5,
  },
  chip: {
    margin: 2,
  }
}));

const ProjectCard = ({ project, deleteProject, saveChanges, ...props }) => {
  const classes = useStyles();
  const [editingMode, setEditingMode] = useState(false);
  const [projectData, setProjectData] = useState(project);

  return (
    <Card {...props} className={classes.root}>
      <CardActionArea>
        <CardContent>
          <TextField
            disabled={!editingMode}
            label="Project Name"
            type="text"
            defaultValue={projectData.title}
            className={classes.textField}
            fullWidth
            onChange={(e) => setProjectData({...projectData, title: e.target.value})}
          />
          <Typography gutterBottom variant="body1" component="p">
            users:
          </Typography>
            {projectData.users.map(({firstName}, index) => <Chip key={index} className={classes.chip} label={firstName} variant="outlined" /> )}
          <Typography gutterBottom variant="body1" component="p">
            devices:
          </Typography>
          {projectData.devices.map(({serialNumber}, index) => <Chip key={index} className={classes.chip} label={serialNumber} variant="outlined" />)}
          <TextField
            disabled={!editingMode}
            id="datetime-local"
            label="Begin Date"
            type="datetime-local"
            defaultValue={projectData.beginDate}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => setProjectData({...projectData, beginDate: e.target.value})}/>
          <TextField
            disabled={!editingMode}
            id="datetime-local"
            label="Expiration Date"
            type="datetime-local"
            defaultValue={projectData.expirationDate}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => setProjectData({...projectData, expirationDate: e.target.value})}
          />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={() => deleteProject(projectData)} size="small" color="secondary">
          Delete
        </Button>
        {editingMode ? (
            <Button onClick={() => setEditingMode(!editingMode)} size="small" color="primary">
              Save
            </Button>
          ) : (
            <Button onClick={() => setEditingMode(!editingMode)} size="small" color="primary">
              Edit
            </Button>
          )
        }
      </CardActions>
    </Card>
    )
};

ProjectCard.propTypes = {
  project: PropTypes.object,
  deleteProject: PropTypes.func.isRequired,
};

ProjectCard.defaultProps = {
  project: {},
};

export default ProjectCard;
