import {render, screen, waitFor} from '@testing-library/react';
import {composeStories} from '@storybook/react';
import * as stories from "../../../../stories//digital-resume/ResumeEducation.stories";
import {ResumeEducationSectionType} from "../../../BlockContentTypes";

const {ResumeEducationSectionStory} = composeStories(stories);

describe('Resume Education Section', () => {
    test('renders all components of education section', async () => {
        render(<ResumeEducationSectionStory/>)

        await waitFor(() => {
            expect(screen.getByText('Education')).toBeInTheDocument()
            expect(screen.getByText('.')).toBeInTheDocument()
            expect(screen.getByText('All my life I have been driven by my strong belief that education is important. I try to learn something new every single day.')).toBeInTheDocument()

            expect(screen.getByText('University of Maryland, Baltimore County')).toBeInTheDocument()
            expect(screen.getByText('Computer Engineering, Bachelor of Science')).toBeInTheDocument()
            expect(screen.getByText('Jun 1999')).toBeInTheDocument()
            expect(screen.getByText('Jun 2004')).toBeInTheDocument()
            expect(screen.getByText('A member of the computer Science blah blah blah blah blah blah blah blah')).toBeInTheDocument()

            expect(screen.getAllByRole('education-divider')).toHaveLength(1)
            expect(screen.getAllByText('—')).toHaveLength(2)

            expect(screen.getByText('Villanova University')).toBeInTheDocument()
            expect(screen.getByText('12 credits')).toBeInTheDocument()
            expect(screen.getByText('Jun 1998')).toBeInTheDocument()
            expect(screen.getByText('Aug 1998')).toBeInTheDocument()


        })
    });

    test('renders all components of education section when there is one Education Experience', async () => {
        const mockEducationSection:ResumeEducationSectionType = {
            "name": "Education",
            "_type": "ResumeEducationSection",
            "title": "Education",
            "introduction": "All my life I have been driven by my strong belief that education is important. I try to learn something new every single day.\n\n",
            "_id": "d980e48d-0fe1-4c38-8f35-97a68c59ddee",
            "educationExperiences": [
                {
                    "qualification": "Computer Engineering, Bachelor of Science",
                    "_rev": "v53ZsDDD1bdWz9EKViVLTO",
                    "name": "BS",
                    "dateEnd": "2004-05-06",
                    "_updatedAt": "2022-12-01T14:17:44Z",
                    "dateStart": "1999-06-01",
                    "_createdAt": "2022-12-01T14:17:44Z",
                    "institutionName": "University of Maryland, Baltimore County",
                    "_type": "ResumeEducation",
                    "_id": "6424a080-4dfe-4734-802a-faa3dea2d81e",
                    "description": "A member of the computer Science blah blah blah blah blah blah blah blah"
                }
            ]
        }
        render(<ResumeEducationSectionStory sectionData={mockEducationSection}/>)

        await waitFor(() => {
            expect(screen.getByText('Education')).toBeInTheDocument()
            expect(screen.getByText('.')).toBeInTheDocument()
            expect(screen.getByText('All my life I have been driven by my strong belief that education is important. I try to learn something new every single day.')).toBeInTheDocument()

            expect(screen.getByText('University of Maryland, Baltimore County')).toBeInTheDocument()
            expect(screen.getByText('Computer Engineering, Bachelor of Science')).toBeInTheDocument()
            expect(screen.getByText('Jun 1999')).toBeInTheDocument()
            expect(screen.getByText('Jun 2004')).toBeInTheDocument()
            expect(screen.getByText('A member of the computer Science blah blah blah blah blah blah blah blah')).toBeInTheDocument()

            expect(screen.queryByRole('education-divider')).not.toBeInTheDocument()
        })
    });

    test('renders all components of education section when there is more than two Education Experience', async () => {
        const mockEducationSection:ResumeEducationSectionType = {
            "name": "Education",
            "_type": "ResumeEducationSection",
            "title": "Education",
            "introduction": "All my life I have been driven by my strong belief that education is important. I try to learn something new every single day.\n\n",
            "_id": "d980e48d-0fe1-4c38-8f35-97a68c59ddee",
            "educationExperiences": [
                {
                    "qualification": "Computer Engineering, Bachelor of Science",
                    "_rev": "v53ZsDDD1bdWz9EKViVLTO",
                    "name": "BS",
                    "dateEnd": "2004-05-06",
                    "_updatedAt": "2022-12-01T14:17:44Z",
                    "dateStart": "1999-06-01",
                    "_createdAt": "2022-12-01T14:17:44Z",
                    "institutionName": "University of Maryland, Baltimore County",
                    "_type": "ResumeEducation",
                    "_id": "6424a080-4dfe-4734-802a-faa3dea2d81e",
                    "description": "A member of the computer Science blah blah blah blah blah blah blah blah"
                },
                {
                    "qualification": "12 credits",
                    "_rev": "v53ZsDDD1bdWz9EKViVLTO",
                    "name": "Credits",
                    "dateEnd": "1998-07-06",
                    "_updatedAt": "2022-12-01T14:17:44Z",
                    "dateStart": "1998-06-01",
                    "_createdAt": "2022-12-01T14:17:44Z",
                    "institutionName": "Villanova University",
                    "_type": "ResumeEducation",
                    "_id": "6424a080-4dfe-4734-802a-faa3dea2d81e"
                },
                {
                    "qualification": "24 credits",
                    "_rev": "v53ZsDDD1bdWz9EKViVLTO",
                    "name": "HS credits",
                    "dateEnd": "1999-05-30",
                    "_updatedAt": "2022-12-01T14:17:44Z",
                    "dateStart": "1995-08-01",
                    "_createdAt": "2022-12-01T14:17:44Z",
                    "institutionName": "Oxon Hill High School",
                    "_type": "ResumeEducation",
                    "_id": "6424a080-4dfe-4734-802a-faa3dea2d81e",
                    "description": "A member of the computer Science Science and Tech"
                }
            ]
        }
        render(<ResumeEducationSectionStory sectionData={mockEducationSection}/>)

        await waitFor(() => {
            expect(screen.getByText('Education')).toBeInTheDocument()
            expect(screen.getByText('.')).toBeInTheDocument()
            expect(screen.getByText('All my life I have been driven by my strong belief that education is important. I try to learn something new every single day.')).toBeInTheDocument()

            expect(screen.getByText('University of Maryland, Baltimore County')).toBeInTheDocument()
            expect(screen.getByText('Villanova University')).toBeInTheDocument()
            expect(screen.getByText('Oxon Hill High School')).toBeInTheDocument()

            expect(screen.getAllByRole('education-divider')).toHaveLength(2)
        })
    });
})
