import Formilyjs from "./components/Formilyjs";
import FormilyjsTable from "./components/FormilyjsTable";
import FormilyjsUpload from "./components/FormilyjsUpload";
import Rsf from "./components/Rsf";
import { defaultValuesMast } from "./data/dataExample";
import { schemaMass } from "./helpers/schemas";
  

function App() {

  return (
   // <Rsf />
<>
{/* <Formilyjs /> */}
<br />
<hr />
<br />
{/* <FormilyjsTable /> */}
<br />
<hr />
<br />
<FormilyjsUpload defaultValues={defaultValuesMast} schema={schemaMass}/>
</>
  );
}

export default App;
