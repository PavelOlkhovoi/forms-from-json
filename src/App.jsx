import Formilyjs from "./components/Formilyjs";
import FormilyjsTable from "./components/FormilyjsTable";
import FormilyjsUpload from "./components/FormilyjsUpload";
import Rsf from "./components/Rsf";
import { defaultValuesMast, infobaustein_template } from "./data/dataExample";
import { generateDefaultTableData } from "./helpers/dataHelper";
import { schemaMass, schemaMassWithProps, schemaTable } from "./helpers/schemas";
  

function App() {
const takeInitialTableValue = generateDefaultTableData(infobaustein_template.data.infobaustein_template[0])
  return (
   // <Rsf />
<>
{/* <Formilyjs /> */}
{/* <br />
<hr />
<br /> */}
{/* <FormilyjsTable /> */}
{/* <br />
<hr />
<br /> */}
<FormilyjsUpload defaultValues={defaultValuesMast} schema={schemaMassWithProps(defaultValuesMast.dokumenteArray)}/>
<FormilyjsUpload defaultValues={takeInitialTableValue} schema={schemaTable}/>
</>
  );
}

export default App;
