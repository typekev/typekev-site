import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';
import Form, {
  onSubmit,
  onChange,
  onGetRandomQuestion,
  initialState,
  CHAT_INPUT_ID,
  focusChat,
  submitTranscript,
} from 'routes/Explore/Form';
import { sampleQuestions } from 'hooks/useSocket';

describe('Form component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <Form
          prompts={[]}
          sendMessage={() => {}}
          disabled
          interimTranscript=""
          transcript=""
          startListening={() => {}}
          stopListening={() => {}}
        />
      </Router>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
    ReactDOM.render(
      <Router>
        <Form
          prompts={['Prompt']}
          sendMessage={() => {}}
          interimTranscript=""
          transcript="transcript"
          startListening={() => {}}
          stopListening={() => {}}
          browserSupportsSpeechRecognition
        />
      </Router>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
    ReactDOM.render(
      <Router>
        <Form
          prompts={[]}
          sendMessage={() => {}}
          interimTranscript=""
          transcript="transcript"
          startListening={() => {}}
          stopListening={() => {}}
          listening
          browserSupportsSpeechRecognition
        />
      </Router>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders Form with chatInput', () => {
    const wrapper = mount(
      <Form
        prompts={[]}
        sendMessage={() => {}}
        interimTranscript=""
        transcript="transcript"
        startListening={() => {}}
        stopListening={() => {}}
        listening
        browserSupportsSpeechRecognition
      />,
    );
    const chatInput = wrapper.find(`#${CHAT_INPUT_ID}`).hostNodes();
    expect(chatInput.length).toBe(1);
  });

  it('calls chatInput.focus if conditions are met', () => {
    const chatInput = { focus: jest.fn() };
    expect(!!focusChat('', true, chatInput, false)).toBe(false);
    expect(!!focusChat('test', false, chatInput, true)).toBe(false);
    expect(!!focusChat('', true, chatInput, true)).toBe(false);
    expect(chatInput.focus.mock.calls.length).toBe(0);
    expect(focusChat('test', false, chatInput, false)).toBe(undefined);
    expect(chatInput.focus.mock.calls.length).toBe(1);
  });

  it('calls submit if conditions are met', () => {
    const submit = jest.fn();
    expect(!!submitTranscript('', submit)).toBe(false);
    expect(submit.mock.calls.length).toBe(0);
    expect(submitTranscript('test', submit)).toBe(undefined);
    expect(submit.mock.calls.length).toBe(1);
    expect(typeof submit.mock.calls[0][0].preventDefault).toBe('function');
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
