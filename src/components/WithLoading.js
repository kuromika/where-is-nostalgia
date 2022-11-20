import Loading from "./Loading"

const WithLoading = (Component) => {

    return function WithLoadingComponent({ isLoading, ...props }) {
        if (isLoading) {
            return <Loading></Loading>
        }
        return <Component {...props}></Component>
    }
}

export default WithLoading;