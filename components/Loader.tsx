import Spinner, {SpinnerPropTypes} from "react-native-loading-spinner-overlay";

export default function LoadingScreen(props: SpinnerPropTypes)
{
    return (
        <Spinner
            animation={'fade'}
            textContent={'Loading... Please wait.'}
            {...props}
        />
    )
}
