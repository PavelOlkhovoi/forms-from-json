import React from 'react'
import {
  Upload,
  FormItem,
  FormLayout,
  FormButtonGroup,
  Submit,
} from '@formily/antd-v5'
import { createForm } from '@formily/core'
import { FormProvider, createSchemaField } from '@formily/react'
import { Button } from 'antd'
import { UploadOutlined, InboxOutlined } from '@ant-design/icons'

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

// const CardUpload = (props) => {
//   return (
//     <Upload
//       {...props}
//       action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
//       listType="picture-card"
//       headers={{
//         authorization: 'authorization-text',
//       }}
//     >
//       <UploadOutlined style={{ fontSize: 20 }} />
//     </Upload>
//   )
// }


const SchemaField = createSchemaField({
  components: {
    NormalUpload,
    FormItem,
  },
})

const form = createForm()

const schema = {
  type: 'object',
  properties: {
    upload: {
      type: 'array',
      title: 'Upload',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'NormalUpload',
    },
    // upload2: {
    //   type: 'array',
    //   title: 'Card upload',
    //   required: true,
    //   'x-decorator': 'FormItem',
    //   'x-component': 'CardUpload',
    // },
  },
}

const FormilyjsUpload = () => (
  <FormProvider form={form}>
    <FormLayout labelCol={6} wrapperCol={10}>
      <SchemaField schema={schema} />
      <FormButtonGroup.FormItem>
        <Submit onSubmit={console.log}>Submit</Submit>
      </FormButtonGroup.FormItem>
    </FormLayout>
  </FormProvider>
)

export default FormilyjsUpload
