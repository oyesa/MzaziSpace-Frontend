export class Users {
    // id!: number;
    username!: string;
    role!: string;
    email!: string;
    f_name!: string;
    l_name!: string;
    password!:string;

    constructor(username: string, role: string, email: string, f_name: string,
        l_name: string, password:string){
        this.username=username;
        this.role=role;
        this.email=email;
        this.f_name=f_name;
        this.l_name=l_name;
        this.password=password;

    }
}
