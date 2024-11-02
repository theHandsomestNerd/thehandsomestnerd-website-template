import {FunctionComponent, PropsWithChildren} from 'react'
import FirebaseProvider from "./common/firebase/firebase-context/FirebaseProvider";
import SanityProvider from './common/sanityIo/sanity-context/SanityProvider';
import App from './App';

export interface AppWrapperProps {
    contentAppend: any
    react_app_releaseDate: string
    react_app_api_url: string
    react_app_sanity_projectid: string
    react_app_sanity_db: string
    react_app_sanity_apiversion: string

    react_app_sanity_projectid_cocktails: string
    react_app_sanity_db_cocktails: string
    react_app_sanity_apiversion_cocktails: string

    react_app_api_key: string
    react_app_auth_domain: string
    react_app_database_url: string
    react_app_project_id: string
    react_app_storage_bucket: string
    react_app_messaging_sender_id: string
    react_app_app_id: string
    react_app_firebase_analytics_tracking_id: string
    react_app_base_route: string
    react_app_bar_inventory_slug: string

    react_app_googlemaps_embed_api_key: string
    logo: any
}


const AppWrapper: FunctionComponent<PropsWithChildren<AppWrapperProps>> = (props) => {
    console.log("config The raw environment variables in app wrapper...", process.env, props.logo)
    return (

        <FirebaseProvider>
            <SanityProvider>
                <App
                    logo={props.logo}
                    react_app_api_url=""
                    react_app_sanity_projectid={process.env.REACT_APP_SANITY_PROJECTID ?? props.react_app_sanity_projectid}
                    react_app_sanity_db={process.env.REACT_APP_SANITY_DB ?? props.react_app_sanity_db}
                    react_app_sanity_apiversion={process.env.REACT_APP_SANITY_APIVERSION ?? props.react_app_sanity_apiversion}

                    react_app_sanity_projectid_cocktails={process.env.REACT_APP_SANITY_PROJECTID_COCKTAILS ?? props.react_app_sanity_projectid_cocktails}
                    react_app_sanity_db_cocktails={process.env.REACT_APP_SANITY_DB_COCKTAILS ?? props.react_app_sanity_db_cocktails}
                    react_app_sanity_apiversion_cocktails={process.env.REACT_APP_SANITY_APIVERSION_COCKTAILS ?? props.react_app_sanity_apiversion_cocktails}

                    react_app_api_key={process.env.REACT_APP_API_KEY ?? props.react_app_api_key}
                    react_app_auth_domain={process.env.REACT_APP_AUTH_DOMAIN ?? props.react_app_auth_domain}
                    react_app_database_url={process.env.REACT_APP_DATABASE_URL ?? props.react_app_database_url}
                    react_app_project_id={process.env.REACT_APP_PROJECT_ID ?? props.react_app_project_id}
                    react_app_storage_bucket={process.env.REACT_APP_STORAGE_BUCKET ?? props.react_app_storage_bucket}
                    react_app_messaging_sender_id={process.env.REACT_APP_MESSAGING_SENDER_ID ?? props.react_app_messaging_sender_id}
                    react_app_app_id={process.env.REACT_APP_APP_ID ?? props.react_app_app_id}
                    react_app_firebase_analytics_tracking_id={process.env.REACT_APP_FIREBASE_ANALYTICS_TRACKING_ID ?? props.react_app_firebase_analytics_tracking_id}
                    react_app_base_route={process.env.REACT_APP_BASE_ROUTE ?? props.react_app_base_route}
                    react_app_bar_inventory_slug={process.env.REACT_APP_BAR_INVENTORY_SLUG ?? props.react_app_bar_inventory_slug}
                    react_app_googlemaps_embed_api_key={process.env.REACT_APP_GOOGLEMAPS_EMBED_API_KEY ?? props.react_app_googlemaps_embed_api_key}/>
            </SanityProvider>
        </FirebaseProvider>
    );
}

export default AppWrapper
