import {ActivityIndicator, Text, TouchableOpacity} from "react-native";

interface Props {
    title: string,
    handlePress: () => void,
    containerStyles: string,
    textStyles: string,
    isLoading: boolean,
}

const CustomButton = (props: Props) => {
    return (
        <TouchableOpacity
            onPress={props?.handlePress}
            activeOpacity={0.7}
            className={`bg-secondary rounded-xl min-h-[62px] flex flex-row justify-center items-center ${props?.containerStyles} ${
                props?.isLoading ? "opacity-50" : ""
            }`}
            disabled={props?.isLoading}
        >
            <Text className={`text-primary font-psemibold text-lg ${props?.textStyles}`}>
                {props?.title}
            </Text>

            {props?.isLoading && (
                <ActivityIndicator
                    animating={props?.isLoading}
                    color="#fff"
                    size="small"
                    className="ml-2"
                />
            )}
        </TouchableOpacity>
    );
};

export default CustomButton;
