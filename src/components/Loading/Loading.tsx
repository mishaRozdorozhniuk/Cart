import React, {FC} from 'react';
import styled, { keyframes } from 'styled-components';

const spinner = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
}`

export const LoadingSpinner = styled.div`
    width: 50px;
    height: 50px;
    border: 10px solid #f3f3f3;
    border-top: 10px solid #383636;
    border-radius: 50%;
    animation: ${spinner} 1.5s linear infinite;
;`

export const SpinnerContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
;`


// Create loader to show while fetching posts, but also can be reusable
const Loading:FC = () => {
    return (
        <div>
            <SpinnerContainer>
                <LoadingSpinner></LoadingSpinner>
            </SpinnerContainer>
        </div>
    );
};

export default Loading;