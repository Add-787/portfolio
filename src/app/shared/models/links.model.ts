export class Link {
  imgUrl: string;
  category: string;
  link: string;

  constructor(imgUrl: string, category: string, link: string)
  {
    this.imgUrl = imgUrl;
    this.category = category;
    this.link = link;
  }
}
