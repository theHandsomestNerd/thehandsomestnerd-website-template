import React from 'react'

export type AppSettingsContextType = {
  newAddBallStepsFlow?: boolean
}

const AppSettingsContext = React.createContext<AppSettingsContextType>({ });

export default AppSettingsContext;
