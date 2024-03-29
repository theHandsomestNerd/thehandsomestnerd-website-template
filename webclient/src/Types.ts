// import {SanityImageAsset} from "../../src/components/BlockContentTypes";

export type AWBallSectionType = {
    name: string
    contentTitle: string
    contentText: string
    disclaimer: string
    subTitle: string
    theBalls: BallType[]
    imageSrc?: any
    imageSrcAltText: string
}

export type BallType = {
    name: string
    title: string

}