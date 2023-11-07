import {Airplay,ActivitySquare,Pause,PauseOctagon,PlaySquare,Podcast,HeartOff,RadioTower
,Projector,Apple,Router,ScreenShareOff,Phone,PhoneIncoming,PhoneOutgoing,PhoneMissed} from 'lucide-react';
const App2=()=>
{
    return(
        <>
        <h1 className="h11">ICONS MATRIX</h1>
      
        <table cellPadding={10} border={2} className="tab">
          
            <tr className="pop">
         <td><Apple /></td>
         <td><Podcast /></td>
         <td><HeartOff /></td>
         <td><RadioTower /></td>
            </tr>
           
            
            <tr className="pop1">
                <td><Pause /></td>
                <td><ActivitySquare /></td>
                <td><PauseOctagon /></td>
                <td><PlaySquare /></td>
            </tr>
           
           
            <tr className="pop2">
                <td><Projector /></td>
                <td><Airplay /></td>
                <td><Router /></td>
                <td><ScreenShareOff /></td>
            </tr>
            
         
            <tr className="pop3">
                <td><Phone /></td>
                <td><PhoneIncoming /></td>
                <td><PhoneOutgoing /></td>
                <td><PhoneMissed /></td>
            </tr>
            
        </table>
       
        </>
    )
}
export default App2;