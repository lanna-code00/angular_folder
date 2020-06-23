
export class Setquest {
    public Id: number;
    public question: string;
    public optionA: string;
    public optionB: string;
    public optionC: string;
    public optionD: string;
    public correctans: string;
    public marks: string;

    constructor(Id: number, question: string, optionA: string, optionB: string, optionC: string, optionD:string,
                correctans: string, marks: string) {
    this.Id = Id;
    this.question = question;
    this.optionA = optionA;
    this.optionB = optionB;
    this.optionC = optionC;
    this.optionD = optionD;
    this.correctans = correctans;
    this.marks = marks;
    }
}