import React, {FC, ReactElement} from 'react'
import {Box, Pos, Value} from '@qiwi/pijma-core'
import {Text} from '../typography'

type DetailsText = ReactElement | string

export interface DetailsProps {
  children: {title: DetailsText, content: DetailsText | DetailsText[]}[]
  dots?: boolean
  titleWidth?: Value
  contentWidth?: Value
  size?: 's' | 'm' | 'l'
}

const indentDots: { [size in NonNullable<DetailsProps['size']>]: string } = {
  s: '6px',
  m: '8px',
  l: '8px',
}

const bottomDots: { [size in NonNullable<DetailsProps['size']>]: string } = {
  s: '5px',
  m: '7px',
  l: '9px',
}

export const Details: FC<DetailsProps> = ({children, dots, titleWidth, contentWidth, size = 'm'}) => (
  <Box as="dl" width="100%" display="table">
    {children.map((item, i) => (
      Array.isArray(item.content) ? (
        item.content.map((value, index) => (
          <Box css={{display: 'table-row'}} key={index}>
            <Box
              as="dt"
              width={titleWidth ? titleWidth : undefined}
              pt={index !== 0 ? 2 : i !== 0 ? 4 : undefined}
              css={{
                display: 'table-cell',
                verticalAlign: 'bottom',
              }}
            >
              {index === 0 ? (
                dots ? (
                  <Pos
                    type="relative"
                    overflow="hidden"
                    css={{
                      ':after': {
                        content: '""',
                        position: 'absolute',
                        bottom: bottomDots[size],
                        borderBottom: 'dashed 1px #e6e6e6',
                        width: '100%',
                        marginLeft: indentDots[size],
                      },
                    }}
                  >
                    <Text
                      bold={false}
                      size={size}
                      color="support"
                      children={item.title}
                    />
                  </Pos>
                ) : (
                  <Text
                    color="support"
                    bold={false}
                    size={size}
                    children={item.title}
                  />
                )
              ) : (
                null
              )}
            </Box>
            <Box
              as="dd"
              width={contentWidth ? contentWidth : undefined}
              pt={index !== 0 ? 2 : i !== 0 ? 4 : undefined}
              css={{
                display: 'table-cell',
                verticalAlign: 'bottom',
              }}
              pl={indentDots[size]}
            >
              <Text
                bold={false}
                size={size}
                children={value}
              />
            </Box>
          </Box>
        ))
      ) : (
        <Box css={{display: 'table-row'}} key={i}>
          <Box
            as="dt"
            width={titleWidth ? titleWidth : undefined}
            pt={i !== 0 ? 4 : undefined}
            css={{
              display: 'table-cell',
              verticalAlign: 'bottom',
            }}
          >
            {dots ? (
              <Pos
                type="relative"
                overflow="hidden"
                css={{
                  ':after': {
                    content: '""',
                    position: 'absolute',
                    bottom: bottomDots[size],
                    borderBottom: 'dashed 1px #e6e6e6',
                    width: '100%',
                    marginLeft: indentDots[size],
                  },
                }}
              >
                <Text
                  bold={false}
                  size={size}
                  color="support"
                  children={item.title}
                />
              </Pos>
            ) : (
              <Text
                color="support"
                bold={false}
                size={size}
                children={item.title}
              />
            )}
          </Box>
          <Box
            as="dd"
            width={contentWidth ? contentWidth : undefined}
            pt={i !== 0 ? 4 : undefined}
            css={{
              display: 'table-cell',
              verticalAlign: 'bottom',
            }}
            pl={indentDots[size]}
          >
            <Text
              bold={false}
              size={size}
              children={item.content}
            />
          </Box>
        </Box>
      )))}
  </Box>
)
