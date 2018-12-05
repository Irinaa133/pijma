import React, {FunctionComponent, ReactNode, Fragment} from 'react'

import {ButtonControl, Spinner, Pos, Flex, FlexItem, Typo, Btn} from '@qiwi/pijma-core'

interface ButtonProps {
  onClick?: () => void
  onFocus?: () => void
  onBlur?: () => void
  tabIndex?: number
  disabled?: boolean
  kind: 'brand' | 'simple'
  size: 'accent' | 'normal' | 'minor'
  type: 'button' | 'submit'
  text?: string
  icon?: ReactNode
  loading?: boolean
}

const buttonSize: { [size in ButtonProps['size']]: number } = {
  accent: 12,
  normal: 10,
  minor: 8,
}

const buttonBackground: { [kind in ButtonProps['kind']]: string } = {
  brand: '#ff8c00',
  simple: '#fff padding-box',
}

const buttonHoverBackground: { [kind in ButtonProps['kind']]: string } = {
  brand: '#ff8200',
  simple: '#fff padding-box',
}

const buttonBorder: { [kind in ButtonProps['kind']]: string } = {
  brand: 'none',
  simple: '1px solid rgba(0, 0, 0, 0.14)',
}

const buttonHoverBorder: { [kind in ButtonProps['kind']]: string } = {
  brand: 'none',
  simple: '1px solid rgba(0, 0, 0, 0.28)',
}

const iconSize: {[size in ButtonProps['size']]: number} = {
  accent: 6,
  normal: 6,
  minor: 5,
}

const textColor: { [kind in ButtonProps['kind']]: string } = {
  brand: '#fff',
  simple: '#000',
}

const Button: FunctionComponent<ButtonProps> = (props) => (
  <ButtonControl
    onClick={props.onClick}
    onFocus={props.onFocus}
    onBlur={props.onBlur}
    children={(renderProps) => (
      <Btn
        width={!props.icon || props.text ? 1 : 12}
        height={buttonSize[props.size]}
        bg={props.disabled ? '#e6e6e6' : renderProps.hover || renderProps.focus ? buttonHoverBackground[props.kind] : buttonBackground[props.kind]}
        b={props.disabled ? 'none' : renderProps.hover || renderProps.focus ? buttonHoverBorder[props.kind] : buttonBorder[props.kind]}
        r={24}
        transition="all 300ms cubic-bezier(0.4, 0.0, 0.2, 1)"
        onClick={renderProps.onClick}
        onFocus={renderProps.onFocus}
        onBlur={renderProps.onFocus}
        onMouseEnter={renderProps.onMouseEnter}
        onMouseLeave={renderProps.onMouseLeave}
        children={(
          <Pos
            type="relative"
            width={1}
            height={1}
            cursor={props.disabled ? 'not-allowed' : 'pointer'}
            children={(
              <Flex
                align="center"
                justify="center"
                width={1}
                height={1}
                px={props.icon && !props.text ? 0 : 8}
                transition="all 300ms cubic-bezier(0.4, 0.0, 0.2, 1)"
                children={(
                  <Fragment>
                    <Pos
                      type="absolute"
                      top={0}
                      right={0}
                      bottom={0}
                      left={0}
                      opacity={props.loading ? (renderProps.hover || renderProps.active || renderProps.focus ? 0.9 : 1) : 0}
                      transition="all 300ms cubic-bezier(0.4, 0.0, 0.2, 1)"
                      children={(
                        <Flex
                          align="center"
                          justify="center"
                          width={1}
                          height={1}
                          children={(
                            <Spinner
                              width={6}
                              height={6}
                              color={props.disabled ? '#666' : textColor[props.kind]}
                            />
                          )}
                        />
                      )}
                    />
                    {props.icon ? (
                      <FlexItem
                        shrink={0}
                        opacity={props.loading ? 0 : renderProps.hover || renderProps.active || renderProps.focus ? 0.9 : 1}
                        mr={props.text ? 3 : 0}
                        width={iconSize[props.size]}
                        height={iconSize[props.size]}
                        transition="all 300ms cubic-bezier(0.4, 0.0, 0.2, 1)"
                        css={{
                          fill: props.disabled ? '#666' : props.kind === 'brand' ? '#fff' : '#000',
                        }}
                        children={props.icon}
                      />
                    ) : (
                      null
                    )}
                    {props.text ? (
                      <FlexItem
                        opacity={props.loading ? 0 : renderProps.hover || renderProps.active || renderProps.focus ? 0.9 : 1}
                        overflow="hidden"
                        transition="all 300ms cubic-bezier(0.4, 0.0, 0.2, 1)"
                        children={(
                          <Typo
                            nowrap
                            display="block"
                            weight={500}
                            color={props.disabled ? '#666' : textColor[props.kind]}
                            size={4}
                            height={4}
                            transition="all 300ms cubic-bezier(0.4, 0.0, 0.2, 1)"
                            children={props.text}
                          />
                        )}
                      />
                    ) : (
                      null
                    )}
                  </Fragment>
                )}
              />
            )}
          />
        )}
      />
    )}
  />
)

export default Button