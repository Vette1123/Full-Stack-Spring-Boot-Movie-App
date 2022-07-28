import {MovieSummary} from './MovieSummary';

export interface MoviePage{
    page: Number;
    results: MovieSummary[];
}
