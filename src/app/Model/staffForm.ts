import { Department } from "./department"
import { Role } from "./role";

export class StaffForm{
    staffId: string;
	 department: Department = {
		 departmentId: "",
		 departmentName: ""
	 };
	 staffName: string;
	 gender: string;
	 birthday: Date;
	 staffAddress: string;
	 indentityNumber: Number;
	 phoneNumber: Number;
	 username: string;
	 staffPassword: string;
	 role: Role = {
		 roleId: "",
		 roleName: ""
	 };
}