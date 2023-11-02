export class Quote {
  statement: string;
  person: string;
  relation: string;

  constructor(statement: string, person: string, relation: string)
  {
    this.statement = statement;
    this.person = person;
    this.relation = relation;
  }

 }
