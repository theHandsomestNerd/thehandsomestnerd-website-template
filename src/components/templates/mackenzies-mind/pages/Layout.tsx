import React, {FunctionComponent} from 'react'
import PageMux from "./PageMux";

export type AppLayoutProps = {}

const Layout: FunctionComponent<AppLayoutProps> = () => {
    return (
        <PageMux/>
    )
}

export default Layout