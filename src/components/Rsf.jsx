import Form from '@rjsf/core';
import validator from '@rjsf/validator-ajv8';

const schema = {
  title: 'Test form',
  type: 'object',
  properties: {
    name: {
      type: 'string',
    },
    age: {
      type: 'number',
    },
  },
};

const uiSchema = {
  name: {
    'ui:classNames': 'p-4',
  },
  age: {
    'ui:classNames': 'custom-class-age',
  },
};

const formData = {
  name: 'John Doe',
  age: 30,
};

const onSubmit = ({ formData }, e) => console.log('Data submitted: ', formData);

const Rsf = () => {
  return (
<div className="w-full p-4">
        <h1 className="text-3xl text-center">Belis App</h1>
        <Form schema={schema} validator={validator} onSubmit={onSubmit} uiSchema={uiSchema} formData={formData} />
    </div>
  )
}

export default Rsf
