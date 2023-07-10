interface ITestimonial {
  review: string;
  img: string;
  name: string;
}

export interface ITestimonials {
  title: string;
  subtitle: string;
  testimonials_content: ITestimonial[];
}
