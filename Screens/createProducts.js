import React, { useState, useEffect, useRef } from 'react';
import { Button, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios'; // Import axios for making HTTP requests
import { EXPO_CLOUDINARY_API_KEY, EXPO_CLOUDINARY_CLOUD_NAME, EXPO_CLOUDINARY_PRESET_NAME_1 } from '../constants';

export default function CreateProduct() {
    const [pickedImage, setPickedImage] = useState(null);
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productCategory, setProductCategory] = useState('');

    // let obj = {
    const obj = {
        productName,
        productPrice,
        productCategory
    }

    useEffect(() => {
        // Request permission to access the image library
        (async () => {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        })();
    }, []);

    const pickImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });

            // console.log('result', result)
            console.log('result', result['assets'][0])
            // console.log("result['assets'][0].uri", result["assets"][0].uri)

            if (!result.cancelled) {
                // setPickedImage(result);
                setPickedImage(result["assets"][0]);
                // setPickedImage(result["assets"][0].uri);
            }
        } catch (error) {
            console.log('Error picking image:', error);
        }
    };

    const uploadToCloud = async () => {
        if (!pickedImage) {
            alert('Please pick an image first.');
            return;
        }

        // Create a FormData object to send the image
        const formData = new FormData();
        formData.append("file", {
            // uri: pickedImage.uri,
            uri: pickedImage.uri,
            type: 'image/jpeg',
            // type: 'image/*',
            name: 'image.jpg',
        });
        // formData.append("file", pickedImage);
        formData.append("upload_preset", EXPO_CLOUDINARY_PRESET_NAME_1);


        console.log('EXPO_CLOUDINARY_API_KEY', EXPO_CLOUDINARY_API_KEY, formData)

        try {
            // Send the image to Cloudinary
            const response = await fetch(
                `https://api.cloudinary.com/v1_1/${EXPO_CLOUDINARY_CLOUD_NAME}/image/upload`,
                {
                    method: "POST",
                    body: formData,
                }
            );

            console.log('response.ok:', response.ok);
            console.log('response:', response);

            if (!response.ok) {
                throw new Error('Upload failed');
            }

            const responseData = await response.json();
            const imgUrl = responseData.secure_url;
            console.log('Uploaded image URL:', imgUrl);
            // obj.imageUrl = imageUrl
            obj.imgUrl = imgUrl
            // obj = { ...obj, imageUrl }
            console.log('Objj:', obj);
            const resp = await axios.post('https://hackathon-seven-sandy.vercel.app/api/createproduct', obj)
            console.log('resp', resp)

            // Now you can do whatever you want with the image URL, like saving it in state or sending it to your backend
        } catch (error) {
            console.log('Error uploading image:', error);
        }
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {/* <TextInput placeholder='Product Name' onChangeText={e => setProductName(e)} ref={productNameRef} /> */}
            <TextInput placeholder='Product Name' onChangeText={e => setProductName(e)} />
            <TextInput placeholder='Product Price' onChangeText={e => setProductPrice(e)} />
            <TextInput placeholder='Product Category' onChangeText={e => setProductCategory(e)} />
            <Text>Picked Image URI: {pickedImage ? pickedImage.uri : 'None'}</Text>
            {pickedImage && <Image source={{ uri: pickedImage.uri }} style={{ width: 200, height: 200 }} />}
            <Button title="Pick Image" onPress={pickImage} />
            <Button title="Upload to Cloud" onPress={uploadToCloud} />
        </View>
    );
}
