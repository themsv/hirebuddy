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
			act(() => fireEvent.click(item));
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
			act(() => fireEvent.click(item));
			waitFor(() => {
				const popovers = screen.getAllByTestId('pop-over');
				popovers.map((popover) => {
					// console.log(popover);
					act(() => fireEvent.click(popover));
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

	test('it should close SearchInput and execute handler function', () => {
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
		act(() => {
			const input = screen.getByPlaceholderText('Search Date');
			fireEvent.change(input, { target: { value: '09-99-1313' } });
			const button = screen.getAllByTestId('pop-over')[0];
			fireEvent.click(button);
		});
		waitFor(() => {
			expect(screen.getAllByTestId('pop-over')[0]).not.toContainElement(
				screen.getByPlaceholderText('Search Date')
			);
		});
	});

	// test('it should open MenuListItems when button is clicked', () => {
	// 	render(
	// 		<ThemeProvider theme={themeOptions}>
	// 			<BrowserRouter>
	// 				<ListOfInterviews
	// 					candidateDetails={MOCKED_CANDIDATES}
	// 					userDetails={MOCKED_USERS}
	// 				/>
	// 				<Header />
	// 			</BrowserRouter>
	// 		</ThemeProvider>
	// 	);
	// 	const myBtn = screen.getAllByTestId('button');
	// 	console.log(myBtn[6]);
	// 	act(() => userEvent.click(myBtn[6]));
	// 	waitFor(() => {
	// 		const popovers = screen.getAllByTestId('pop-over');
	// 		popovers.map((popover) => {
	// 			act(() => fireEvent.click(popover));
	// 			waitFor(() => {
	// 				const outcome = screen.getByTestId('outcome');
	// 				console.log(outcome.children);
	// 			});
	// 		});
	// 	});
	// });
});
