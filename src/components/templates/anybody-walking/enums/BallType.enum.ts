export enum BallTypeEnum {
  MINI_BALL = 'MINI_BALL',
  MINI_BALL_DELUXE = 'MINI_BALL_DELUXE',
  KIKI_BALL = 'KIKI_BALL',
  BALL = 'BALL',
  NONE = ' '
}

export enum BallTypeTitleEnum {
  MINI_BALL='Mini-Ball',
  MINI_BALL_DELUXE='Mini-Ball Deluxe',
  KIKI_BALL='Kiki Ball',
  BALL='Major Ball',
  NONE=' '
}

export function renderBallTypeChoice(ballTypeChoice?: BallTypeEnum) {
  if(ballTypeChoice) {
    // @ts-ignore
    return BallTypeTitleEnum[ballTypeChoice]
  }

  return ""
}

export const renderBallType = (ballType?: BallTypeEnum) => {
  if(ballType)
    return ballType === BallTypeEnum.NONE ? 'ball':BallTypeTitleEnum[ballType]
  return 'ball'
}
