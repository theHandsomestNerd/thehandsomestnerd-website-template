export default {
  name: 'category',
  title: 'Category',
  type: 'object',
  fields: [
    {
      name: 'catName',
      title: 'Name',
      type: 'string',
      options: {
        list: [
          {title: 'Vogue/Performance', value: 'VOGUE'},
          {title: 'Realness', value: 'REALNESS'},
          {title: 'Face', value: 'FACE'},
          {title: 'Runway', value: 'RUNWAY'},
          {title: 'Best Dressed', value: 'BESTDRESSED'},
          {title: 'RwT', value: 'RWT'},
          {title: 'Sex Siren', value: 'SEXSIREN'},
          {title: 'Body', value: 'BODY'},
          {title: 'Streetwear', value: 'STREETWEAR'},
          {title: 'Foot & Eyewear', value: 'FOOTWEAR'},
          {title: 'Specialty/Other', value: 'SPECIALTY'}
        ]
      }
    },
    {
      name: 'catDescription',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'catType',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'Grand Prize', value: 'GRANDPRIZE'},
          {title: 'Mini Grand Prize', value: 'MINIGRANDPRIZE'},
          {title: 'Regular', value: 'REGULAR'}
        ]
      }
    },
    {
      name: 'catPrize',
      title: 'Prize',
      type: 'string',
      options: {
        list: [
          {title: 'Gift', value: 'GIFT'},
          {title: 'Monetary', value: 'MONETARY'},
          {title: 'Only Trophy', value: 'ONLYTROPHY'}
        ]
      }
    },
    {
      name: 'monetaryPrize',
      title: 'Monetary Prize',
      type: 'string',
      hidden: ({parent}) => (parent?.catPrize !== 'MONETARY')
    },
    {
      name: 'catGender',
      title: 'Gender',
      type: 'string',
      options: {
        list: [
          {title: 'OTA', value: 'OTA'},
          {title: 'FQ', value: 'FQ'},
          {title: 'BQ', value: 'BQ'},
          {title: 'Drags', value: 'DRAGS'},
          {title: 'Transman', value: 'TRANSMAN'},
          {title: 'Woman', value: 'WOMAN'},
          {title: 'FF', value: 'FF'},
          {title: 'MF', value: 'MF'}
        ]
      }
    },
    {
      name: 'versus',
      title: 'VS',
      type: 'boolean'
    },
    {
      name: 'catVsGender',
      title: 'Versus Gender',
      type: 'string',
      hidden: ({parent}) => (parent.versus !== true),
      options: {
        list: [
          {title: 'OTA', value: 'OTA'},
          {title: 'FQ', value: 'FQ'},
          {title: 'BQ', value: 'BQ'},
          {title: 'Drags', value: 'DRAGS'},
          {title: 'Transman', value: 'TRANSMAN'},
          {title: 'Woman', value: 'WOMAN'},
          {title: 'FF', value: 'FF'},
          {title: 'MF', value: 'MF'}
        ]
      }
    }
  ]
}
