export class Serie {
  public id: number;
  public name: string;
  public channel: string;
  public description: string;
  public webpage : string;
  public poster: string;
  public seasons: number;

  public constructor(id: number, name: string, channel: string, description: string, webpage: string, poster: string, seasons: number) {
    this.id = id;
    this.name = name;
    this.channel = channel;
    this.description = description;
    this.webpage = webpage;
    this.poster = poster;
    this.seasons = seasons;
  }
}

