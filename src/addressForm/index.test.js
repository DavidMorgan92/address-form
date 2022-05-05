import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import AddressForm from '.';
import AddressFormFixed from './addressFormFixed';

describe('AddressForm component', () => {
	it('calls onSubmit prop when submit is clicked', async () => {
		// Mock submit function
		const handleSubmit = jest.fn();
		const handleCancel = jest.fn();

		// Render component
		render(
			<AddressForm onSubmit={handleSubmit} onCancel={handleCancel} />,
		);

		// Input values into the form
		fireEvent.change(screen.getByLabelText('House name/number'), {
			target: { value: 'Pendennis' },
		});
		fireEvent.change(screen.getByLabelText('Street name'), {
			target: { value: 'Tredegar Road' },
		});
		fireEvent.change(screen.getByLabelText('Town/city name'), {
			target: { value: 'Ebbw Vale' },
		});
		fireEvent.change(screen.getByLabelText('Post code'), {
			target: { value: 'NP23 6LP' },
		});

		// Click the submit button
		fireEvent.click(screen.getByDisplayValue('Submit'));

		// Wait for submit event to complete
		await waitFor(() => {
			// Expect handleSubmit to have been called once
			expect(handleSubmit).toHaveBeenCalledTimes(1);

			// Expect handleSubmit to have been passed the form's values
			expect(handleSubmit).toHaveBeenCalledWith({
				houseNameNumber: 'Pendennis',
				streetName: 'Tredegar Road',
				townCityName: 'Ebbw Vale',
				postCode: 'NP23 6LP',
			});

			expect(handleCancel).not.toHaveBeenCalled();
		});
	});

	it('calls onSubmit prop when submit is clicked', async () => {
		// Mock submit function
		const handleSubmit = jest.fn();
		const handleCancel = jest.fn();

		// Render component
		render(
			<AddressFormFixed onSubmit={handleSubmit} onCancel={handleCancel} />,
		);

		// Input values into the form
		fireEvent.change(screen.getByLabelText('House name/number'), {
			target: { value: 'Pendennis' },
		});
		fireEvent.change(screen.getByLabelText('Street name'), {
			target: { value: 'Tredegar Road' },
		});
		fireEvent.change(screen.getByLabelText('Town/city name'), {
			target: { value: 'Ebbw Vale' },
		});
		fireEvent.change(screen.getByLabelText('Post code'), {
			target: { value: 'NP23 6LP' },
		});

		// Click the submit button
		fireEvent.click(screen.getByDisplayValue('Submit'));

		// Wait for submit event to complete
		await waitFor(() => {
			// Expect handleSubmit to have been called once
			expect(handleSubmit).toHaveBeenCalledTimes(1);

			// Expect handleSubmit to have been passed the form's values
			expect(handleSubmit).toHaveBeenCalledWith({
				houseNameNumber: 'Pendennis',
				streetName: 'Tredegar Road',
				townCityName: 'Ebbw Vale',
				postCode: 'NP23 6LP',
			});

			expect(handleCancel).not.toHaveBeenCalled();
		});
	});
});
