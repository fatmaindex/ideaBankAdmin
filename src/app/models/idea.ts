export class Idea {
  constructor(
    public id: string,
    public userName: string|null,
    public title: string,
    public description: string,
    public problemDescription: string,
    public ideaEffect: string,
    public submissionDate: string,
    public ideaStatus: string,
    public criterias:
    {
      Alignment: number,
      innovation: number,
      feasibility: number,
      scalability: number
    },
    public totalEvaluation: number,
    public comment: string,
    public isRated: boolean


  ) {}
}
