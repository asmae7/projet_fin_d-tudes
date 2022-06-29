import { List, Datagrid,ImageField, TextField, DateField,ReferenceField, useSafeSetState } from 'react-admin';
import axios from 'axios';
import React,{useState} from 'react';
import data from './data';
export const ImageList = () => {
    //console.log(ImageField.apply((source):'data:image/png;base64'))
   return (
    <div>
       
          <List>
        <Datagrid bulkActionButtons={false}>
            <TextField source="id" />
            <TextField source="extention" />
            <ImageField source="base64" />
            <DateField source="upload_date" label="date de prise" />
            <TextField source="name_file" label="nom de fichier" />
            <ReferenceField source="id_vehicule" reference="vehicule_data"><TextField source="id" /></ReferenceField>
        </Datagrid>
    </List>
    </div>
  
   )
};
