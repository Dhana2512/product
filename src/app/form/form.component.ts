import { Component, OnInit } from '@angular/core';
import { FormService } from '../form-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import {CreateUser} from '../user-interface/user-interface'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  data = {
    name: '',
    image: '',
    price: '',
    availstatus: '',
    description: '',
  }
  id;

  constructor(
    private formService: FormService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.id = id;
    if (id) this.getParticularUser(id);
  }
  

  //createUser
  async create() {
    try {
      if (!this.id) {
        await this.formService.create(this.data);
        this.router.navigate(['/table']);
        return;
      }
      await this.formService.update(this.data);
      this.router.navigate(['/table']);
    }
    catch (error) {
      console.error(error);
    }
  }

  async getParticularUser(id):Promise<void> {
    try {
      const result: any = await this.formService.getParticularUser(id);
      this.data = result;
    }
    catch (error) {
      console.error(error);
    }
  }

}
