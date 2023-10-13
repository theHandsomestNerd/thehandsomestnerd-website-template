import {render, screen} from '@testing-library/react';
import {Grouped, Loading, Primary, PrimaryDisabled} from "../../stories/digital-resume/Button.stories";
import expect from "expect";

describe('Loading Button', () => {
    test('renders button with text', async () => {
        render(<Primary.render {...Primary.args}/>)

        expect(await screen.findAllByRole('button')).toHaveLength(1)
        expect((await screen.findByRole('button'))).toHaveTextContent(/button text/i)
        expect(screen.getByRole('button')).not.toBeDisabled()
        expect(screen.queryByRole('progressbar')).not.toBeInTheDocument()
    });

    test('renders loading button', async () => {
        render(<Loading.render {...Loading.args}/>)

        expect(screen.getByRole('button')).toBeInTheDocument()
        expect(screen.getByRole('progressbar')).toBeInTheDocument()
    });

    test('renders disabled button', async () => {
        render(<PrimaryDisabled.render {...PrimaryDisabled.args}/>)

        expect(screen.getByRole('button')).toBeInTheDocument()
        expect(screen.getByRole('button')).toBeDisabled()
        expect(screen.queryByRole('progressbar')).not.toBeInTheDocument()
    });

    test('renders grouped button', async () => {
        render(<Grouped.render {...Grouped.args}/>)

        expect(await screen.findAllByRole('button')).toHaveLength(4)
        expect(screen.queryByRole('progressbar')).not.toBeInTheDocument()
        expect((await screen.findAllByRole('button'))[0]).toHaveTextContent(/one/i)
        expect((await screen.findAllByRole('button'))[1]).toHaveTextContent(/two/i)
        expect((await screen.findAllByRole('button'))[2]).toHaveTextContent(/three/i)
        expect((await screen.findAllByRole('button'))[3]).toHaveTextContent(/four/i)
    });
})
