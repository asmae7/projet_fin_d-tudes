import React from 'react';
import { Admin,Resource,ListGuesser, getListControllerProps, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { PostList } from './ListLocation';
import  {ImageList} from './ListImages';
import { VehiculeList } from './ListVehicule';
import { QRList,PostCreate,QRshow } from './QRcode';
import authProvider from './providers/authProvider';
import Notfound from './Notfound';
import Details from '@mui/icons-material/Details';
import QrCode from '@mui/icons-material/QrCode';
import Image from '@mui/icons-material/Image';
import LocationSearching from '@mui/icons-material/LocationSearching';

const theme = {
    palette: {
        type: 'light', // Switching the dark mode on is a single property value change.
    },
};
//connect the data provider to the REST endpoint
const dataProvider = jsonServerProvider('http://localhost:3001');

function App() {
 return (
      <Admin catchAll={Notfound} title="Plate-forme d'administration" dataProvider={dataProvider} authProvider={authProvider} requireAuth >
<Resource name='localisation' list={PostList} icon={LocationSearching}/>
<Resource name='images' list={ImageList} icon={Image} />
<Resource name='vehicule_data' list={ VehiculeList} icon={Details}/>
<Resource name='Qr_Code_Content' label="Contenu du QrCode" show={QRshow} list={QRList} create={PostCreate} icon={QrCode} />
       </Admin>
 );
}
export default App;