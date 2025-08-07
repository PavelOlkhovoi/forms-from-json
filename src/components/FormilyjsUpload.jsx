import {
  Upload,
  FormItem,
  FormButtonGroup,
  Submit,
  Input,
} from '@formily/antd-v5'
import { createForm } from '@formily/core'
import { FormProvider, createSchemaField } from '@formily/react'
import { Button, List } from 'antd'
import { UploadOutlined } from '@ant-design/icons'

const dataDemo = [
  {
    title: 'quarterly_report.pdf',
  },
  {
    title: 'project_overview.pdf',
  },
  {
    title: 'product_screenshot.png',
  },
];

const CustomList = ({data = dataDemo}) => {
  
  return (
    <List
      style={{ marginLeft: '10px', marginTop: '-7px' }}
      dataSource={data}
      renderItem={item => <List.Item>{item.title}</List.Item>}
    />
  )
}


const NormalUpload = (props) => {
  return (
    <Upload
      {...props}
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      headers={{
        authorization: 'authorization-text',
      }}
    >
      <Button icon={<UploadOutlined />}>Upload files</Button>
    </Upload>
  )
}




const FormilyjsUpload = ({defaultValues = {}, schema = {}}) => {
  const SchemaField = createSchemaField({
    components: {
      FormItem,
      CustomList,
      Input,
    },
  })
  
  const form = createForm({
    initialValues: defaultValues,
  })
  
  // Create a modified schema with dynamic props
  const modifiedSchema = {
    ...schema,
    properties: {
      ...schema.properties,
      dokumenteArray: {
        ...schema.properties?.dokumenteArray,
        'x-component-props': {
          data: defaultValues.dokumenteArray?.map(doc => ({ title: doc })) || []
        }
      }
    }
  }

  return (
    <FormProvider form={form}>
      <SchemaField schema={modifiedSchema} />
      <FormButtonGroup.FormItem>
        <Submit onSubmit={(values) => {
          console.log('xxx Form values:', values)
      }}>
        Submit
      </Submit>
    </FormButtonGroup.FormItem>
  </FormProvider>
)
}

export default FormilyjsUpload
