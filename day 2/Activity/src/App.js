import { Apple} from "lucide-react";
import './Assetcss/css/style.css'
const App = () =>
{
    return (
      <>
      <h1 className="hi">APPLICATION REGISTRATION:</h1>
      <br/>

      <form className="oii">
        <tr>
      <td><Apple className="opop"/></td>
      </tr>
        <tr className="pop">
          <tr className="lp">
          <td><label>Name: </label> </td>
            <td><input type="text" placeholder="Enter Name"></input></td>
          </tr>
          <tr  className="lpm">
          <td><label>Email: </label></td>
           <td><input type="email" placeholder="Enter Email"></input></td>
          </tr>
          <tr  className="lpn">
          <td> <label>Fhone Number:</label></td>
           <td><input type="text" placeholder="Enter Number"></input></td> 
          </tr>
          <tr  className="lpo">
          <td><label>User Name: </label> </td>
            <td><input type="text" placeholder="Enter UName"></input></td>
           
         
          </tr>
          <tr  className="lpp">
          <td> <label>Password:</label> </td>
           <td> <input type="password"  placeholder="Enter password"></input></td>
            </tr>
          </tr>
          <input type="submit"  value="Submit" className="pops"></input>
         
          
      </form>
      </>
       )
}
export default App;
