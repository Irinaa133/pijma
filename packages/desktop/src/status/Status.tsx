import React, {FC, ReactNode} from 'react'
import {Flex, FlexItem, Card, Box} from '@qiwi/pijma-core'
import {Heading} from '../typography/'

export interface StatusProps {
  icon?: ReactNode,
  title?: string
}

export const Status: FC<StatusProps> = ({icon, title, children}) => (
  <Card pb={11} pt={11}>
    <Flex align="center" direction="column">
      {icon ? (
        <FlexItem
          width={12}
          mb={8}
          children={icon}
        />
      ) : (
        null
      )
      }
      {title ? (
        <Box>
          <Heading
            size="4"
            children={title}
          />
        </Box>
      ) : (
        null
      )}
      {children ? (
        <FlexItem
          mt={1}
          children={children}
        />
      ) : (
        null
      )}
    </Flex>
  </Card>
)
