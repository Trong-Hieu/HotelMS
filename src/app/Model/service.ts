import { ServiceCategory } from "./service-category";

export interface Service{
  	serviceId: string,
	serviceName: string,
	price: Number,
	description: string,
	serviceCategory: ServiceCategory,
}

export class ServiceForm{
	serviceId: string;
	serviceName: string;
	price: Number;
	description: string;
	serviceCategory: ServiceCategory = {
		categoryId: "",
		categoryName: ""
	};
}
