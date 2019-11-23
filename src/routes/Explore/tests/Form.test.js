import React from 'react';
import ReactDOM from 'react-dom';
import Form, { onSubmit, onChange, onGetRandomQuestion, initialState } from 'routes/Explore/Form';
import { sampleQuestions } from 'hooks/useSocket';

describe('Form component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Form sendMessage={() => {}} disabled />, div);
    ReactDOM.unmountComponentAtNode(div);
    ReactDOM.render(<Form sendMessage={() => {}} disabled={false} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('calls onSubmit and triggers internal functions with correct return values', () => {
    const value = 'Test';
    const preventDefault = jest.fn();

    onSubmit(
      message => expect(message).toBe(value),
      initialValue => expect(initialValue).toBe(initialState.value),
      value,
    )({
      preventDefault,
    });

    expect(preventDefault.mock.calls.length).toBe(1);
  });

  it('calls onChange, triggering setValue which returns event.currentTarget.value', () => {
    const event = { currentTarget: { value: 'Test' } };

    onChange(value => expect(value).toBe(event.currentTarget.value))(event);
  });

  it('calls onGetRandomQuestion and triggers setValue with a string argument', () => {
    const setValue = jest.fn();

    onGetRandomQuestion(setValue)();

    expect(setValue.mock.calls.length).toBe(1);
    expect(sampleQuestions).toContain(setValue.mock.calls[0][0]);
  });
});
