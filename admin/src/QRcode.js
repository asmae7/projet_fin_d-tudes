import React ,{Box,Typography}from 'react';
import {
   List,
   TextInput,
   SimpleForm,
   Edit,
   Create,
   ReferenceInput,
   SelectInput,
   Datagrid,
   ReferenceField,
   TextField,
   EmailField,
   EditButton,
   required,
   useNotify,
   useRedirect,
   UPDATE,Show,
   SimpleShowLayout
} from 'react-admin';

export const QRList = (props) => (
    <List {...props} title="Les numéros de police">
        <Datagrid bulkActionButtons={false}>
            <TextField source="id" label="id" />
            <TextField source="n_police" label="numéro de police"/>
            <TextField source="n_avenant" label="numéro d'avenant" />
        </Datagrid>
    </List>
);
export const QRshow = (props) => (
    <Show {...props} title="Les numéros de police">
        <SimpleShowLayout>
            <TextField source="id" label="id" />
            <TextField source="n_police" label="numéro de police"/>
            <TextField source="n_avenant" label="numéro d'avenant" />
        </SimpleShowLayout>
    </Show>
);
 export const PostCreate = (props) => {

    return(<Create {...props}  title="ajouter un numéro de police">
        <SimpleForm>
        <TextInput source="N_police" label="numéro de police" validate={required()} />
                <TextInput source="N_avenant" label="numéro d'avenant" validate={required()} />
        </SimpleForm>
    </Create>)
    
    };
