import React, { useState, useEffect, useRef } from 'react';
import { Button, Text, View, TouchableOpacity, Image, Form } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useForm } from "react-hook-form";

export default function CreateProduct() {
    const [pickedImage, setPickedImage] = useState(null);

    const {
        register,
        handleSubmit,
    } = useForm();

    useEffect(() => {
        // Optional: You can perform additional actions after an image is picked
        if (pickedImage) {
            console.log('Picked image:', pickedImage);
        }
    }, [pickedImage]);

    const pickImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });

            if (!result.cancelled) {
                setPickedImage(result);
            }
        } catch (error) {
            console.log('Error picking image:', error);
        }
    };

    const onSubmit = async (data) => {
        // const image = data.profile[0];
        // console.log('imagee', image);
        // const formData = new FormData();
        // formData.append("file", image);
        // // formData.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME);
        // formData.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME_1);

        // // const productName = productNameRef?.current?.value
        // // const productPrice = productPriceRef?.current?.value
        // // const productCategory = productCategoryRef?.current?.value

        // const obj = {
        //     //     productName,
        //     //     productPrice,
        //     //     productCategory
        // }

        // const uploadResponse = await fetch(
        //     `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        //     {
        //         method: "POST",
        //         body: formData,
        //     }
        // );

        // const uploadedImageData = await uploadResponse.json();
        // const imageUrl = uploadedImageData.secure_url;
        // obj.imgUrl = imageUrl
        // console.log('obj', obj)
        // const resp = await axios.post('/api/createproduct', obj)
        // console.log('resp', resp)
        // // router.replace('/createproduct')


        // console.log('formDataa', formData)
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Form onSubmit={handleSubmit(onSubmit)}><Text>Picked Image URI: {pickedImage ? pickedImage.uri : 'None'}</Text>
                {pickedImage && <Image source={{ uri: pickedImage.uri }} style={{ width: 200, height: 200 }} />}
                <Button title="Pick Image" onPress={pickImage} />
                <Button title="Upload to Cloud" />
                {/* <TouchableOpacity><Text>Upload to Cloud </Text></TouchableOpacity> */}
            </Form>
        </View >
    );
}






// import React, { useState, useEffect, useRef } from 'react';
// import { Button, Text, View, TouchableOpacity } from 'react-native';
// import * as DocumentPicker from 'expo-document-picker';
// import { useForm } from "react-hook-form";
// import { TextInput } from 'react-native-gesture-handler';
// import { GestureHandlerRootView } from 'react-native-gesture-handler'; // Import GestureHandlerRootView


// export default function CreateProduct() {
//     const [pickedDocument, setPickedDocument] = useState(null);

//     const productNameRef = useRef()
//     const productPriceRef = useRef()
//     const productCategoryRef = useRef()

//     const {
//         register,
//         handleSubmit,
//     } = useForm();

//     useEffect(() => {
//         // Optional: You can perform additional actions after a document is picked
//         if (pickedDocument) {
//             console.log('Picked document:', pickedDocument);
//         }
//     }, [pickedDocument]);

//     const pickDocument = async () => {
//         try {
//             const result = await DocumentPicker.getDocumentAsync({
//                 type: '*/*', // You can specify MIME types here, e.g., 'application/pdf', 'image/*', etc.
//                 copyToCacheDirectory: false, // Set to true if you want to copy the file to the app's cache directory
//             });

//             if (result.type === 'success') {
//                 setPickedDocument(result);
//             } else {
//                 console.log('Document picking cancelled');
//             }
//         } catch (error) {
//             console.log('Error picking document:', error);
//         }
//     };

//     const onSubmit = async (data) => {
//         const image = data.profile[0];
//         console.log('imagee', image);
//         const formData = new FormData();
//         formData.append("file", image);
//         // formData.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME);
//         formData.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME_1);

//         // const productName = productNameRef?.current?.value
//         // const productPrice = productPriceRef?.current?.value
//         // const productCategory = productCategoryRef?.current?.value

//         const obj = {
//             //     productName,
//             //     productPrice,
//             //     productCategory
//         }

//         const uploadResponse = await fetch(
//             `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
//             {
//                 method: "POST",
//                 body: formData,
//             }
//         );

//         const uploadedImageData = await uploadResponse.json();
//         const imageUrl = uploadedImageData.secure_url;
//         obj.imgUrl = imageUrl
//         console.log('obj', obj)
//         const resp = await axios.post('/api/createproduct', obj)
//         console.log('resp', resp)
//         // router.replace('/createproduct')


//         console.log('formDataa', formData)

//     };

//     return (
//         // <GestureHandlerRootView>
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             {/* <TextInput placeholder="Enter the product's name" ref={productNameRef} />
//             <TextInput placeholder="Enter the product's price" ref={productPriceRef} />
//             <TextInput placeholder="Enter the product's category" ref={productCategoryRef} /> */}
//             <Text>Picked Document URI: {pickedDocument ? pickedDocument.uri : 'None'}</Text>
//             <Button title="Pick Document" onPress={pickDocument} />
//             <TouchableOpacity onSubmit={handleSubmit(onSubmit)}><Text>Upload to Cloud </Text></TouchableOpacity>
//         </View>
//         // </GestureHandlerRootView>
//     );
// }




// import React from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import * as DocumentPicker from 'expo-document-picker';

// const CreateProduct = () => {
//     const handleFilePick = async () => {
//         try {
//             const res = await DocumentPicker.pick({
//                 type: [DocumentPicker.types.images], // You can specify the type of file you want to pick
//             });
//             console.log('res : ' + JSON.stringify(res));
//         } catch (err) {
//             if (DocumentPicker.isCancel(err)) {
//                 console.log('Canceled');
//             } else {
//                 console.error('Error : ' + err);
//             }
//         }
//     };

//     return (
//         <View>
//             <TouchableOpacity onPress={handleFilePick}>
//                 <Text>Pick a File</Text>
//             </TouchableOpacity>
//         </View>
//     );
// };

// export default CreateProduct;




// import { View, Text, TextInput, TouchableOpacity } from 'react-native'
// import React from 'react'
// import { useForm } from "react-hook-form";

// const CreateProducts = () => {
//     const {
//         register,
//         handleSubmit,
//     } = useForm();

//     return (
//         <View>
//             <Text>CreateProducts</Text>
//             <TextInput
//                 {...register("profile")}
//                 className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
//                 aria-describedby="file_input_help"
//                 id="file_input"
//                 type="file"
//             />
//             <Text
//                 className="mt-1 text-sm text-gray-500 dark:text-gray-300"
//                 id="file_input_help"
//             >
//                 SVG, PNG, JPG or GIF (MAX. 800x400px).
//             </Text>

//             <TouchableOpacity
//                 type="submit"
//                 className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 my-4"
//             >
//                 <Text>Upload to Cloud</Text>
//             </TouchableOpacity>
//         </View>
//     )
// }

// export default CreateProducts