export class Project {
  date: string;
  heading: string;
  icon: string;
  content: string[]

  constructor(
    date:string,
    heading: string,
    icon: string,
    content: string[]
  )
  {
    this.date = date;
    this.heading = heading;
    this.icon = icon;
    this.content = content;
  }
}
