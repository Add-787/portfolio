export class Site {
  imgUrl: string;
  name: string;
  body: string;
  link: string;

  constructor(imgUrl: string, name: string, body: string, link: string)
  {
    this.imgUrl = imgUrl;
    this.name = name;
    this.body = body;
    this.link = link;
  }

}
