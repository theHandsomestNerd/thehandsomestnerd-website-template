import {render, screen} from '@testing-library/react';
import {Grouped, Loading, Primary, PrimaryDisabled} from "../../../../stories/digital-resume/Button.stories";
import expect from "expect";
import {
    SocialMediaBlockFromHomepage, SocialMediaBlockOnly3,
    SocialMediaBlockOnlyFacebook
} from "../../../../stories/digital-resume/SocialMediaBlock.stories";

describe('Social Media Block', () => {
    test('renders buttons for each one', async () => {
        render(<SocialMediaBlockFromHomepage.render {...SocialMediaBlockFromHomepage.args}/>)

        expect(await screen.findAllByRole('link')).toHaveLength(5)
    });

    test('renders buttons for only facebook', async () => {
        render(<SocialMediaBlockOnlyFacebook.render {...SocialMediaBlockOnlyFacebook.args}/>)

        expect(await screen.findAllByRole('link')).toHaveLength(1)
    });

    test('renders buttons for only present', async () => {
        render(<SocialMediaBlockOnly3.render {...SocialMediaBlockOnly3.args}/>)

        expect(await screen.findAllByRole('link')).toHaveLength(3)
    });
})
