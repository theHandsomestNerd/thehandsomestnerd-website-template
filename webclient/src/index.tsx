import ReactDOM from 'react-dom';
import {AppWrapper} from 'the-handsomestnerd-internal'
// import MyPrivateComponent from "./MyPrivateComponent";
import React from 'react'
import notDefault from '../static/not-default-logo.png'

const root = (document.getElementById('root') as HTMLElement)
ReactDOM.render(
                <React.StrictMode><AppWrapper
                    logo={notDefault}
                    react_app_api_url = ""
                    react_app_sanity_projectid = {process.env.REACT_APP_SANITY_PROJECTID??""}
                    react_app_sanity_db = {process.env.REACT_APP_SANITY_DB??""}
                    react_app_sanity_apiversion = {process.env.REACT_APP_SANITY_APIVERSION??""}

                    react_app_sanity_projectid_cocktails = {process.env.REACT_APP_SANITY_PROJECTID_COCKTAILS??""}
                    react_app_sanity_db_cocktails = {process.env.REACT_APP_SANITY_DB_COCKTAILS??""}
                    react_app_sanity_apiversion_cocktails = {process.env.REACT_APP_SANITY_APIVERSION_COCKTAILS??""}

                    react_app_api_key = {process.env.REACT_APP_API_KEY??""}
                    react_app_auth_domain = {process.env.REACT_APP_AUTH_DOMAIN??""}
                    react_app_database_url = {process.env.REACT_APP_DATABASE_URL??""}
                    react_app_project_id = {process.env.REACT_APP_PROJECT_ID??""}
                    react_app_storage_bucket = {process.env.REACT_APP_STORAGE_BUCKET??""}
                    react_app_messaging_sender_id = {process.env.REACT_APP_MESSAGING_SENDER_ID??""}
                    react_app_app_id = {process.env.REACT_APP_APP_ID??""}
                    react_app_firebase_analytics_tracking_id = {process.env.REACT_APP_FIREBASE_ANALYTICS_TRACKING_ID??""}
                    react_app_base_route = {process.env.REACT_APP_BASE_ROUTE??""}
                    react_app_googlemaps_embed_api_key  = {process.env.REACT_APP_GOOGLEMAPS_EMBED_API_KEY??""}
                    react_app_bar_inventory_slug = {process.env.REACT_APP_BAR_INVENTORY_SLUG??""} /></React.StrictMode>, root)