import { Department } from "./department";
import { Role } from "./role";

export interface Staff {
   	 staffId: string,
	 department: Department,
	 staffName: string,
	 gender: string,
	 birthday: Date,
	 staffAddress: string,
	 indentityNumber: Number,
	 phoneNumber: Number,
	 username: string,
	 staffPassword: string,
	 role: Role,
}
