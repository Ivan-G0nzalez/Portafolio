interface IService {
  title: string;
  para: string;
  logo: any;
}

export interface IServices {
  title: string;
  subtitle: string;
  service_content: IService[];
}
