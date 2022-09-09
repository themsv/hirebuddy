import {
	filterCandidates,
	stableSort,
	getComparator,
} from '../../pages/landing/sorting';
import { MOCKED_CANDIDATES, MOCKED_USERS } from './mockData';

test('it should execute the filter candidates correctly', () => {
	expect(filterCandidates(MOCKED_CANDIDATES)).toBeTruthy();
});

test('it should excute sorting function correctly', () => {
	expect(
		stableSort(
			filterCandidates(MOCKED_CANDIDATES),
			getComparator('asc', 'outcome')
		)
	).toBeTruthy();
	expect(
		stableSort(
			filterCandidates(MOCKED_CANDIDATES),
			getComparator('desc', 'outcome')
		)
	).toBeTruthy();
});
