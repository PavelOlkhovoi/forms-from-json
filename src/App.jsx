import Formilyjs from "./components/Formilyjs";
import FormilyjsTable from "./components/FormilyjsTable";
import FormJsonBuilder from "./components/FormJsonBuilder";
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
<FormJsonBuilder defaultValues={defaultValuesMast} schema={schemaMassWithProps(defaultValuesMast.dokumenteArray)}/>
<FormJsonBuilder defaultValues={takeInitialTableValue} schema={schemaTable}/>
</>
  );
}

export default App;
