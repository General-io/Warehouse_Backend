export class Employee {
    id: number;
    employeeId: number;
    firstname: string;
    lastName: string;
    age: number;
    gender: string;
    telephone: number;
    ort: string;
    street: string;
    streetNo: number;
    country: string;
    department: string;
    birthday: Date;

    setId(id: number):void{
      this.id = id;
    }
  }