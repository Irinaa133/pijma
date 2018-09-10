import React, {SFC, ReactNode, MouseEventHandler} from 'react'

import {
  styled,
  PasswordFieldControl,
  MaskInput,
  Field,
  FieldInput,
  FieldTitle,
  FieldTitleText,
  FieldUnder,
  FieldUnderAction,
  FieldUnderError,
  FieldUnderHelp,
  FieldIcon,
} from '@qiwi/pijma-core'

import {
  EyeClosedIcon,
  EyeOpenedIcon,
} from '@qiwi/pijma-media'

import MaskPasswordFieldProps from './MaskPasswordFieldProps'

interface HiddenToggleProps {
  onClick: MouseEventHandler
}

const HiddenToggle = styled.span<HiddenToggleProps>({
  display: 'inline-block',
  cursor: 'pointer',
  width: '100%',
  height: '100%',
})

interface PasswordFieldStyledProps {
  focused: boolean
  value: string
  disabled?: boolean
  viewed?: boolean
  placeholder?: string
  hint?: ReactNode
  error?: ReactNode
}

const PasswordFieldStyled = styled.div<PasswordFieldStyledProps>((props) => ({
  width: '100%',
  [FieldTitleText.toString()]: {
    fontSize: props.focused || !!props.value || !!props.placeholder ? 13 : 20,
    top: props.focused || !!props.value || !!props.placeholder ? 0 : 16,
    lineHeight: props.focused || !!props.value || !!props.placeholder ? '16px' : '30px',
    paddingRight: props.focused || !!props.value || !!props.placeholder ? undefined : props.hint || props.viewed ? 28 : undefined,
  },
  [HiddenToggle.toString()]: {
    fill: (
      props.disabled ? (
        props.theme.color.gray.darkest
      ) : (
        undefined
      )
    ),
  },
  [MaskInput.toString()]: {
    color: (
      props.disabled ? (
        props.theme.color.gray.darkest
      ) : (
        props.theme.color.black
      )
    ),
    borderBottom: (
      props.disabled ? (
        `1px dotted ${props.theme.color.gray.dark}`
      ) : props.error ? (
        `2px solid ${props.theme.color.error}`
      ) : props.focused ? (
        `2px solid ${props.theme.color.brand}`
      ) : (
        undefined
      )
    ),
    paddingRight: props.hint ? 28 : undefined,
  },
}))

const MaskPasswordField: SFC<MaskPasswordFieldProps> = (props) => (
  <PasswordFieldControl
    onChange={props.onChange}
    onFocus={props.onFocus}
    onBlur={props.onBlur}
    onKeyDown={props.onKeyDown}
    onKeyUp={props.onKeyUp}
    onToggle={props.onToggle}
    children={(renderProps) => (
      <PasswordFieldStyled
        focused={renderProps.focused}
        value={props.value}
        disabled={props.disabled}
        placeholder={props.placeholder}
        hint={props.hint}
        error={props.error}
      >
        <Field>
          <FieldTitle>
            <FieldTitleText>
              {props.title}
            </FieldTitleText>
          </FieldTitle>
          <FieldInput>
            <MaskInput
              type={props.viewed && !renderProps.hidden ? 'text' : 'password'}
              value={props.value}
              name={props.name}
              autoComplete={props.autoComplete ? 'on' : 'off'}
              autoFocus={props.autoFocus}
              placeholder={props.placeholder}
              disabled={props.disabled}
              maxLength={props.maxLength}
              mask={props.mask}
              pipe={props.pipe}
              guide={false}
              keepCharPositions={!!props.pipe}
              placeholderChar={'\u2000'}
              onChange={renderProps.onChange}
              onFocus={renderProps.onFocus}
              onBlur={renderProps.onBlur}
              onKeyDown={renderProps.onKeyDown}
              onKeyUp={renderProps.onKeyUp}
            />
            {props.viewed ? (
              <FieldIcon>
                <HiddenToggle onClick={renderProps.onToggle}>
                  {renderProps.hidden ? (
                    <EyeClosedIcon/>
                  ) : (
                    <EyeOpenedIcon/>
                  )}
                </HiddenToggle>
              </FieldIcon>
            ) : props.hint ? (
              <FieldIcon>
                {props.hint}
              </FieldIcon>
            ) : (
              null
            )}
          </FieldInput>
          <FieldUnder>
            {props.error ? (
              <FieldUnderError>
                {props.error}
              </FieldUnderError>
            ) : props.help ? (
              <FieldUnderHelp>
                {props.help}
              </FieldUnderHelp>
            ) : (
              null
            )}
            {props.action ? (
              <FieldUnderAction>
                {props.action}
              </FieldUnderAction>
            ) : (
              null
            )}
          </FieldUnder>
        </Field>
      </PasswordFieldStyled>
    )}
  />
)

MaskPasswordField.defaultProps = {
  tabIndex: 0,
  viewed: true,
}

export default MaskPasswordField