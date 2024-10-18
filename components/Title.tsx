import {Text, View} from "react-native";

export default function Title({title}: {title: string})
{
    return (
        <View>
            <Text className="text-white font-pextrabold text-3xl">
                { title }
            </Text>
        </View>
    )
}
