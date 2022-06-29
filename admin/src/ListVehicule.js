import { List, Datagrid, TextField, DateField, ReferenceField } from 'react-admin';

export const VehiculeList = () => (
    <List title="Infomations de véhicule">
        <Datagrid bulkActionButtons={false}>
            <TextField source="id" label="id" />
            <DateField source="date" label="date de consultation" />
            <ReferenceField source="id_police" reference="Qr_Code_Content"><TextField source="id" /></ReferenceField>
        </Datagrid>
    </List>
);