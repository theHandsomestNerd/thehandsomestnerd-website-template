const URL_BASE = ""
const login = (idToken: string, username: string) =>
    /** Login firebase server-side to check for admin access * */
    fetch(`${URL_BASE}/login/`, {
        method: 'POST',
        headers: new Headers({AuthToken: idToken}),
        body: JSON.stringify({
            username: username || '',
            idToken,
        }),
    }).then(response => response.json())

const getImageFromURL = (imageFileUrl: string) =>
    fetch(`${URL_BASE}/getImageFromUrl`, {
        method: 'POST',
        // headers: new Headers({AuthToken: idToken}),
        body: JSON.stringify({
            imageFileUrl,
        }),
    })

const addCommentToBall = async (ballId: any, comment: any, idToken: any) =>
    fetch(`${URL_BASE}/comment/${ballId}`, {
        method: 'POST',
        headers: new Headers({AuthToken: idToken}),
        body: JSON.stringify({
            comment,
            idToken,
        }),
    })

const getFirebaseApprovedBalls = (idToken: string) => {
    let fetchParams = {};

    if (idToken !== '') {
        fetchParams = {
            method: 'POST',
            headers: new Headers({AuthToken: idToken}),
            body: JSON.stringify({
                idToken,
            }),
        };
    }

    return fetch(`${URL_BASE}/approvedBalls`, fetchParams);
}

const getUserUpdateSubscription = (userId: string, idToken: string) => {
    let fetchParams = {};

    if (userId !== '') {
        fetchParams = {
            method: 'POST',
            headers: new Headers({AuthToken: idToken}),
            body: JSON.stringify({
                userId,
                idToken,
            }),
        };
    }

    return fetch(`${URL_BASE}/getUserListener`, fetchParams);
}

// const getBall = async (ballId: string) => cmsClient.fetchBall(ballId)
//
// const addBall = async (ball: SanityBall, flyerImage: File) => {
//     const newBall = await cmsClient.createBall(ball)
//     await cmsClient.uploadBallFlyerImage(flyerImage, newBall._id)
//     return newBall
// }
// const getCommentsForBall = ballId =>
//     cmsClient.fetchCommentsByBallId(ballId
// const getApprovedBalls =  async (queryString:any) => cmsClient.fetchAllApprovedBalls(queryString),

export default {
    login,
    addCommentToBall,
    getImageFromURL,
    getFirebaseApprovedBalls,
    getUserUpdateSubscription,
}