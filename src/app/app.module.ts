import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { ChartsModule } from 'ng2-charts';


import { BookingService } from './Services/booking.service';
import { AuthService } from './Services/auth.service'
import { GuardAuthService } from './Services/guard-auth.service'
import { HotelServiceService } from './Services/hotel-service.service'
import { BillService } from './Services/bill.service'
import { GuardManagerService } from './Services/guard-manager.service'
import { StaffService } from './Services/staff.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingComponent } from './Reservation/booking/booking.component';
import { RouterModule } from '@angular/router';
import { BookingListComponent } from './Reservation/booking-list/booking-list.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { BookServiceComponent } from './hotel-service/book-service/book-service.component';
import { ServiceListComponent } from './hotel-service/service-list/service-list.component';
import { BillComponent } from './h-bill/bill/bill.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { ManageStaffComponent } from './Manage/Staff/manage-staff/manage-staff.component';
import { StaffFormComponent } from './Manage/Staff/staff-form/staff-form.component';
import { ManageRoomComponent } from './manage/room/manage-room/manage-room.component';
import { RoomFormComponent } from './manage/room/room-form/room-form.component';
import { ManageServiceComponent } from './manage/h-service/manage-service/manage-service.component';
import { ServiceFormComponent } from './manage/h-service/service-form/service-form.component';
import { ReportComponent } from './manage/h-report/report/report.component';
import { BillListComponent } from './h-bill/bill-list/bill-list.component';
import { ServiceTableComponent } from './hotel-service/service-table/service-table.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    BookingListComponent,
    MenuComponent,
    HomeComponent,
    BookServiceComponent,
    ServiceListComponent,
    BillComponent,
    UserInfoComponent,
    ManageStaffComponent,
    StaffFormComponent,
    ManageRoomComponent,
    RoomFormComponent,
    ManageServiceComponent,
    ServiceFormComponent,
    ReportComponent,
    BillListComponent,
    ServiceTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartsModule,
    RouterModule.forRoot([
    { path: '', component: HomeComponent },
    { path: 'booking', component: BookingComponent, canActivate: [GuardAuthService] },
    { path: 'booking/:bId', component: BookingComponent, canActivate: [GuardAuthService] },
    { path: 'list/:status', component: BookingListComponent, canActivate: [GuardAuthService] },
    { path: 'bookService/:tableId', component: BookServiceComponent, canActivate: [GuardAuthService] },
    { path: 'listService', component: ServiceListComponent, canActivate: [GuardAuthService]},
    { path: 'bill', component: BillComponent, canActivate: [GuardAuthService] },
    { path: 'listBill', component: BillListComponent, canActivate: [GuardAuthService]},
    { path: 'user-infor', component: UserInfoComponent, canActivate: [GuardAuthService] },
    { path: 'manage-staff', component: ManageStaffComponent, canActivate: [GuardAuthService] },
    { path: 'manage-staff/add', component: StaffFormComponent, canActivate: [GuardAuthService] },
    { path: 'manage-staff/profile/:staffId', component: StaffFormComponent, canActivate: [GuardAuthService] },
    { path: 'manage-room', component: ManageRoomComponent, canActivate: [GuardAuthService] },
    { path: 'manage-room/add', component: RoomFormComponent, canActivate: [GuardAuthService] },
    { path: 'manage-room/infor/:roomId', component: RoomFormComponent, canActivate: [GuardAuthService] },
    { path: 'manage-service', component: ManageServiceComponent, canActivate: [GuardAuthService] },
    { path: 'manage-service/add', component: ServiceFormComponent, canActivate: [GuardAuthService] },
    { path: 'manage-service/infor/:serviceId', component: ServiceFormComponent, canActivate: [GuardAuthService] },
    { path: 'manage-report', component: ReportComponent, canActivate: [GuardAuthService] },
    { path: 'service-table', component: ServiceTableComponent, canActivate: [GuardAuthService] },

  ]), 
// { relativeLinkResolution: 'legacy' })
  ],
  providers: [
    BookingService,
    AuthService,
    GuardAuthService,
    HotelServiceService,
    BillService,
    GuardManagerService,
    StaffService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
