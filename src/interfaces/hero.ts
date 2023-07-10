interface IHeroContent {
  count: string;
  text: string;
}

export interface IHero {
  title: string;
  firstName: string;
  LastName: string;
  btnText: string;
  image: string;
  hero_content: IHeroContent[];
}
