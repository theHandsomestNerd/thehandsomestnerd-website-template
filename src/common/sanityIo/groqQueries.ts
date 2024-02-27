const MENUGROUP = `
          title,
          _type,
          slug,
          menuGroupTitle,
          "links":links[]->{
            _type,
            displayText,
            url,
            isOutlinedButton,
            isContainedButton,
            isModalButton,
            modalRef->{
                name,
                title,
                slug,
                backgroundImageSrc,
                iconOverlayImageSrc,
                "contentText":contentText[],
                "notes":notes[],
                ctaButtonTitle,
                ctaButtonLink
            }
          },
          displayText,
          url,
          isOutlinedButton,
          isContainedButton,
`

const MENUGROUPCONTAINER = `
          ...,
          "subMenus":subMenus[]->{
            ${MENUGROUP}
          }
`

const SERVICE =
    `   
        ...,
        "serviceAmenities": serviceAmenities[]->,
      `


const HOMEPAGE = `_type, 
          _id,
          ...,
          "businessContact": businessContactRef->{
              ...,
              address,
              email,
              phone,
              facebook,
              facebookIconSrc{
                asset->{
                  _id,
                  url,
                  altText
                 }
              },
              twitter,
              twitterIconSrc{
                asset->{
                  _id,
                  url,
                  altText
                 }
              },
              instagram,
              linkedIn,
              github,
              instagramIconSrc{
                asset->{
                  _id,
                  url,
                  altText
                 }
              }
          },
          backgroundImageSrc{
                asset->{
                  _id,
                  url,
                  altText
                 }
              },
          bookAppointmentLink,
          bookAppointmentQrCode,
          website,
          websiteQrCode,
          metaImage,
          theme->,
          headerContent {
            ...,
            "content": content[]->{
                ...,
                headerMenuRef->{
                 ${MENUGROUPCONTAINER}
               },
            }
          },
          footerContent {
            "content": content[]->{
                ...,
                footerMenuRef->{
                 ${MENUGROUPCONTAINER}
               },
            }
          },
          pageContent {
            "content": content[]->{
                ...,
                "highlightedAmenities": highlightedAmenities[],
                "servicesList": servicesList[]->{
                    ${SERVICE}
                },
                "teamList": teamList[]->,
                "prosList": prosList[]->,
                "serviceAmenities": serviceAmenities[]->,
                "skillsets": skillsets[]->{
                    ...,
                    "skills": skills[]->{
                        ...
                    },
                }, 
                "experiences": experiences[]->{
                    ...,
                    "skillsUsed": skillsUsed[]->
                },
                "educationExperiences": educationExperiences[]->,
                "feedbackEntries": feedbackEntries[]->,
                "portfolioEntries": portfolioEntries[]->{
                    ...,
                    "skillsHighlighted": skillsHighlighted[]->,
                    "imageGallery": imageGallery[]
                },
                "resumeFile": resumeFile.asset->,
                "cvFile": cvFile.asset->
            }
          },
          "servicesAvailable": servicesAvailable[]->{
            ${SERVICE}
          },
          isFabActivated,
          underConstructionPageRef,
          structuredData,
`

const INSTRUCTION = `
          title,
          slug,
          tool,
          action,
          instruction,
          "mixingGlassGarnishes":mixingGlass[]->,
          "mixingGlass":mixingGlass[]{
                _type,
                amount,
                ingredient->  
          },
`
const LIQUOR_TYPE = `
          ...,
          imageSrc {
            asset->{
              _id,
              url,
              altText
             }
          },
`

const INGREDIENT = `
          ...,
          liquorType->{
            ${LIQUOR_TYPE}
          },
`

const COCKTAIL = `
          ...,
          glass->,
          "glassPrep": glassPrep[],
          "garnish": garnish[]->,
          "mixingGlassGarnishes": mixingGlass[]->,
          "mixingGlass": mixingGlass[]{
                _type,
                amount,
                ingredient->{
                    ${INGREDIENT}
                }  
          },
          "instructions": instructions[]->{
            ${INSTRUCTION}
          },
`


enum SANITY_TYPES_ENUM {
    SERVICE = "transformServiceItem"
}

const defaultObj = {HOMEPAGE, MENUGROUPCONTAINER, MENUGROUP, SERVICE, SANITY_TYPES_ENUM, COCKTAIL, INGREDIENT, LIQUOR_TYPE, INSTRUCTION}

// get all my liquor types
//     *[ _type == "BarInventory"]{
// ...,
//     "theBarLiquorTypes": *[ _type == "Ingredient" && _id in ^.theBar[]._ref ]{
//         liquorType->
//     }
// }
export default defaultObj