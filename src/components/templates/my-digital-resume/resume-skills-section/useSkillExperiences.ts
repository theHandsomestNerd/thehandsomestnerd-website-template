import {ResumeExperienceType, ResumeSkillType} from "../../../BlockContentTypes";
import {useContext, useEffect, useState} from "react";
import SanityContext from "../../../../common/sanityIo/sanity-context/SanityContext";

const useSkillExperiences = (skill: ResumeSkillType) => {
    const { fetchSkillExperiences } = useContext(SanityContext);
    const [data, setData] = useState<ResumeExperienceType[] | undefined>(undefined);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        if (!skill || !fetchSkillExperiences) return;

        setLoading(true);
        fetchSkillExperiences(skill)
            .then(setData)
            .catch(setError)
            .finally(() => setLoading(false));

    }, [skill, fetchSkillExperiences]);

    return { data, loading, error };
};

export default useSkillExperiences;