import { render, screen } from '@testing-library/react';
import ListOfInterviews from '../../pages/landing/listofInterviews';
import configureMockStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { themeOptions } from '../../Theming';
import { MOCKED_CANDIDATES, MOCKED_USERS } from './mockData';

const mockStore = configureMockStore();
const mockedStore = mockStore({ candidates: MOCKED_CANDIDATES });
mockedStore.dispatch = jest.fn();

describe('List Of Interviews', () => {
	test('it should render correctly', () => {
		render(
			<ThemeProvider theme={themeOptions}>
				<BrowserRouter>
					<ListOfInterviews
						candidateDetails={MOCKED_CANDIDATES}
						userDetails={MOCKED_USERS}
					/>
				</BrowserRouter>
			</ThemeProvider>
		);
		expect(screen.getByTestId('list-of-interviews')).toBeTruthy();
	});

	test('it should render text correctly', () => {
		render(
			<ThemeProvider theme={themeOptions}>
				<BrowserRouter>
					<ListOfInterviews
						candidateDetails={MOCKED_CANDIDATES}
						userDetails={MOCKED_USERS}
					/>
				</BrowserRouter>
			</ThemeProvider>
		);
		expect(screen.getByTestId('list-of-interviews-text')).toBeInTheDocument();
	});

	test('it should render table correctly', () => {
		render(
			<ThemeProvider theme={themeOptions}>
				<BrowserRouter>
					<ListOfInterviews
						candidateDetails={MOCKED_CANDIDATES}
						userDetails={MOCKED_USERS}
					/>
				</BrowserRouter>
			</ThemeProvider>
		);
		expect(screen.getByTestId('list-of-interviews-table')).toBeTruthy();
	});
});
