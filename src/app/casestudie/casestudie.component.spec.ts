import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasestudieComponent } from './casestudie.component';

describe('CasestudieComponent', () => {
  let component: CasestudieComponent;
  let fixture: ComponentFixture<CasestudieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasestudieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasestudieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
