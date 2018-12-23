export class Employee {
    public FirstName: string;
    public CityId: number;
    public Gender1: string;
    public Gender2: string;
    public Active: boolean;
    constructor() {
        this.FirstName = "Bikesh";
        this.CityId = 2;
        this.Gender1 = "1";
        this.Gender2 = "2";
    }
}
export class User {
    public ID: number;
    public UserName: string;
    public Password: string;
    constructor() {
        this.ID = 1,
            this.UserName = "Bikesh";
        this.Password = "abcd";
    }
}