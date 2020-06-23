export class Users {
    public Id: number;
    public name: string;
    public pwd: string;
    public email: string;

    constructor(Id: number, name: string, pwd: string, email: string) {
    this.Id = Id;
    this.name = name;
    this.pwd = pwd;
    this.email = email;
    }
}

export class Quizmodel {

    ID: number;
    language: String;
    question: String;
    anslistobj: String[];
    answer: String;

    constructor(ID: number, language: String, question: String, anslistobj: String[], answer: String) {
    this.ID = ID;
    this.language = language;
    this.anslistobj = anslistobj;
    this.answer = answer;
   }
   }
export class Answermodel {
   option: String[];
   constructor(option: String[]) {
   this.option = option;
   }
}
