import {FunctionComponent, useContext, useEffect, useState} from 'react'
import MetaTags from 'react-meta-tags'
import {SanityImageSource} from "@sanity/asset-utils";
import SanityContext from "../../common/sanityIo/sanity-context/SanityContext";

interface IProps {
  title: string
  description: string
  imgSrc?: SanityImageSource
  structuredData?: any
}


const MetaTagsComponent: FunctionComponent<IProps> = (props) => {
  const [structuredJSONObj, setStructuredJSONObj] = useState<any>()
  const sanityContext = useContext(SanityContext)

  useEffect(() => {
    // console.log("Structured data", props.structuredData)
    if (props.structuredData) {
      // let data={}
      let data = {
        '@context': 'http://schema.org/',
        '@type': props.structuredData.type ? props.structuredData.type : 'Product',
        "name": `${props.structuredData.name}`,
        "image": props.structuredData.image?.map((image:SanityImageSource) => sanityContext.urlFor(image).url()),
        "description": props.structuredData.description,
        "url": props.structuredData.url,
        "offers": {
          "@type": "Offer",
          "priceCurrency": `${props.structuredData.priceCurrency || "₴"}`,
          "price": props.structuredData.price ? `${parseFloat(props.structuredData.price)}` : 0,
          "availability": `${props.structuredData.availability}`,
          "seller": {
            "@type": props.structuredData.seller?.type ? props.structuredData.seller.type: "Organization",
            "name": props.structuredData.seller?.name
          }
        }
      }
// console.log("structured data", data)
      setStructuredJSONObj(data)
    }
  }, [props.structuredData])

  return (
    <div className='wrapper'>
      <MetaTags>
        <title>{props.title}</title>
        <script type='application/ld+json'     dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredJSONObj) }}
        />

        {/*<meta name='description' content={props.description}/>*/}
        {/*<meta property='og:title' content={props.title}/>*/}
        {/*{props.imgSrc && <meta property='og:image' content={urlFor(props.imgSrc).url() ?? ''}/>}*/}
      </MetaTags>
    </div>
  )
}

export default MetaTagsComponent