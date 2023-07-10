interface IProject {
  title: string;
  image: string;
}

export interface IPorjects {
  title: string;
  subtitle: string;
  image: string;
  project_content: IProject[];
}
