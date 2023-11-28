import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewLoginDesginPage } from './new-login-desgin.page';

describe('NewLoginDesginPage', () => {
  let component: NewLoginDesginPage;
  let fixture: ComponentFixture<NewLoginDesginPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewLoginDesginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
