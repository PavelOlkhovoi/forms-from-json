import Form from '@rjsf/core';
import validator from '@rjsf/validator-ajv8';

const schema = {
  title: 'Test form',
  type: 'string',
};

function App() {

  return (
    <div className="w-full p-4">
        <h1 className="text-3xl text-center">Belis App</h1>
        <Form schema={schema} validator={validator} />
    </div>
  );
}

export default App;
