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
          title,
          slug,
          displayText,
          "subMenus":subMenus[]->{
            ${MENUGROUP}
          },
          logoImageSrc,
          logoImageAltText,
          logoAccentText,
          logoText
`

const SERVICE =
    `   
        ...,
        "serviceAmenities": serviceAmenities[]->,
      `


const HOMEPAGE = `_type,
          title,
          isUnderConstruction,
          releaseDate,
          slug,
          description,
          businessCardImageSrc,
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
          bookAppointmentLink,
          bookAppointmentQrCode,
          website,
          websiteQrCode,
          metaImage,
          theme->,
          headerContent {
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
                "prosList": prosList[]->,
                "serviceAmenities": serviceAmenities[]->,
                "skillsets": skillsets[]{
                    ...,
                    "skills": skills[]->{
                        _id,
                        name,
                        title,
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

enum SANITY_TYPES_ENUM {
    SERVICE="transformServiceItem"
}

const defaultObj = {HOMEPAGE, MENUGROUPCONTAINER, MENUGROUP, SERVICE, SANITY_TYPES_ENUM}


export default defaultObj