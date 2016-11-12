import { TestBed } from '@angular/core/testing';
import {SearchPage} from "./search.page";
import {Search} from "../../components/smart/search.component/search.component";

describe('Search', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [SearchPage, Search]
        });
    });
    it ('page init', () => {
        let fixture = TestBed.createComponent(SearchPage);
        expect(fixture.componentInstance instanceof SearchPage).toBe(true, 'should create Search Page');
    });
});
