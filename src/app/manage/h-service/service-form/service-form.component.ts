import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceForm } from 'src/app/Model/service';
import { HotelServiceService } from 'src/app/Services/hotel-service.service';

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.css']
})
export class ServiceFormComponent implements OnInit {

  serviceId
  serviceForm: ServiceForm = new ServiceForm()
  serviceCategories = []
  title = "ADD SERVICE"

  constructor(
    private route: ActivatedRoute,
    private hotelService: HotelServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.serviceId = this.route.snapshot.paramMap.get("serviceId")
    console.log(this.serviceId)

    this.hotelService.getAllCategory().subscribe(svc =>{
      this.serviceCategories = svc
      console.log(this.serviceCategories)
    })

    if(this.serviceId){
      this.title = "EDIT SERVICE"
      this.hotelService.getServiceById(this.serviceId).subscribe(service =>{
        this.serviceForm = service
        console.log(this.serviceForm)
      })
    }

  }

  saveService(serviceFormValue){
    console.log(serviceFormValue)
    if(this.serviceId){
      this.hotelService.updateService(this.serviceId, {
        serviceId: this.serviceId,
        serviceName: serviceFormValue.serviceName,
        serviceCategory: {
          categoryId: serviceFormValue.serviceCategory,
          categoryName: "",
        },
        price: serviceFormValue.price,
        description: serviceFormValue.description
      }).subscribe(room =>{
          console.log(room)
          alert("Successful")
      })

    }
    else{
      this.hotelService.postService({
        serviceId: "",
        serviceName: serviceFormValue.serviceName,
        serviceCategory: {
          categoryId: serviceFormValue.serviceCategory,
          categoryName: "",
        },
        price: serviceFormValue.price,
        description: serviceFormValue.description

      }).subscribe(room =>{
        console.log(room)
        alert("Successful")
      })
    }

  }

  delete(serviceId){
    let cfm = confirm("Are you sure to delete this service ?")
    if (cfm){
    this.hotelService.deleteService(serviceId).subscribe(() =>{
      alert("Successful")
      this.router.navigate(['/manage-service']);
    })}
  }

}
