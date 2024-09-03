import {Component, HostListener} from '@angular/core';
import {StorageService} from "../../../../auth/services/storage/storage.service";
import {NavigationStart, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-admin-templates',
  templateUrl: './admin-templates.component.html',
  styleUrl: './admin-templates.component.css'
})
export class AdminTemplatesComponent {
  isEmployeLoggedIn: boolean = false;
  isAdminLoggedIn: boolean = false;
  userRole: string | null = null;
  userName: string | null = null;
  isSidebarVisible: boolean = false;
  isLoginPage: boolean = false;
  isMobile: boolean = false;

  constructor(private router: Router, private dialog: MatDialog) {}

  ngOnInit() {
    this.setUserDetails();

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.isEmployeLoggedIn = StorageService.isEmployeLoggedIn();
        this.isAdminLoggedIn = StorageService.isAdminLoggedIn();
        this.isSidebarVisible = this.isAdminLoggedIn || this.isEmployeLoggedIn;
        this.setUserDetails();

        this.isLoginPage = event.url === '/login';
      }
    });
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize.bind(this));
  }

  ngAfterViewInit() {
    this.initSmoothScroll();
  }

  private initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();

        const href = (e.target as HTMLElement).getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }


  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }



  toggleSidebar() {
    if (window.innerWidth <= 768) {
      this.isSidebarVisible = !this.isSidebarVisible;
    }
  }

  setUserDetails() {
    this.userRole = StorageService.getUserRole();
    this.userName = StorageService.getUserName();
    console.log('User Role:', this.userRole);
    console.log('User Name:', this.userName);
  }

  logout() {
    console.log('Logging out...');
    StorageService.logout();
    this.router.navigateByUrl('/login').then(() => {
      console.log('Redirected to login page');
    }).catch(err => {
      console.error('Redirection failed', err);
    });
    this.isEmployeLoggedIn = false;
    this.isAdminLoggedIn = false;
    this.userRole = null;
    this.userName = null;



  }

  checkScreenSize() {
    this.isMobile = window.innerWidth < 768;
  }




}
/* export class AppComponent implements OnInit , AfterViewInit {
  title = 'front-ventes';
  isVendorLoggedIn: boolean = false;
  isAdminLoggedIn: boolean = false;
  userRole: string | null = null;
  userName: string | null = null;
  isSidebarVisible: boolean = false;
  isCollapsed: boolean = true;
  isLoginPage: boolean = false;
  getAttribute: any;

  constructor(private router: Router,
    private dialog: MatDialog
  ) {}


  ngOnInit() {
    this.setUserDetails();

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.isVendorLoggedIn = StorageService.isVendorLoggedIn();
        this.isAdminLoggedIn = StorageService.isAdminLoggedIn();
        this.isSidebarVisible = this.isAdminLoggedIn || this.isVendorLoggedIn;
        this.setUserDetails();

        this.checkScreenSize();
        this.isLoginPage = event.url === '/login';
      }
    });


  // ngOnInit() {


  //   this.setUserDetails();

  //   this.router.events.subscribe(event => {
  //     this.isVendorLoggedIn = StorageService.isVendorLoggedIn();
  //     this.isAdminLoggedIn = StorageService.isAdminLoggedIn();
  //     this.setUserDetails();

  //     this.checkScreenSize();


  //   });

    window.addEventListener('resize', this.checkScreenSize.bind(this));
  }

    ngAfterViewInit() {
    this.initSmoothScroll();
  }

  private initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click',  (e) => {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isSidebarVisible = window.innerWidth > 768;
  }

  toggleSidebar() {
    if (window.innerWidth <= 768) {
      this.isSidebarVisible = !this.isSidebarVisible;
    }
  }
  setUserDetails() {
    this.userRole = StorageService.getUserRole();
    this.userName = StorageService.getUserName();
    console.log('User Role:', this.userRole);
    console.log('User Name:', this.userName);
  }


  logout() {
    StorageService.logout();
   // this.router.navigateByUrl("/");
    this.router.navigateByUrl("/login");
    this.isVendorLoggedIn = false;
    this.isAdminLoggedIn = false;
    this.userRole = null;
    this.userName = null;
  }

  isMobile(): boolean {
    return window.innerWidth <= 768;
  }

  openContactDialog(): void {
    this.dialog.open(ContactUsComponent, {
      width: '400px'
    });
  }

}
 */
