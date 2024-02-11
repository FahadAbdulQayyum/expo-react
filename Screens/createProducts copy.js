import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useForm } from "react-hook-form";

const CreateProducts = () => {
    const {
        register,
        handleSubmit,
    } = useForm();

    return (
        <View>
            <Text>CreateProducts</Text>
            <TextInput
                {...register("profile")}
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="file_input_help"
                id="file_input"
                type="file"
            />
            <Text
                className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                id="file_input_help"
            >
                SVG, PNG, JPG or GIF (MAX. 800x400px).
            </Text>

            <TouchableOpacity
                type="submit"
                className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 my-4"
            >
                <Text>Upload to Cloud</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CreateProducts