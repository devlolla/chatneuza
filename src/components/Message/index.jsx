import { BotMessage, ContainerBot, ContainerUser, UserMessage } from "./styles"

export default function Message({ variant, children }) {
  if (variant === 'bot') return (
    <ContainerBot>
      <BotMessage>
        {children}
      </BotMessage>
    </ContainerBot>
  )
  return (
    <ContainerUser>
      <UserMessage>
        {children}
      </UserMessage>
    </ContainerUser>
  )
}
