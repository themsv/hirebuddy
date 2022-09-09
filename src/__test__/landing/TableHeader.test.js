import {
	fireEvent,
	render,
	act,
	screen,
	within,
	waitFor,
} from '@testing-library/react';
import Header from '../../pages/landing/header';
import ListOfInterviews from '../../pages/landing/listofInterviews';
import { HEADERCELLS, COLUMNCELLS } from '../../constants/common';
import configureMockStore from 'redux-mock-store';
import { ThemeProvider } from '@mui/material';
import { themeOptions } from '../../Theming';
import { BrowserRouter } from 'react-router-dom';
import { MOCKED_CANDIDATES, MOCKED_USERS } from './mockData';
import userEvent from '@testing-library/user-event';

const mockStore = configureMockStore();
const mockedStore = mockStore({ candidates: MOCKED_CANDIDATES });
mockedStore.dispatch = jest.fn();
// const listofInterviews = jest.mock('../../pages/landing/listofInterviews');

describe('Table Header', () => {
	test('it should render correctly', () => {
		render(
			<ThemeProvider theme={themeOptions}>
				<BrowserRouter>
					<Header />
				</BrowserRouter>
			</ThemeProvider>
		);
		expect(screen.getByTestId('table-header')).toBeTruthy();
	});

	test('it should render primary headers correctly', () => {
		render(
			<ThemeProvider theme={themeOptions}>
				<BrowserRouter>
					<Header />
				</BrowserRouter>
			</ThemeProvider>
		);
		const Primaryheaders = screen.getByTestId('table-header-row-primary');
		expect(Primaryheaders.childElementCount).toEqual(HEADERCELLS.length);
	});

	test('it should render secondary headers correctly', () => {
		render(
			<ThemeProvider theme={themeOptions}>
				<BrowserRouter>
					<Header />
				</BrowserRouter>
			</ThemeProvider>
		);
		const Secondaryheaders = screen.getByTestId('table-header-row-secondary');
		// console.log(Secondaryheaders.accessKeyLabel);
		expect(Secondaryheaders.childElementCount).toEqual(COLUMNCELLS.length);
	});

	test('it should open popover when button is clicked', () => {
		render(
			<ThemeProvider theme={themeOptions}>
				<BrowserRouter>
					<Header />
				</BrowserRouter>
			</ThemeProvider>
		);
		const myBtn = screen.getAllByTestId('button');
		myBtn.map((item) => {
			act(() => userEvent.click(item));
			waitFor(() => expect(screen.getAllByTestId('pop-over')).toBeTruthy());
		});
	});

	test('it should close popover when button is clicked', () => {
		render(
			<ThemeProvider theme={themeOptions}>
				<BrowserRouter>
					<Header />
				</BrowserRouter>
			</ThemeProvider>
		);
		const myBtn = screen.getAllByTestId('button');
		myBtn.map((item) => {
			act(() => userEvent.click(item));
			waitFor(() => {
				const popovers = screen.getAllByTestId('pop-over');
				popovers.map((popover) => {
					// console.log(popover);
					act(() => userEvent.click(popover));
					waitFor(() => expect(popover).toBeFalsy());
				});
			});
		});
	});

	test('it should open SearchInput when button is clicked', () => {
		render(
			<ThemeProvider theme={themeOptions}>
				<BrowserRouter>
					<ListOfInterviews
						candidateDetails={MOCKED_CANDIDATES}
						userDetails={MOCKED_USERS}
					/>
					<Header />
				</BrowserRouter>
			</ThemeProvider>
		);
		const myBtn = screen.getAllByTestId('button');
		act(() => userEvent.click(myBtn[0]));
		waitFor(() => {
			expect(myBtn[0]).toContainElement(
				screen.getByPlaceholderText('Search Date')
			);
		});
	});

	test('it should execute Search handler function', () => {
		render(
			<ThemeProvider theme={themeOptions}>
				<BrowserRouter>
					<ListOfInterviews
						candidateDetails={MOCKED_CANDIDATES}
						userDetails={MOCKED_USERS}
					/>
					<Header />
				</BrowserRouter>
			</ThemeProvider>
		);
		const myBtn = screen.getAllByTestId('button');

		act(() => userEvent.click(myBtn[0]));
		waitFor(() => {
			const input = screen.getByPlaceholderText('Search Date');
			const value = fireEvent.change(input, {
				target: { value: '09-99-1313' },
			});
			// console.log({listofInterviews});
			expect(
				<ListOfInterviews
					candidateDetails={MOCKED_CANDIDATES}
					userDetails={MOCKED_USERS}
				/>
			).toBeCalledWith({
				onRequestSearch: value,
			});
		});
	});

	test('it should execute OutcomeFilter function ', () => {
		render(
			<ThemeProvider theme={themeOptions}>
				<BrowserRouter>
					<ListOfInterviews
						candidateDetails={MOCKED_CANDIDATES}
						userDetails={MOCKED_USERS}
					/>
					<Header />
				</BrowserRouter>
			</ThemeProvider>
		);
		const myBtn = screen.getAllByTestId('button');
		act(() => userEvent.click(myBtn[6]));
		// console.log(myBtn[6].children);
		waitFor(() => {
			const list = screen.getAllByRole('menuitem');
			const selectedItem = list[0].id;

			act(() => userEvent.click(selectedItem));
			waitFor(() => {
				expect(
					<ListOfInterviews
						candidateDetails={MOCKED_CANDIDATES}
						userDetails={MOCKED_USERS}
					/>
				).toBeCalledWith({
					onRequestOutcome: userEvent.click(selectedItem),
				});
				expect({ selectedItem }).toBeInTheDocument();
			});
		});
	});

	test('it should execute Career Applied Filter function', () => {
		render(
			<ThemeProvider theme={themeOptions}>
				<BrowserRouter>
					<ListOfInterviews
						candidateDetails={MOCKED_CANDIDATES}
						userDetails={MOCKED_USERS}
					/>
					<Header />
				</BrowserRouter>
			</ThemeProvider>
		);
		const myBtn = screen.getAllByTestId('button');
		act(() => userEvent.click(myBtn[5]));
		waitFor(() => {
			const list = screen.getAllByRole('checkbox');
			const selectedItem = list[0].id;
			// console.log(list[0]);
			act(() => userEvent.change(selectedItem));
			waitFor(() => {
				expect(
					<ListOfInterviews
						candidateDetails={MOCKED_CANDIDATES}
						userDetails={MOCKED_USERS}
					/>
				).toBeCalledWith({
					onRequestCareerApplied: userEvent.change(selectedItem),
				});
				expect({ selectedItem }).toBeInTheDocument();
			});
		});
	});

	test('it should execute Career Selected Filter function', () => {
		render(
			<ThemeProvider theme={themeOptions}>
				<BrowserRouter>
					<ListOfInterviews
						candidateDetails={MOCKED_CANDIDATES}
						userDetails={MOCKED_USERS}
					/>
					<Header />
				</BrowserRouter>
			</ThemeProvider>
		);
		const myBtn = screen.getAllByTestId('button');
		// console.log(myBtn);
		act(() => userEvent.click(myBtn[7]));
		waitFor(() => {
			const list = screen.getAllByRole('checkbox');
			const selectedItem = list[2].id;
			// console.log(list[0]);
			act(() => userEvent.change(selectedItem));
			waitFor(() => {
				expect(
					<ListOfInterviews
						candidateDetails={MOCKED_CANDIDATES}
						userDetails={MOCKED_USERS}
					/>
				).toBeCalledWith({
					onRequestCareerSelected: userEvent.change(selectedItem),
				});
				expect({ selectedItem }).toBeInTheDocument();
			});
		});
	});
});
