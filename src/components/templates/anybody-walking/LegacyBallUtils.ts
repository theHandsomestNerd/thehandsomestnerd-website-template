import {BallTypeEnum} from './enums/BallType.enum'
import {AddBallState, Category, FirebaseBallType, OldBallType, SanityBallType} from './ballroomTypes'
import {combineDateAndTime, getDateInputValue} from './HTMLUtils'
import {v4 as uuidv4} from 'uuid'
import {SanityRef} from "../../BlockContentTypes";


export const convertToCurrent = (rhs: any) => {
    let convertedBall: FirebaseBallType = {...rhs}

    if (rhs && rhs.Draft === 0) {
        const oldBall: OldBallType = {...rhs}

        const {
            Timestamp,
            ballTitle,
            ballType,
            approval,
            description,
            endTime,
            host,
            miniGrandPrize,
            region,
            source,
            startDate,
            startTime,
            website,
            grandprize,
            uid,
        } = oldBall

        convertedBall = {
            Timestamp,
            approval,
            ballTitle,
            ballType,
            categories: [],
            createdBy: '',
            description,
            endTime,
            flyer: oldBall.Flyer,
            grandprize,
            host,
            miniGrandPrize,
            region,
            source,
            startDate,
            startTime,
            venue: {
                city: oldBall.city,
                commonName: oldBall.venue,
                street: oldBall.address,
                street2: '',
                state: oldBall.State,
            },
            website,
            uid,
        }
    }

    return convertedBall
}

// export const convertSanityToAW = (sanityBall:SanityBall) => {
//   const ball = {
//     _id: sanityBall._id,
//     _createdAt: sanityBall._createdAt,
//     flyer: sanityBall.flyer,
//     ballTitle: sanityBall.ballTitle,
//     host: sanityBall.host,
//     categories: sanityBall.categories,
//     miniGrandPrize: sanityBall.miniGrandPrize,
//     ballType: sanityBall.ballType,
//     createdBy: "",
//     description: sanityBall.description,
//     startTime: sanityBall.functionStartDate,
//     endTime: sanityBall.functionEndDate,
//     region: sanityBall.region,
//     source: sanityBall.source,
//     website: sanityBall.website,
//     uid: sanityBall.uid,
//     venue: {
//       commonName: sanityBall.location.locationName,
//       street: sanityBall.location.street1,
//       street2: sanityBall.location.street2,
//       city: sanityBall.location.city,
//       state: sanityBall.location.state
//     },
//     grandprize: sanityBall.grandPrize,
//     startDate: sanityBall.functionStart,
//     approval: sanityBall.approval ? "Approved":""
//   }
//
//   return ball
// }

// export const convertToSanityBall = (currentBall: FirebaseBallType) => {
//   const ball: SanityBall = {
//     // flyer: currentBall.flyer,
//     ballTitle: currentBall.ballTitle,
//     host: currentBall.host,
//     categories: currentBall.categories,
//     miniGrandPrize: currentBall.miniGrandPrize,
//     ballType: currentBall.ballType,
//     createdBy: "",
//     description: currentBall.description,
//     // startTime: "",
//     // endTime: "",
//     region: currentBall.region,
//     source: currentBall.source,
//     uid: currentBall.uid,
//     location: {
//       locationName: currentBall.venue?.commonName,
//       street1: currentBall.venue?.street,
//       street2: currentBall.venue?.street2,
//       city: currentBall.venue?.city,
//       state: currentBall.venue?.state,
//
//     },
//     approval: currentBall.approval === 'Approved',
//     // Timestamp: sanityBall._createdAt,
//     grandPrize: currentBall.grandprize,
//     functionStartDate: moment.tz(`${currentBall.startDate} ${currentBall.startTime}`, "America/New York").utc().format(),
//     functionEndDate: currentBall.endTime !== ''? moment.tz(`1971-01-01 ${currentBall.endTime}`, "America/New York").utc().format():"",
//     // functionEndDate: currentBall.endTime !== ''?'0000-00-00T'+currentBall.endTime+'Z':'',
//     website: currentBall.website
//   }
//
//   console.log("ball conversion", ball, currentBall)
//
//   return ball
// }


export const importToSanityBall = async (currentBall: FirebaseBallType) => {
    const ball: SanityBallType = {
        ballTitle: currentBall.ballTitle,
        host: currentBall.host,
        categories: currentBall.categories,
        miniGrandPrize: currentBall.miniGrandPrize,
        ballType: BallTypeEnum.BALL,
        description: currentBall.description,
        region: currentBall.region,
        source: currentBall.source,
        uid: currentBall.uid,
        location: {
            locationName: currentBall.venue?.commonName,
            street1: currentBall.venue?.street,
            street2: currentBall.venue?.street2,
            city: currentBall.venue?.city,
            state: currentBall.venue?.state,
        },
        approval: currentBall.approval === 'Approved',
        grandPrize: currentBall.grandprize,
        functionStartDate: `${currentBall.startDate} ${currentBall.startTime}`,
        // functionStartDate: currentBall.startDate+'T'+currentBall.startTime+"Z",
        functionEndDate: `${currentBall.startDate} ${currentBall.endTime}`,
        // functionEndDate: currentBall.endTime !== "" ? currentBall.endTime + "Z":"",
        website: currentBall.website,
    }

    console.log('ball conversion', ball, currentBall)

    return ball
}

export const fromFormToSanity = (currentBall: BallFormComboType) => {
    const nextDay = new Date(currentBall.startDate)

    nextDay.setDate(nextDay.getDate() + 1)
    console.log('ballform ball for submission', currentBall)

    const ball: SanityBallType = {
        slug: currentBall.slug,
        createdBy: currentBall.createdBy,
        ballTitle: currentBall.ballTitle,
        host: currentBall.host,
        categories: currentBall.categories.map((category: Category) => ({...category, _key: uuidv4()})),
        miniGrandPrize: currentBall.miniGrandPrize,
        ballType: BallTypeEnum.BALL,
        description: currentBall.description,
        region: currentBall.region,
        source: currentBall.source,
        uid: currentBall.uid,
        location: currentBall.location,
        approval: currentBall.approval,
        grandPrize: currentBall.grandPrize,
        functionStartDate: combineDateAndTime(currentBall.startDate, currentBall.startTime),
        functionEndDate: currentBall.endTime !== '' ? combineDateAndTime(getDateInputValue(nextDay.toLocaleDateString()), currentBall.endTime) : '',
        website: currentBall.website,
    }

    console.log('ball transformed', ball, currentBall)

    return ball
}

export const fromStepFormToSanity = (currentBall: AddBallState & { slug: any, createdBy?: SanityRef }) => {
    const nextDay = new Date(currentBall.functionStartDate ?? "")

    nextDay.setDate(nextDay.getDate() + 1)
    console.log('ballform ball for submission', currentBall)

    // convert date and time to localedatetime
    const ball: SanityBallType = {
        slug: currentBall.slug,
        createdBy: currentBall.createdBy,
        ballTitle: currentBall.ballTitle,
        host: currentBall.host,
        categories: currentBall.categories ? currentBall.categories.map((category: Category) => ({
            ...category,
            _key: uuidv4()
        })) : [],
        ballType: currentBall.ballType,
        description: currentBall.description,
        source: currentBall.source,
        location: currentBall.location,
        approval: false,
        functionStartDate: combineDateAndTime(currentBall.functionStartDate ?? "", currentBall.functionStartTime ?? ""),
        functionEndDate: combineDateAndTime(currentBall.functionEndDate ?? "", currentBall.functionEndTime ?? ""),
        website: currentBall.website,
        notifyName: currentBall.notifyName,
        notifyEmail: currentBall.notifyEmail,
        notifyOnApproval: currentBall.notifyOnApproval,
    }

    console.log('ball transformed', ball, currentBall)

    return ball
}

export type BallFormComboType = SanityBallType & { startDate: any, startTime: any, endTime: any }

