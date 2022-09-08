import { render, screen, act, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../store/store';
import configureMockStore from 'redux-mock-store';
import { ThemeProvider } from '@mui/material';
import { themeOptions } from '../../Theming';
import LandingPage from '../../pages/landing/index';
import { MOCKED_CANDIDATES } from './mockData';
import axios from 'axios';
import { fetchCandidates } from '../../store/candidate/candidate.action';

const mockStore = configureMockStore();
const mockedStore = mockStore({ candidates: MOCKED_CANDIDATES });
mockedStore.dispatch = jest.fn();

jest.mock('axios');

describe('Landing Page', () => {
	test('it should render correctly', () => {
		const mockedAxios = axios;
		let res = { data: MOCKED_CANDIDATES };
		mockedAxios.get.mockReturnValueOnce(res);
		render(
			<ThemeProvider theme={themeOptions}>
				<BrowserRouter>
					<Provider store={store}>
						<LandingPage />
					</Provider>
				</BrowserRouter>
			</ThemeProvider>
		);
		expect(screen.getByTestId('landing')).toBeTruthy();
	});

	test('it should dispatch action and get data for candidates', async () => {
		const mockedAxios = axios;
		let res = { data: MOCKED_CANDIDATES };
		mockedAxios.get.mockReturnValueOnce(res);
		render(
			<ThemeProvider theme={themeOptions}>
				<BrowserRouter>
					<Provider store={store}>
						<LandingPage />
					</Provider>
				</BrowserRouter>
			</ThemeProvider>
		);
		await act(async () => {
			await fetchCandidates();
		});
		await waitFor(() => {
			expect(axios.get).toHaveBeenCalled();
		});
	});
});
