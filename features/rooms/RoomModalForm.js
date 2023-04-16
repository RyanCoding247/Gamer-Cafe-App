import { Formik } from "formik";
import { Button, Input, View } from 'react-native';

export const RoomModalForm = props => (
    <Formik
        initialValues={{ email: '' }}
        onSubmit={values => console.log(values)}
    >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View style={{ marginTop: 50 }}>
                <Input
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                />
                <Button onPress={handleSubmit} title="Submit" />
            </View>
        )}
    </Formik>
);

export default RoomModalForm;