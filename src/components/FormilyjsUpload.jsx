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

const CustomList = (props) => {
  const data = [
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
  return (
    <List
      {...props}
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


const SchemaField = createSchemaField({
  components: {
    FormItem,
    CustomList,
    Input,
  },
})

const form = createForm()

const schema = {
  type: 'object',
  properties: {
    masttyp: {
      type: 'number',
      title: 'Masstyp',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    bezeichnung: {
      type: 'string',
      title: 'Bezeichnung',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    hersteller: {
      type: 'string',
      title: 'Hersteller',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    wandstaerke: {
      type: 'number',
      title: 'Wandstärke (in mm)',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    lph: {
      type: 'number',
      title: 'LPH (Lichtpunkthöhe in Meter)',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    customList: {
      type: 'void',
      title: 'Dokumente',
      'x-decorator': 'FormItem',
      'x-component': 'CustomList',
    },
  },
}

const FormilyjsUpload = () => (
  <FormProvider form={form}>
    <SchemaField schema={schema} />
    <FormButtonGroup.FormItem>
      <Submit onSubmit={(values) => {
        console.log('xxx Form values:', values)
      }}>
        Submit
      </Submit>
    </FormButtonGroup.FormItem>
  </FormProvider>
)

export default FormilyjsUpload
