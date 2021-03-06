import { NextPage } from 'next'
import { BackgroundText, TextColor } from './styles'

const ContactBackgroundText: NextPage = ({ children }) => {
  return (
    <>
      <BackgroundText>
        import
        <TextColor Color="white">{' React'}</TextColor> from{' '}
        <TextColor Color="yellow">{"'react'"}</TextColor>
        <br />
        <br />
        const
        <TextColor Color="blue"> Contact</TextColor>:{' '}
        <TextColor Color="purple">React.FC</TextColor> ={' '}
        <TextColor Color="yellow">{'()'}</TextColor> {'=>'}{' '}
        <TextColor Color="yellow">{'{'}</TextColor>
        <br />
        &nbsp;&nbsp;{'return ('}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <TextColor Color="white">{'<'}</TextColor>div
        <TextColor Color="white">{'>'}</TextColor>
        <br />
        {children}
        &nbsp;&nbsp;&nbsp;&nbsp;
        <TextColor Color="white">{'</'}</TextColor>div
        <TextColor Color="white">{'>'}</TextColor>
        <br />
        &nbsp;&nbsp;{')'}
        <br />
        <TextColor Color="yellow">{'}'}</TextColor>
        <br />
        <br />
        export default
        <TextColor Color="blue"> Contact</TextColor>
      </BackgroundText>
    </>
  )
}

export default ContactBackgroundText
