import {
    AnimatedAboutUsSectionType, AnimatedServicesSectionType,
    HeroAnimatedContentSectionType, MapSectionType,
    ResumeBioSectionType
} from "../../components/BlockContentTypes";
import HeroAnimatedContentSection from "../../components/animated/HeroAnimatedContentSection";

const MapSectionData:MapSectionType = {
    "latitude": "39.332029",
    mapMarkerLabel:"Chow Works",
    "name": "Chow Works Map",
    "mapMarkerTitle": "Chow Works",
    // "mapMarkerName": "Chow Works",
    "longitude": "-76.760486",
    "contactInfo": [
        {
            "description": "14851 New York, USA",
            "title": "101 Merritt 5, north tower",
            "muiIcon": "location",
            "_type": "ServiceAmenityItem",
            "name": "Address"
        },
        {
            "muiIcon": "phone",
            "_type": "ServiceAmenityItem",
            "name": "Get In Touch",
            "description": "+088 11 22 00 44",
            "title": "Get In Touch"
        },
        {
            "_type": "ServiceAmenityItem",
            "name": "Email",
            "description": "email@email.com",
            "title": "Email",
            "muiIcon": "email"
        }
    ],
    "address": "7412 Chadwell Cir unit 202 Windsor Mill, MD 21244",
}

export default MapSectionData