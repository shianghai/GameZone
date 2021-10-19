import React, { useState } from 'react'
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Modal, TextInput, Button} from 'react-native'
import {globalStyles } from '../global/styles'
import {Formik} from 'formik'
import * as yup from 'yup' 
import FlatButton from '../shared/button'


export default function ReviewForm({addReview}){

    const reviewFormSchema  = yup.object({
        title: yup.string()
        .required()
        .min(3),

        body: yup.string()
        .min(4)
        .required(),
        
        rating: yup.string()
        .required()
        .test('is-num-1-5', 
              'Rating must be a number 1-5', 
              (val) => {
                return parseInt(val) < 6 && parseInt(val) > 0
        })

    })
 

    return(
        <View style = {globalStyles.container}>
            <Formik 
                initialValues = {{title: '', body: '', rating: ''}}
                validationSchema = {reviewFormSchema}
                onSubmit = {(values, actions) =>{
                    addReview(values)
                    actions.resetForm()
                }}
            >
                {({handleSubmit, values, handleChange, errors, touched, handleBlur}) => {
                    return(
                    <View>
                        
                        <TextInput 
                            placeholder = 'Review Title'
                            style = {globalStyles.input}
                            onChangeText = {handleChange('title')}
                            value = {values.title}
                            onBlur = {handleBlur('title')}

                        />
                        <Text style = {globalStyles.errorText}>{touched.title && errors.title}</Text>

                        <TextInput 
                            minHeight = {80}
                            multiline
                            placeholder = 'Review Body'
                            style = {globalStyles.input}
                            onChangeText = {handleChange('body')}
                            value = {values.body}
                            onBlur = {handleBlur('body')}
                            
                        />
                        <Text style = {globalStyles.errorText}>{touched.body && errors.body}</Text>

                        <TextInput 
                            placeholder = 'Review Rating (1-5)'
                            style = {globalStyles.input}
                            onChangeText = {handleChange('rating')}
                            value = {values.rating}
                            keyboardType = 'numeric'
                            onBlur = {handleBlur('rating')}
                            
                        />
                        <Text style = {globalStyles.errorText}>{touched.rating && errors.rating}</Text>
                        
                        <FlatButton text = 'submit' onPress = {handleSubmit} />
                        
                    </View>)
                }}
            </Formik>
        </View>
    )
}