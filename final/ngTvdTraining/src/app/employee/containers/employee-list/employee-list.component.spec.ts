import { EmployeeService } from './../../services/employee.service';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { EmployeeListComponent } from './employee-list.component';
import { FormsModule } from '@angular/forms';
import { EmployeeFilterPipe } from '../../pipes/employee-filter.pipe';
import { LayoutModule } from '../../../layout/layout.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('EmployeeListComponent', () => {
  let fixture: ComponentFixture<EmployeeListComponent>;
  let comp: EmployeeListComponent;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          LayoutModule,
          FormsModule
        ],
        providers: [EmployeeService],
        declarations: [EmployeeListComponent, EmployeeFilterPipe],
        schemas: [NO_ERRORS_SCHEMA]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(
    'should create the app',
    async(() => {
      expect(comp).toBeTruthy();
    })
  );

  it('should render title in a h2 tag',
    async(() => {
      const result = fixture.nativeElement.querySelector('h2').textContent;
      expect(result).toContain('Employees');
    })
  );
});
