import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';
import App from '../App';

describe('App', () => {
  let asFragment: any;

  beforeEach(() => {
    const component = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    asFragment = component.asFragment;
  });

  it('renders correctly', () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
