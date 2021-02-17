import {devicesData, projectsData, usersData} from "./mocks";
import { fakeApi } from "./helpers";

export const loadProjectsApi = async () => {
  const projects = await fakeApi(projectsData)
  const users = await fakeApi(usersData)
  const devices = await fakeApi(devicesData)
  return projects.map((project) => {
    return {
      ...project,
      users: users.filter(user => user.projectId === project.id),
      devices: devices.filter(device => device.projectId === project.id),
    }
  })
};
export const deleteProjectApi = async (project) => await fakeApi(project);
