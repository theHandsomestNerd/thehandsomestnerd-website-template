import {FunctionComponent, PropsWithChildren, useContext, useEffect, useState} from 'react'
import {AppSettingsType} from '../ballroomTypes'
import AppSettingsContext from './AppSettingsContext'
import SanityContext from "../../../../common/sanityIo/sanity-context/SanityContext";


export type AppSettingsProviderProps = {
    value?: AppSettingsType
    settings?: AppSettingsType
}

const AppSettingsProvider: FunctionComponent<PropsWithChildren<AppSettingsProviderProps>> = (props: PropsWithChildren<AppSettingsProviderProps>) => {
    const initialState: AppSettingsType = {
        newAddBallStepsFlow: undefined,
    }

    useEffect(() => {
        if (props.settings)
            setAppSettings(props.settings)
    }, [props.settings])

    const [appSettings, setAppSettings] = useState<AppSettingsType>(initialState)

    const sanityContext = useContext(SanityContext)
    const getAppSettings = async () => {
        return props.settings?props.settings: await sanityContext.getAppSettingsFromSanity().then((sanityAppSettings: any) => {
            console.log('the app Settings', sanityAppSettings)
            setAppSettings(sanityAppSettings)
            return sanityAppSettings
        })
    }


    useEffect(() => {
        if(sanityContext.theSanityClient)
        getAppSettings().then()
    }, [sanityContext.theSanityClient])

    return (
        <AppSettingsContext.Provider
            value={{
                ...appSettings,
                ...props.value,
            }}
        >
            {props.children}
        </AppSettingsContext.Provider>
    );
}

export default AppSettingsProvider
