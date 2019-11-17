import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {AddInfoFormComponent} from './add-info-form.component';

describe('AddInfoFormComponent', () => {
    let component: AddInfoFormComponent;
    let fixture: ComponentFixture<AddInfoFormComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AddInfoFormComponent],
            imports: [IonicModule.forRoot()],
        }).compileComponents();

        fixture = TestBed.createComponent(AddInfoFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
