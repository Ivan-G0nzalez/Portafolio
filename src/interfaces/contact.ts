import { IconType } from "react-icons/lib";

interface IInformation {
  text: string;
  icon: IconType;
  link: string;
}

export interface IContact {
  title: string;
  subtitle: string;
  social_media: IInformation[];
}
