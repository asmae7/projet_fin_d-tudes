import { List, Datagrid, TextField, ReferenceField} from 'react-admin';

export const PostList = () => (
    <List>
        <Datagrid bulkActionButtons={false}>
            <TextField source="id" />
            <TextField source="longitude" />
            <TextField source="latitude" />
            <ReferenceField source="id_vehicule" reference="vehicule_data"><TextField source="id" /></ReferenceField>
            <ReferenceField source="id_image" reference="images"><TextField source="id" /></ReferenceField>
        </Datagrid>
    </List>
);
