import React, { useState } from 'react';
import {  Text,StyleSheet, ActivityIndicator } from 'react-native';

const Loading = ({isLoading}) => {
    return isLoading ? (
        <ActivityIndicator
            color="red"
            size={80}
            style={{margin:40}}
        />
    ) : null;
};

export default Loading;
