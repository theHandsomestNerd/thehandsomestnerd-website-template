import{FunctionComponent, useContext} from 'react'
import BlockContent from '@sanity/block-content-to-react'
import {abBlockSerializers} from './common/sanityIo/BlockContentRenderer'
import SanityContext from "../../common/sanityIo/sanity-context/SanityContext";

export type BlockContentContainerProps = { body?: any | undefined }

const BlockContentContainer: FunctionComponent<BlockContentContainerProps> = ({body}) => {
  const sanityContext = useContext(SanityContext)

  return <BlockContent
    blocks={body}
    serializers={abBlockSerializers}
    projectId={sanityContext.theSanityClient.config().projectId}
    dataset={sanityContext.theSanityClient.config().dataset}
  />
}

export default BlockContentContainer
