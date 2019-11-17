import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {KangooNetPage} from './kangoo-net.page';

describe('KangooNetPage', () => {
    let component: KangooNetPage;
    let fixture: ComponentFixture<KangooNetPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [KangooNetPage],
            imports: [IonicModule.forRoot()],
        }).compileComponents();

        fixture = TestBed.createComponent(KangooNetPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
