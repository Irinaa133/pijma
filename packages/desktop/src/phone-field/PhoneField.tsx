import React, {FunctionComponent, RefObject, createRef} from 'react'
import MaskedInput from 'react-text-mask'

import {
  PhoneFieldControl,
  OptionControl,
  InputField,
  BasicInput,
  Stub,
  Box,
  Pos,
  Card,
  Flex,
  FlexItem,
  CountryCode,
} from '@qiwi/pijma-core'

import {Paragraph} from '../typography'

import {DropDown} from '../drop-down'

import {flags} from './flags'

import PhoneFieldProps from './PhoneFieldProps'

const PhoneField: FunctionComponent<PhoneFieldProps> = (props) => {
  if (props.stub) {
    return (
      <Box>
        {props.title ? (
          <Stub width={15} height={2} top={1} bottom={1}/>
        ) : (
          <Box height={4}/>
        )}
        <Card bb="1px solid rgba(0, 0, 0, 0.2)" height={7}>
          <Flex align="center" justify="space-between" height={1}>
            <FlexItem>
              <Stub width={38} height={3} top={1} bottom={1}/>
            </FlexItem>
            {props.hint ? (
              <FlexItem>
                <Stub width={5} height={5} r={10}/>
              </FlexItem>
            ) : (
              null
            )}
          </Flex>
        </Card>
        {props.help ? (
          <Stub width={15} height={2} top={2} bottom={1}/>
        ) : (
          <Box height={5}/>
        )}
      </Box>
    )
  }
  const flag: RefObject<HTMLDivElement> = createRef()
  const container: RefObject<HTMLDivElement> = createRef()
  const input: RefObject<MaskedInput> = createRef()
  const dropdown: RefObject<HTMLDivElement> = createRef()
  const options: Map<CountryCode, RefObject<HTMLDivElement>> = new Map(
    props.countries.map((country => [country.code, createRef()])),
  )
  return (
    <PhoneFieldControl
      value={props.value}
      countries={props.countries}
      onChange={props.onChange}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      onKeyDown={props.onKeyDown}
      onKeyUp={props.onKeyUp}
      onCountryEnter={props.onCountryEnter}
      onCountryLeave={props.onCountryLeave}
      inputRef={() => input}
      dropdownRef={() => dropdown}
      optionsRefs={options}
      children={(renderProps) => {
        const FlagIcon = flags[renderProps.countryCode]
        return (
          <Pos type="relative" ref={container}>
            <InputField
              title={props.title}
              active={renderProps.focused || !!props.value || !!props.placeholder}
              padded={!!props.hint}
              input={(
                <BasicInput
                  ref={input}
                  type="tel"
                  value={renderProps.value}
                  name={props.name}
                  mask={renderProps.mask}
                  autoComplete={props.autoComplete}
                  autoFocus={props.autoFocus}
                  placeholder={props.placeholder}
                  disabled={props.disabled}
                  padded={!!props.hint}
                  paddedLeft
                  error={!!props.error}
                  focused={renderProps.focused}
                  maxLength={props.maxLength}
                  pipe={props.pipe}
                  onChange={renderProps.onChange}
                  onFocus={renderProps.onFocus}
                  onBlur={renderProps.onBlur}
                  onKeyDown={renderProps.onKeyDown}
                  onKeyUp={renderProps.onKeyUp}
                />
              )}
              hint={props.hint}
              icon={(
                <Box ref={flag} onClick={renderProps.onFlagClick} cursor="pointer" width={6} height={6}>
                  <FlagIcon/>
                </Box>
              )}
              error={props.error}
              help={props.help}
              action={props.action}
            />
            <DropDown
              offset={16}
              zIndex={2}
              container={() => container.current}
              show={renderProps.showCountries}
              onHide={() => renderProps.onCountriesHide()}
            >
              <Card
                ref={dropdown}
                s="0 28px 52px 0 rgba(0, 0, 0, 0.16)"
                bg="#fff"
                r={10}
                px={6}
                py={3}
                width={1}
                maxHeight={104}
                boxSizing="content-box"
                overflow="auto"
                ml={-6}
              >
                {renderProps.options.map((option, index) => (
                  <OptionControl<any>
                    key={index}
                    value={option.code}
                    onClick={() => renderProps.selectCountry(option.code)}
                    onMouseEnter={() => renderProps.onCountryEnter(option.code)}
                    onMouseLeave={() => renderProps.onCountryLeave(option.code)}
                    children={(renderOptionProps) => {
                      const OptionIcon = flags[option.code]
                      return (
                        <Card
                          ref={options.get(option.code)}
                          ml={-6}
                          width={1}
                          px={6}
                          boxSizing="content-box"
                          bg={option.code === renderProps.countryCode ?
                            '#E6E6E6' : option.code === renderProps.selected ?
                            '#F5F5F5' : '#FFF'
                          }
                        >
                          <Flex
                            py={3}
                            cursor="pointer"
                            align="center"
                            onClick={renderOptionProps.onClick}
                            onMouseEnter={renderOptionProps.onMouseEnter}
                            onMouseLeave={renderOptionProps.onMouseLeave}
                          >
                            <FlexItem shrink={1} mr={3}>
                              <Box width={5} height={5}>
                                <OptionIcon/>
                              </Box>
                            </FlexItem>
                            <Paragraph>
                              {option.name}
                            </Paragraph>
                          </Flex>
                        </Card>
                      )
                    }}
                  />
                ))}
              </Card>
            </DropDown>
          </Pos>
        )
      }}
    />
  )
}

PhoneField.defaultProps = {
  tabIndex: 0,
}

export default PhoneField
