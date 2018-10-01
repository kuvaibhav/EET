import { HttpRequest } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Tab4Service } from './tab4.service';
import { CityModel } from './reactive-form/city.model';

describe('Tab4 Service', () => {

  const city = [
    {
      'id': '1',
      'name': 'Mumbai',
      'state': 'Maharashtra'
    },
    {
      'id': '2',
      'name': 'Delhi',
      'state': 'Delhi'
    },
    {
      'id': '3',
      'name': 'Bengaluru',
      'state': 'Karnataka'
    }
  ];

  let httpMock: HttpTestingController;
  let service: Tab4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [Tab4Service]
    });

    service = TestBed.get(Tab4Service);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should fetch the list of cities', () => {
    let actualResponse = null;

    service.fetchCities().subscribe((response) =>
    actualResponse = response);
    const expected = [city];

    httpMock.expectOne((req: HttpRequest<CityModel[]>) => {
      const matchUrl = req.url === 'rest/tab4/fetchCities';
      // const matchParams = req.params.get('contractPriceProfileSeq') === abc;
      // return matchUrl && matchParams;
      return matchUrl;
    }).flush(expected);

    expect(actualResponse).toEqual(expected);
  });

  it('should save personal information', () => {
    let actualResponse = null;
    const expected = '';
    service.savePersonalInfo('information')
      .subscribe((res) => {
        actualResponse = res;
      });

    httpMock.expectOne((req: HttpRequest<any>) => {
      const matchUrl = req.url === 'rest/tab4/savePersonalInfo';
      return matchUrl;
    }).flush(expected);

    expect(actualResponse).toEqual(expected);
  });
});
